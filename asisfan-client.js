/**
 * AsisFan AI Client
 * Dipakai oleh widget di halaman utama dan halaman chat AsisFan.
 * Semua permintaan lewat api/asisfan.php, jadi API key tidak pernah ada di browser.
 */
(function () {
    const ENDPOINT = 'api/asisfan.php';

    class AsisFanError extends Error {
        constructor(code, message, status) {
            super(message);
            this.name = 'AsisFanError';
            this.code = code;
            this.status = status || 0;
            this.partialText = '';
        }
    }

    const escapeHtml = (str) => String(str).replace(/[&<>"']/g, (c) => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));

    const formatRupiah = (val) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val || 0);

    // Data portofolio yang tersimpan oleh halaman utama (script.js)
    const readSiteData = () => {
        try {
            return JSON.parse(localStorage.getItem('ssa_site_data') || 'null');
        } catch (e) {
            return null;
        }
    };

    // Ringkas data portofolio menjadi teks. Hanya data publik yang memang tampil di website.
    const buildContext = (data) => {
        if (!data || typeof data !== 'object') return '';
        const lines = [];
        const add = (label, value) => { if (value) lines.push(`${label}: ${value}`); };
        const list = (title, items, format) => {
            if (!Array.isArray(items) || !items.length) return;
            lines.push('', `${title}:`);
            items.forEach((item) => { if (item) lines.push(`- ${format(item)}`); });
        };

        add('Nama', data.name);
        if (Array.isArray(data.subheadlines)) add('Peran', data.subheadlines.join(', '));
        add('Bio', data.bio);
        add('Tentang & makna nama', data.aboutMeaning);
        add('Pendidikan & aktivitas', data.aboutEdu);
        add('Visi', data.aboutVision);
        if (data.aboutFactTitle) add('Fakta', `${data.aboutFactTitle}. ${data.aboutFactDesc || ''}`);
        add('Email', data.contactEmail);
        add('Lokasi', data.contactLocation);
        add('GitHub', data.githubUrl);
        add('LinkedIn', data.linkedinUrl);
        add('Instagram', data.instagramUrl);

        (Array.isArray(data.skillCategories) ? data.skillCategories : []).forEach((cat) => {
            list(`Keahlian ${cat.title}`, data[cat.key], (s) => {
                const items = (s.items || [])
                    .map((i) => `${i.title} (${i.done ? 'dikuasai' : `tahap ${i.stage || 0}/5`})`)
                    .join('; ');
                return `${s.name} [${s.statusText || '-'}]${items ? `: ${items}` : ''}`;
            });
        });

        list('Proyek', data.projects, (p) => `${p.title}: ${p.desc} (Teknologi: ${p.tech || '-'})`);
        list('Pengalaman', data.experiences, (e) => `${e.role} di ${e.org} (${e.period || '-'}): ${e.desc}`);
        list('Prestasi', data.achievements, (a) => `${a.title}, peran ${a.role || '-'}, ${a.award || ''}: ${a.desc}`);
        list('Sertifikat', data.certificates, (c) => `${c.title} (${c.issuer || '-'}): ${c.desc}`);
        list('Tools', data.tools, (t) => t.name);
        list('Testimoni', data.testimonials, (t) => `"${t.quote}" (${t.author}, ${t.title})`);

        const f = data.finance;
        if (f && typeof f === 'object') {
            lines.push('', `Tabungan: ${formatRupiah(f.current)} dari target ${formatRupiah(f.target)} untuk ${f.goal || '-'}. ${f.notes || ''} (Diperbarui: ${f.lastUpdated || '-'})`);
        }

        return lines.join('\n').trim();
    };

    /**
     * Kirim percakapan dan terima jawaban secara bertahap (streaming).
     * onText dipanggil dengan teks jawaban lengkap sejauh ini.
     * onStatus dipanggil saat AI mencari/membuka halaman web, onSource untuk tiap sumber web.
     */
    const streamChat = async ({ mode, messages, context, onText, onStatus, onSource, signal }) => {
        loadMarkdownLibs();
        let response;
        try {
            response = await fetch(ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream' },
                body: JSON.stringify({ mode, messages, context }),
                signal,
            });
        } catch (err) {
            if (err && err.name === 'AbortError') throw err;
            throw new AsisFanError('network', 'Tidak dapat terhubung ke server AsisFan.');
        }

        const type = response.headers.get('content-type') || '';
        if (!response.ok || !type.includes('text/event-stream')) {
            const body = type.includes('application/json') ? await response.json().catch(() => null) : null;
            throw new AsisFanError(
                (body && body.error) || 'unavailable',
                (body && body.message) || 'AsisFan AI sedang tidak tersedia.',
                response.status
            );
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        let text = '';

        const fail = (code, message) => {
            const err = new AsisFanError(code, message);
            err.partialText = text;
            return err;
        };

        try {
            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                buffer += decoder.decode(value, { stream: true });

                let idx;
                while ((idx = buffer.indexOf('\n\n')) !== -1) {
                    const raw = buffer.slice(0, idx);
                    buffer = buffer.slice(idx + 2);

                    let event = 'message';
                    let data = '';
                    raw.split('\n').forEach((line) => {
                        if (line.startsWith('event:')) event = line.slice(6).trim();
                        else if (line.startsWith('data:')) data += line.slice(5).trim();
                    });
                    if (!data) continue;

                    let payload;
                    try { payload = JSON.parse(data); } catch (e) { continue; }

                    if (event === 'text') {
                        text += payload.t || '';
                        if (onText) onText(text);
                    } else if (event === 'status') {
                        if (onStatus) onStatus(payload);
                    } else if (event === 'source') {
                        if (onSource) onSource(payload);
                    } else if (event === 'done') {
                        return { text, stopReason: payload.stop_reason || null };
                    } else if (event === 'error') {
                        throw fail(payload.code || 'upstream_error', payload.message || 'Terjadi kesalahan pada server AI.');
                    }
                }
            }
        } catch (err) {
            if (err instanceof AsisFanError || (err && err.name === 'AbortError')) {
                if (err.name === 'AbortError') err.partialText = text;
                throw err;
            }
            throw fail('network', 'Koneksi terputus sebelum jawaban selesai.');
        }

        throw fail('incomplete', 'Koneksi terputus sebelum jawaban selesai.');
    };

    // Library Markdown dimuat hanya saat AsisFan dipakai (halaman utama jadi lebih ringan)
    const MARKDOWN_LIBS = [
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/marked/12.0.2/marked.min.js',
            integrity: 'sha384-/TQbtLCAerC3jgaim+N78RZSDYV7ryeoBCVqTuzRrFec2akfBkHS7ACQ3PQhvMVi',
        },
        {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.1.6/purify.min.js',
            integrity: 'sha384-+VfUPEb0PdtChMwmBcBmykRMDd+v6D/oFmB3rZM/puCMDYcIvF968OimRh4KQY9a',
        },
    ];
    let libsPromise = null;

    const loadMarkdownLibs = () => {
        if (window.marked && window.DOMPurify) return Promise.resolve();
        if (!libsPromise) {
            libsPromise = Promise.all(MARKDOWN_LIBS.map((lib) => new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = lib.src;
                script.integrity = lib.integrity;
                script.crossOrigin = 'anonymous';
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            }))).catch(() => { libsPromise = null; });
        }
        return libsPromise;
    };

    // Ubah Markdown jawaban AI menjadi HTML yang aman
    let purifyReady = false;
    const renderMarkdown = (text) => {
        if (window.marked && window.DOMPurify) {
            if (!purifyReady) {
                window.DOMPurify.addHook('afterSanitizeAttributes', (node) => {
                    if (node.tagName === 'A') {
                        node.setAttribute('target', '_blank');
                        node.setAttribute('rel', 'noopener noreferrer');
                    }
                });
                purifyReady = true;
            }
            const html = window.marked.parse(String(text), { gfm: true, breaks: true });
            // Gambar & style diblokir agar jawaban tidak bisa memuat konten dari luar
            return window.DOMPurify.sanitize(html, { FORBID_TAGS: ['img', 'style', 'form', 'input', 'button'], FORBID_ATTR: ['style'] });
        }
        return escapeHtml(text).replace(/\n/g, '<br>');
    };

    // === File buatan AI: setiap blok kode bisa diunduh ===
    const LANG_EXT = {
        html: 'html', htm: 'html', css: 'css', javascript: 'js', js: 'js', mjs: 'js', jsx: 'jsx', typescript: 'ts', ts: 'ts', tsx: 'tsx',
        json: 'json', python: 'py', py: 'py', php: 'php', markdown: 'md', md: 'md', csv: 'csv', svg: 'svg', xml: 'xml', sql: 'sql',
        bash: 'sh', sh: 'sh', shell: 'sh', powershell: 'ps1', ps1: 'ps1', bat: 'bat', java: 'java', kotlin: 'kt', c: 'c', cpp: 'cpp',
        'c++': 'cpp', csharp: 'cs', cs: 'cs', go: 'go', rust: 'rs', ruby: 'rb', dart: 'dart', swift: 'swift', yaml: 'yml', yml: 'yml',
        toml: 'toml', ini: 'ini', txt: 'txt', text: 'txt', plaintext: 'txt',
    };
    const EXT_MIME = {
        html: 'text/html', css: 'text/css', js: 'text/javascript', json: 'application/json', csv: 'text/csv',
        svg: 'image/svg+xml', md: 'text/markdown', xml: 'application/xml',
    };

    const safeFileName = (name) => String(name || '')
        .split(/[\\/]/).pop()
        .replace(/[<>:"|?*\u0000-\u001f]/g, '_')
        .replace(/^\.+/, '')
        .slice(0, 100);

    // Daftar blok kode dalam jawaban, urutannya sama dengan elemen <pre> hasil renderMarkdown.
    // Nama file diambil dari info string, contoh: ```html index.html
    const extractCodeBlocks = (text) => {
        if (!window.marked || typeof window.marked.lexer !== 'function') return null;
        const blocks = [];
        window.marked.walkTokens(window.marked.lexer(String(text), { gfm: true, breaks: true }), (token) => {
            if (token.type !== 'code') return;
            const info = String(token.lang || '').trim().split(/\s+/).filter(Boolean);
            const lang = (info[0] || '').toLowerCase();
            let filename = info.slice(1).join(' ').replace(/^(title|file(name)?)=/i, '').replace(/^["']|["']$/g, '');
            if (!filename && /\.[a-z0-9]{1,8}$/i.test(info[0] || '')) filename = info[0];
            filename = safeFileName(filename);
            const ext = (filename.match(/\.([a-z0-9]{1,8})$/i) || [])[1] || LANG_EXT[lang] || 'txt';
            blocks.push({
                lang,
                filename: filename || `asisfan-${blocks.length + 1}.${ext}`,
                mime: EXT_MIME[ext.toLowerCase()] || 'text/plain',
                code: token.text,
            });
        });
        return blocks;
    };

    const downloadFile = (filename, content, mime) => {
        const blob = new Blob([content], { type: `${mime || 'text/plain'};charset=utf-8` });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = safeFileName(filename) || 'asisfan.txt';
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    };

    window.AsisFanAI = {
        streamChat, buildContext, readSiteData, renderMarkdown, loadMarkdownLibs, escapeHtml, AsisFanError,
        extractCodeBlocks, downloadFile,
    };
})();
