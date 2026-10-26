/**
 * AsisFan - Halaman Chat Penuh
 * Riwayat percakapan disimpan di browser pengunjung (localStorage).
 * Isi lampiran hanya disimpan di memori tab ini (terlalu besar untuk localStorage).
 */

document.addEventListener('DOMContentLoaded', () => {
    const ai = window.AsisFanAI;
    const STORAGE_KEY = 'asisfan_chats';
    const MAX_CHATS = 30;
    const MAX_SENT_MESSAGES = 20;
    const MAX_SOURCES = 8;

    // Batas lampiran (sama dengan api/asisfan.php)
    const MAX_FILES = 5;
    const MAX_REQUEST_BYTES = 6 * 1024 * 1024;
    const MAX_REQUEST_TEXT = 150000;
    const MAX_PDF_BYTES = 4.5 * 1024 * 1024;
    const MAX_TEXT_FILE_BYTES = 500 * 1024;
    const IMAGE_MAX_SIDE = 1568;
    const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    const TEXT_EXT = /\.(txt|md|markdown|csv|tsv|json|xml|html?|css|js|mjs|jsx|ts|tsx|py|php|java|kt|c|h|cpp|cs|go|rs|rb|dart|swift|sql|sh|bat|ps1|ya?ml|toml|ini|log|env\.example|svg)$/i;

    const $ = (id) => document.getElementById(id);
    const mainEl = $('afMain');
    const chatEl = $('afChat');
    const messagesEl = $('afMessages');
    const formEl = $('afComposer');
    const inputEl = $('afInput');
    const sendBtn = $('afSendBtn');
    const attachBtn = $('afAttachBtn');
    const researchBtn = $('afResearchBtn');
    const fileInput = $('afFileInput');
    const attachmentsEl = $('afAttachments');
    const composerNote = $('afComposerNote');
    const historyEl = $('afHistory');
    const titleEl = $('afChatTitle');
    const sidebarEl = $('afSidebar');
    const overlayEl = $('afOverlay');

    // === Theme (sinkron dengan website utama) ===
    $('themeToggleBtn').addEventListener('click', () => {
        const toLight = document.body.classList.contains('dark-theme');
        document.body.classList.toggle('light-theme', toLight);
        document.body.classList.toggle('dark-theme', !toLight);
        try { localStorage.setItem('ssa_theme', toLight ? 'light' : 'dark'); } catch (e) { /* abaikan */ }
    });

    // === Sidebar (mobile) ===
    const setSidebar = (open) => {
        sidebarEl.classList.toggle('is-open', open);
        overlayEl.classList.toggle('is-open', open);
    };
    $('afSidebarToggle').addEventListener('click', () => setSidebar(true));
    $('afSidebarClose').addEventListener('click', () => setSidebar(false));
    overlayEl.addEventListener('click', () => setSidebar(false));

    // === Penyimpanan percakapan ===
    const loadChats = () => {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
            return Array.isArray(saved) ? saved.filter((c) => c && c.id && Array.isArray(c.messages)) : [];
        } catch (e) {
            return [];
        }
    };

    let chats = loadChats();
    let current = null;
    let busy = false;
    let abortCtrl = null;
    let pending = [];      // lampiran yang belum dikirim
    let processing = 0;    // file yang sedang dibaca
    const attachmentStore = new Map(); // id pesan -> isi lampiran

    // === Mode Riset: lebih banyak pencarian web & berpikir lebih dalam ===
    let research = false;
    try { research = localStorage.getItem('asisfan_research') === '1'; } catch (e) { /* abaikan */ }
    const setResearch = (on) => {
        research = on;
        researchBtn.classList.toggle('is-active', on);
        researchBtn.setAttribute('aria-pressed', String(on));
        inputEl.placeholder = on ? 'Mau riset apa?' : 'Kirim pesan ke AsisFan...';
        try { localStorage.setItem('asisfan_research', on ? '1' : '0'); } catch (e) { /* abaikan */ }
    };
    researchBtn.addEventListener('click', () => {
        setResearch(!research);
        inputEl.focus();
    });
    setResearch(research);

    const makeId = () => `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;

    const saveChats = () => {
        chats.sort((a, b) => b.updatedAt - a.updatedAt);
        chats = chats.slice(0, MAX_CHATS);
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(chats)); } catch (e) { /* penyimpanan penuh/diblokir */ }
    };

    const makeTitle = (text) => {
        const clean = text.replace(/\s+/g, ' ').trim();
        return clean.length > 42 ? `${clean.slice(0, 42)}…` : clean;
    };

    const formatSize = (bytes) => (bytes >= 1048576 ? `${(bytes / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`);

    const fileIcon = (type) => ({ image: 'fa-regular fa-image', pdf: 'fa-regular fa-file-pdf', text: 'fa-regular fa-file-lines' }[type] || 'fa-regular fa-file');

    let noteTimer = 0;
    const showNote = (message) => {
        composerNote.textContent = message;
        composerNote.hidden = false;
        clearTimeout(noteTimer);
        noteTimer = setTimeout(() => { composerNote.hidden = true; }, 6000);
    };

    // === Tampilan ===
    const isNearBottom = () => chatEl.scrollHeight - chatEl.scrollTop - chatEl.clientHeight < 120;
    const scrollToBottom = (force) => {
        if (force || isNearBottom()) chatEl.scrollTop = chatEl.scrollHeight;
    };

    const setEmpty = (empty) => mainEl.classList.toggle('is-empty', empty);

    const updateSendButton = () => {
        if (busy) {
            sendBtn.disabled = false;
            sendBtn.innerHTML = '<i class="fa-solid fa-stop"></i>';
            sendBtn.setAttribute('aria-label', 'Hentikan jawaban');
        } else {
            sendBtn.disabled = processing > 0 || (!inputEl.value.trim() && !pending.length);
            sendBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
            sendBtn.setAttribute('aria-label', 'Kirim pesan');
        }
    };

    const autoResize = () => {
        inputEl.style.height = 'auto';
        inputEl.style.height = `${Math.min(inputEl.scrollHeight, 200)}px`;
        updateSendButton();
    };

    const makeFileChip = (file, onRemove) => {
        const chip = document.createElement('div');
        chip.className = 'af-file-chip';
        if (file.preview) {
            const img = document.createElement('img');
            img.src = file.preview;
            img.alt = '';
            chip.appendChild(img);
        } else {
            const icon = document.createElement('i');
            icon.className = fileIcon(file.type);
            chip.appendChild(icon);
        }
        const name = document.createElement('span');
        name.className = 'af-file-name';
        name.textContent = file.name;
        name.title = file.name;
        chip.appendChild(name);
        if (onRemove) {
            const del = document.createElement('button');
            del.type = 'button';
            del.className = 'af-file-remove';
            del.setAttribute('aria-label', `Hapus ${file.name}`);
            del.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            del.addEventListener('click', onRemove);
            chip.appendChild(del);
        }
        return chip;
    };

    const appendUser = (message) => {
        const row = document.createElement('div');
        row.className = 'af-msg af-msg-user';
        const wrap = document.createElement('div');
        wrap.className = 'af-user-wrap';

        if (message.files && message.files.length) {
            const stored = attachmentStore.get(message.id) || [];
            const files = document.createElement('div');
            files.className = 'af-msg-files';
            message.files.forEach((f, i) => {
                const chip = makeFileChip({ ...f, preview: stored[i] && stored[i].preview });
                if (!stored.length) chip.title = 'Isi file tidak tersimpan setelah halaman dimuat ulang';
                files.appendChild(chip);
            });
            wrap.appendChild(files);
        }
        if (message.content) {
            const bubble = document.createElement('div');
            bubble.className = 'af-bubble';
            bubble.textContent = message.content;
            wrap.appendChild(bubble);
        }
        row.appendChild(wrap);
        messagesEl.appendChild(row);
        return row;
    };

    // Tambahkan judul, tombol salin & unduh pada setiap blok kode
    const enhanceCodeBlocks = (markdownEl, text) => {
        const pres = markdownEl.querySelectorAll('pre');
        if (!pres.length) return;
        const blocks = ai.extractCodeBlocks(text);
        if (!blocks || blocks.length !== pres.length) return;

        pres.forEach((pre, i) => {
            const block = blocks[i];
            const wrap = document.createElement('div');
            wrap.className = 'af-code';
            const head = document.createElement('div');
            head.className = 'af-code-head';

            const label = document.createElement('span');
            label.className = 'af-code-name';
            label.innerHTML = '<i class="fa-regular fa-file-code"></i>';
            label.append(` ${block.filename}`);

            const copy = document.createElement('button');
            copy.type = 'button';
            copy.className = 'af-code-btn';
            copy.innerHTML = '<i class="fa-regular fa-copy"></i><span>Salin</span>';
            copy.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(block.code);
                    copy.innerHTML = '<i class="fa-solid fa-check"></i><span>Tersalin</span>';
                    setTimeout(() => { copy.innerHTML = '<i class="fa-regular fa-copy"></i><span>Salin</span>'; }, 1500);
                } catch (e) { /* clipboard tidak diizinkan */ }
            });

            const download = document.createElement('button');
            download.type = 'button';
            download.className = 'af-code-btn';
            download.innerHTML = '<i class="fa-solid fa-download"></i><span>Unduh</span>';
            download.addEventListener('click', () => ai.downloadFile(block.filename, block.code, block.mime));

            head.append(label, copy, download);
            pre.replaceWith(wrap);
            wrap.append(head, pre);
        });
    };

    const renderSources = (container, sources) => {
        container.innerHTML = '';
        if (!sources || !sources.length) return;
        const label = document.createElement('div');
        label.className = 'af-sources-label';
        label.textContent = 'Sumber';
        container.appendChild(label);
        const list = document.createElement('div');
        list.className = 'af-sources-list';
        sources.forEach((s) => {
            let host = '';
            try { host = new URL(s.url).hostname.replace(/^www\./, ''); } catch (e) { return; }
            const link = document.createElement('a');
            link.className = 'af-source';
            link.href = s.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.title = s.title || s.url;
            const hostEl = document.createElement('span');
            hostEl.className = 'af-source-host';
            hostEl.textContent = host;
            link.appendChild(hostEl);
            if (s.title) {
                const titleSpan = document.createElement('span');
                titleSpan.className = 'af-source-title';
                titleSpan.textContent = s.title;
                link.appendChild(titleSpan);
            }
            list.appendChild(link);
        });
        container.appendChild(list);
    };

    const appendBot = (isResearch) => {
        const row = document.createElement('div');
        row.className = 'af-msg af-msg-bot';
        row.innerHTML = `
            <div class="af-avatar"><i class="fa-solid fa-robot"></i></div>
            <div class="af-msg-body">
                <div class="af-research-tag" hidden><i class="fa-solid fa-flask"></i><span>Mode Riset</span></div>
                <div class="af-status" hidden></div>
                <div class="af-markdown"></div>
                <div class="af-typing"><span></span><span></span><span></span></div>
                <div class="af-sources"></div>
                <div class="af-msg-actions">
                    <button type="button" class="af-action-btn" data-act="copy" title="Salin jawaban" aria-label="Salin jawaban">
                        <i class="fa-regular fa-copy"></i>
                    </button>
                    <button type="button" class="af-action-btn" data-act="download" title="Unduh jawaban (.md)" aria-label="Unduh jawaban sebagai file Markdown">
                        <i class="fa-solid fa-download"></i>
                    </button>
                </div>
            </div>
        `;
        messagesEl.appendChild(row);

        const markdownEl = row.querySelector('.af-markdown');
        const statusEl = row.querySelector('.af-status');
        const tagEl = row.querySelector('.af-research-tag');
        const steps = { search: 0, fetch: 0 };
        const updateTag = (saved) => {
            if (saved) Object.assign(steps, saved);
            const parts = [];
            if (steps.search) parts.push(`${steps.search} pencarian`);
            if (steps.fetch) parts.push(`${steps.fetch} halaman dibaca`);
            tagEl.querySelector('span').textContent = parts.length ? `Mode Riset · ${parts.join(' · ')}` : 'Mode Riset';
        };
        tagEl.hidden = !isResearch;
        const sourcesEl = row.querySelector('.af-sources');
        const bodyEl = row.querySelector('.af-msg-body');
        const copyBtn = row.querySelector('[data-act="copy"]');
        let text = '';
        let sources = [];
        let frame = 0;

        const render = () => {
            frame = 0;
            markdownEl.innerHTML = ai.renderMarkdown(text);
            row.classList.toggle('has-text', text.length > 0);
            scrollToBottom();
        };

        copyBtn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(text);
                copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
                setTimeout(() => { copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>'; }, 1500);
            } catch (e) { /* clipboard tidak diizinkan */ }
        });
        row.querySelector('[data-act="download"]').addEventListener('click', () => {
            const stamp = new Date().toISOString().slice(0, 16).replace(/[-:T]/g, '');
            ai.downloadFile(`asisfan-${stamp}.md`, text, 'text/markdown');
        });

        return {
            get text() { return text; },
            get sources() { return sources; },
            get steps() { return steps; },
            stream() { row.classList.add('is-streaming'); },
            update(newText) {
                text = newText;
                if (!frame) frame = requestAnimationFrame(render);
            },
            status(info) {
                const icon = document.createElement('i');
                const label = document.createElement('span');
                if (info.tool === 'search') {
                    icon.className = 'fa-solid fa-magnifying-glass';
                    label.textContent = `Mencari: ${info.query}`;
                } else if (info.tool === 'fetch') {
                    icon.className = 'fa-solid fa-globe';
                    let host = info.url;
                    try { host = new URL(info.url).hostname; } catch (e) { /* biarkan URL apa adanya */ }
                    label.textContent = `Membuka ${host}`;
                } else if (info.tool === 'web_unavailable') {
                    icon.className = 'fa-solid fa-circle-info';
                    label.textContent = 'Akses web sedang tidak tersedia, menjawab tanpa internet.';
                } else {
                    return;
                }
                if (info.tool === 'search' || info.tool === 'fetch') {
                    steps[info.tool] += 1;
                    updateTag();
                }
                statusEl.replaceChildren(icon, label);
                statusEl.hidden = false;
                scrollToBottom();
            },
            addSource(source) {
                if (!source || !source.url || sources.length >= MAX_SOURCES) return;
                if (sources.some((s) => s.url === source.url)) return;
                sources.push({ url: source.url, title: (source.title || '').slice(0, 160) });
            },
            finish(finalText, note, savedSources, savedSteps) {
                if (frame) cancelAnimationFrame(frame);
                text = finalText;
                if (savedSources) sources = savedSources;
                if (savedSteps) updateTag(savedSteps);
                render();
                enhanceCodeBlocks(markdownEl, text);
                renderSources(sourcesEl, sources);
                statusEl.hidden = true;
                row.classList.remove('is-streaming');
                if (note) {
                    const noteEl = document.createElement('p');
                    noteEl.className = 'af-note';
                    noteEl.textContent = note;
                    bodyEl.insertBefore(noteEl, row.querySelector('.af-msg-actions'));
                }
            },
            error(message, onRetry) {
                if (frame) cancelAnimationFrame(frame);
                row.classList.remove('is-streaming');
                row.classList.add('has-error');
                statusEl.hidden = true;
                markdownEl.innerHTML = '';
                const box = document.createElement('div');
                box.className = 'af-error';
                box.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
                const msg = document.createElement('span');
                msg.textContent = message;
                box.appendChild(msg);
                if (onRetry) {
                    const retry = document.createElement('button');
                    retry.type = 'button';
                    retry.className = 'af-retry-btn';
                    retry.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Coba lagi';
                    retry.addEventListener('click', () => {
                        if (busy) return;
                        row.remove();
                        onRetry();
                    });
                    box.appendChild(retry);
                }
                markdownEl.appendChild(box);
                scrollToBottom();
            },
            remove() { row.remove(); },
        };
    };

    const renderHistory = () => {
        historyEl.innerHTML = '';
        if (!chats.length) {
            historyEl.innerHTML = '<div class="af-history-empty">Belum ada percakapan.</div>';
            return;
        }
        chats.forEach((chat) => {
            const item = document.createElement('div');
            item.className = `af-history-item${current && current.id === chat.id ? ' active' : ''}`;

            const open = document.createElement('button');
            open.type = 'button';
            open.className = 'af-history-open';
            open.textContent = chat.title || 'Percakapan';
            open.title = chat.title || 'Percakapan';
            open.addEventListener('click', () => openChat(chat.id));

            const del = document.createElement('button');
            del.type = 'button';
            del.className = 'af-history-delete';
            del.title = 'Hapus percakapan';
            del.setAttribute('aria-label', 'Hapus percakapan');
            del.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
            del.addEventListener('click', () => deleteChat(chat.id));

            item.append(open, del);
            historyEl.appendChild(item);
        });
    };

    const renderConversation = () => {
        messagesEl.innerHTML = '';
        if (!current || !current.messages.length) {
            setEmpty(true);
            titleEl.textContent = 'Percakapan baru';
            return;
        }
        setEmpty(false);
        titleEl.textContent = current.title;
        current.messages.forEach((m) => {
            if (m.role === 'user') appendUser(m);
            else appendBot(Boolean(m.research)).finish(m.content, null, m.sources, m.research);
        });
        scrollToBottom(true);
    };

    const stopStreaming = () => {
        if (abortCtrl) abortCtrl.abort();
    };

    const newChat = () => {
        stopStreaming();
        current = null;
        renderConversation();
        renderHistory();
        setSidebar(false);
        inputEl.focus();
    };

    const openChat = (id) => {
        stopStreaming();
        current = chats.find((c) => c.id === id) || null;
        renderConversation();
        renderHistory();
        setSidebar(false);
    };

    const deleteChat = (id) => {
        if (!window.confirm('Hapus percakapan ini dari riwayat?')) return;
        const chat = chats.find((c) => c.id === id);
        if (chat) chat.messages.forEach((m) => attachmentStore.delete(m.id));
        if (current && current.id === id) {
            stopStreaming();
            current = null;
            renderConversation();
        }
        chats = chats.filter((c) => c.id !== id);
        saveChats();
        renderHistory();
    };

    // === Lampiran ===
    const readAs = (file, method) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader[method](file);
    });

    const loadImage = (src) => new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });

    // Gambar besar diperkecil di browser: lebih cepat dikirim dan lebih hemat token
    const prepareImage = async (file) => {
        const dataUrl = await readAs(file, 'readAsDataURL');
        const img = await loadImage(dataUrl);
        const side = Math.max(img.naturalWidth, img.naturalHeight);
        const isAnimatedGif = file.type === 'image/gif';
        let mediaType = file.type;
        let base64 = dataUrl.slice(dataUrl.indexOf(',') + 1);

        if (!isAnimatedGif && (side > IMAGE_MAX_SIDE || file.size > 1.5 * 1024 * 1024)) {
            const scale = Math.min(1, IMAGE_MAX_SIDE / side);
            const canvas = document.createElement('canvas');
            canvas.width = Math.round(img.naturalWidth * scale);
            canvas.height = Math.round(img.naturalHeight * scale);
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const resized = canvas.toDataURL('image/jpeg', 0.85);
            mediaType = 'image/jpeg';
            base64 = resized.slice(resized.indexOf(',') + 1);
        }

        // Thumbnail kecil untuk ditampilkan di chat
        const thumbScale = Math.min(1, 160 / side);
        const thumb = document.createElement('canvas');
        thumb.width = Math.max(1, Math.round(img.naturalWidth * thumbScale));
        thumb.height = Math.max(1, Math.round(img.naturalHeight * thumbScale));
        thumb.getContext('2d').drawImage(img, 0, 0, thumb.width, thumb.height);

        return { type: 'image', media_type: mediaType, data: base64, preview: thumb.toDataURL('image/jpeg', 0.7) };
    };

    const prepareFile = async (file) => {
        const name = file.name || 'lampiran';
        if (IMAGE_TYPES.includes(file.type)) {
            if (file.type === 'image/gif' && file.size > 3 * 1024 * 1024) throw new Error(`${name}: GIF maksimal 3 MB.`);
            return { name, ...(await prepareImage(file)) };
        }
        if (file.type === 'application/pdf' || /\.pdf$/i.test(name)) {
            if (file.size > MAX_PDF_BYTES) throw new Error(`${name}: PDF maksimal ${formatSize(MAX_PDF_BYTES)}.`);
            const dataUrl = await readAs(file, 'readAsDataURL');
            return { name, type: 'pdf', data: dataUrl.slice(dataUrl.indexOf(',') + 1) };
        }
        if (file.type.startsWith('text/') || file.type === 'application/json' || TEXT_EXT.test(name)) {
            if (file.size > MAX_TEXT_FILE_BYTES) throw new Error(`${name}: file teks maksimal ${formatSize(MAX_TEXT_FILE_BYTES)}.`);
            return { name, type: 'text', text: await readAs(file, 'readAsText') };
        }
        throw new Error(`${name}: format belum didukung. Gunakan gambar, PDF, atau file teks (untuk Word/Excel, simpan dulu sebagai PDF atau CSV).`);
    };

    const sizeOf = (files) => files.reduce((acc, f) => {
        if (f.type === 'text') acc.text += f.text.length;
        else acc.bytes += Math.floor((f.data.length * 3) / 4);
        return acc;
    }, { bytes: 0, text: 0 });

    const renderPending = () => {
        attachmentsEl.innerHTML = '';
        attachmentsEl.hidden = !pending.length;
        pending.forEach((file) => {
            attachmentsEl.appendChild(makeFileChip(file, () => {
                pending = pending.filter((f) => f !== file);
                renderPending();
                updateSendButton();
            }));
        });
    };

    const addFiles = async (fileList) => {
        const files = Array.from(fileList || []);
        if (!files.length) return;
        const room = MAX_FILES - pending.length;
        if (room <= 0) {
            showNote(`Maksimal ${MAX_FILES} file per pesan.`);
            return;
        }
        if (files.length > room) showNote(`Maksimal ${MAX_FILES} file per pesan. Sebagian file tidak ditambahkan.`);

        processing += 1;
        updateSendButton();
        try {
            for (const file of files.slice(0, room)) {
                try {
                    const prepared = await prepareFile(file);
                    const total = sizeOf([...pending, prepared]);
                    if (total.bytes > MAX_REQUEST_BYTES) throw new Error(`${prepared.name}: total gambar & PDF per pesan maksimal ${formatSize(MAX_REQUEST_BYTES)}.`);
                    if (total.text > MAX_REQUEST_TEXT) throw new Error(`${prepared.name}: total isi file teks terlalu panjang.`);
                    pending.push(prepared);
                    renderPending();
                } catch (err) {
                    showNote(err && err.message ? err.message : `${file.name}: gagal dibaca.`);
                }
            }
        } finally {
            processing -= 1;
            updateSendButton();
        }
    };

    attachBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', () => {
        addFiles(fileInput.files);
        fileInput.value = '';
    });

    inputEl.addEventListener('paste', (e) => {
        const files = e.clipboardData && e.clipboardData.files;
        if (files && files.length) {
            e.preventDefault();
            addFiles(files);
        }
    });

    let dragDepth = 0;
    const isFileDrag = (e) => e.dataTransfer && Array.from(e.dataTransfer.types || []).includes('Files');
    mainEl.addEventListener('dragenter', (e) => {
        if (!isFileDrag(e)) return;
        e.preventDefault();
        dragDepth += 1;
        formEl.classList.add('is-dragover');
    });
    mainEl.addEventListener('dragover', (e) => { if (isFileDrag(e)) e.preventDefault(); });
    mainEl.addEventListener('dragleave', () => {
        dragDepth = Math.max(0, dragDepth - 1);
        if (!dragDepth) formEl.classList.remove('is-dragover');
    });
    mainEl.addEventListener('drop', (e) => {
        if (!isFileDrag(e)) return;
        e.preventDefault();
        dragDepth = 0;
        formEl.classList.remove('is-dragover');
        addFiles(e.dataTransfer.files);
    });

    // Lampiran pesan terbaru diutamakan; yang lama atau yang hilang setelah reload diganti catatan
    const buildRequestMessages = (messages) => {
        const sliced = messages.slice(-MAX_SENT_MESSAGES);
        const used = { bytes: 0, text: 0 };
        const out = new Array(sliced.length);
        for (let i = sliced.length - 1; i >= 0; i -= 1) {
            const m = sliced[i];
            const item = { role: m.role, content: m.content || '' };
            if (m.role === 'user' && m.files && m.files.length) {
                const stored = attachmentStore.get(m.id);
                const size = stored ? sizeOf(stored) : null;
                if (size && used.bytes + size.bytes <= MAX_REQUEST_BYTES && used.text + size.text <= MAX_REQUEST_TEXT) {
                    used.bytes += size.bytes;
                    used.text += size.text;
                    item.attachments = stored.map(({ type, name, media_type: mediaType, data, text }) => (
                        type === 'text' ? { type, name, text } : { type, name, media_type: mediaType, data }
                    ));
                } else {
                    const names = m.files.map((f) => f.name).join(', ');
                    item.content = `[Lampiran sebelumnya: ${names}. Isi file sudah tidak tersedia.]\n\n${item.content}`.trim();
                }
            }
            out[i] = item;
        }
        return out;
    };

    // === Kirim pesan ===
    const noteFor = (stopReason) => {
        if (stopReason === 'max_tokens') return 'Jawaban dipotong karena mencapai batas panjang.';
        if (stopReason === 'refusal') return 'Sebagian permintaan ini tidak bisa dilayani.';
        if (stopReason === 'pause_turn') return 'Riset dihentikan karena terlalu panjang. Kirim "lanjutkan" untuk meneruskan.';
        return null;
    };

    const runAssistant = async () => {
        const chat = current;
        const isResearch = research;
        const view = appendBot(isResearch);
        view.stream();
        scrollToBottom(true);

        if (!ai) {
            view.error('Gagal memuat AsisFan. Muat ulang halaman ini.');
            return;
        }

        busy = true;
        abortCtrl = new AbortController();
        updateSendButton();

        const pushAnswer = (content) => {
            const message = { role: 'assistant', content };
            if (view.sources.length) message.sources = view.sources;
            if (isResearch) message.research = { ...view.steps };
            chat.messages.push(message);
        };

        try {
            const result = await ai.streamChat({
                mode: isResearch ? 'research' : 'page',
                messages: buildRequestMessages(chat.messages),
                context: ai.buildContext(ai.readSiteData()),
                signal: abortCtrl.signal,
                onText: (text) => view.update(text),
                onStatus: (info) => view.status(info),
                onSource: (source) => view.addSource(source),
            });

            if (!result.text.trim()) {
                throw new ai.AsisFanError(
                    'empty',
                    result.stopReason === 'refusal' ? 'Maaf, AsisFan tidak bisa membantu permintaan ini.' : 'AsisFan tidak memberikan jawaban. Coba lagi.'
                );
            }
            view.finish(result.text, noteFor(result.stopReason));
            pushAnswer(result.text);
        } catch (err) {
            const partial = (err && err.partialText) || view.text;
            if (err && err.name === 'AbortError') {
                if (partial) {
                    view.finish(partial, 'Jawaban dihentikan.');
                    pushAnswer(partial);
                } else {
                    view.remove();
                }
            } else if (partial) {
                view.finish(partial, err.message);
                pushAnswer(partial);
            } else {
                view.error((err && err.message) || 'Terjadi kesalahan.', () => runAssistant());
            }
        } finally {
            chat.updatedAt = Date.now();
            saveChats();
            renderHistory();
            busy = false;
            abortCtrl = null;
            updateSendButton();
        }
    };

    const send = (rawText) => {
        const text = rawText.trim();
        if ((!text && !pending.length) || busy || processing) return;

        const files = pending;
        pending = [];
        renderPending();

        if (!current) {
            current = {
                id: makeId(),
                title: makeTitle(text || files.map((f) => f.name).join(', ')),
                messages: [],
                updatedAt: Date.now(),
            };
            chats.unshift(current);
        }

        const message = { id: makeId(), role: 'user', content: text };
        if (files.length) {
            message.files = files.map((f) => ({ name: f.name, type: f.type }));
            attachmentStore.set(message.id, files);
        }
        current.messages.push(message);
        current.updatedAt = Date.now();
        saveChats();
        renderHistory();

        setEmpty(false);
        titleEl.textContent = current.title;
        appendUser(message);
        inputEl.value = '';
        autoResize();
        runAssistant();
    };

    formEl.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy) stopStreaming();
        else send(inputEl.value);
    });

    inputEl.addEventListener('input', autoResize);
    window.addEventListener('resize', autoResize); // tinggi bisa salah hitung saat tab belum tampil
    inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
            e.preventDefault();
            if (!busy) send(inputEl.value);
        }
    });

    document.querySelectorAll('.af-chip').forEach((chip) => {
        chip.addEventListener('click', () => send(chip.getAttribute('data-query') || chip.textContent));
    });

    $('afNewChat').addEventListener('click', newChat);

    renderHistory();
    renderConversation();
    updateSendButton();
    inputEl.focus();
});
