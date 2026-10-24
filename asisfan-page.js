/**
 * AsisFan - Halaman Chat Penuh
 * Riwayat percakapan disimpan di browser pengunjung (localStorage).
 */

document.addEventListener('DOMContentLoaded', () => {
    const ai = window.AsisFanAI;
    const STORAGE_KEY = 'asisfan_chats';
    const MAX_CHATS = 30;
    const MAX_SENT_MESSAGES = 20;

    const $ = (id) => document.getElementById(id);
    const mainEl = $('afMain');
    const chatEl = $('afChat');
    const messagesEl = $('afMessages');
    const formEl = $('afComposer');
    const inputEl = $('afInput');
    const sendBtn = $('afSendBtn');
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

    const saveChats = () => {
        chats.sort((a, b) => b.updatedAt - a.updatedAt);
        chats = chats.slice(0, MAX_CHATS);
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(chats)); } catch (e) { /* penyimpanan penuh/diblokir */ }
    };

    const makeTitle = (text) => {
        const clean = text.replace(/\s+/g, ' ').trim();
        return clean.length > 42 ? `${clean.slice(0, 42)}…` : clean;
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
            sendBtn.disabled = !inputEl.value.trim();
            sendBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
            sendBtn.setAttribute('aria-label', 'Kirim pesan');
        }
    };

    const autoResize = () => {
        inputEl.style.height = 'auto';
        inputEl.style.height = `${Math.min(inputEl.scrollHeight, 200)}px`;
        updateSendButton();
    };

    const appendUser = (text) => {
        const row = document.createElement('div');
        row.className = 'af-msg af-msg-user';
        const bubble = document.createElement('div');
        bubble.className = 'af-bubble';
        bubble.textContent = text;
        row.appendChild(bubble);
        messagesEl.appendChild(row);
        return row;
    };

    const appendBot = () => {
        const row = document.createElement('div');
        row.className = 'af-msg af-msg-bot';
        row.innerHTML = `
            <div class="af-avatar"><i class="fa-solid fa-robot"></i></div>
            <div class="af-msg-body">
                <div class="af-markdown"></div>
                <div class="af-typing"><span></span><span></span><span></span></div>
                <div class="af-msg-actions">
                    <button type="button" class="af-action-btn" title="Salin jawaban" aria-label="Salin jawaban">
                        <i class="fa-regular fa-copy"></i>
                    </button>
                </div>
            </div>
        `;
        messagesEl.appendChild(row);

        const markdownEl = row.querySelector('.af-markdown');
        const bodyEl = row.querySelector('.af-msg-body');
        const copyBtn = row.querySelector('.af-action-btn');
        let text = '';
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

        return {
            get text() { return text; },
            stream() { row.classList.add('is-streaming'); },
            update(newText) {
                text = newText;
                if (!frame) frame = requestAnimationFrame(render);
            },
            finish(finalText, note) {
                if (frame) cancelAnimationFrame(frame);
                text = finalText;
                render();
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
            if (m.role === 'user') appendUser(m.content);
            else appendBot().finish(m.content);
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
        if (current && current.id === id) {
            stopStreaming();
            current = null;
            renderConversation();
        }
        chats = chats.filter((c) => c.id !== id);
        saveChats();
        renderHistory();
    };

    // === Kirim pesan ===
    const noteFor = (stopReason) => {
        if (stopReason === 'max_tokens') return 'Jawaban dipotong karena mencapai batas panjang.';
        if (stopReason === 'refusal') return 'Sebagian permintaan ini tidak bisa dilayani.';
        return null;
    };

    const runAssistant = async () => {
        const chat = current;
        const view = appendBot();
        view.stream();
        scrollToBottom(true);

        if (!ai) {
            view.error('Gagal memuat AsisFan. Muat ulang halaman ini.');
            return;
        }

        busy = true;
        abortCtrl = new AbortController();
        updateSendButton();

        try {
            const result = await ai.streamChat({
                mode: 'page',
                messages: chat.messages.slice(-MAX_SENT_MESSAGES),
                context: ai.buildContext(ai.readSiteData()),
                signal: abortCtrl.signal,
                onText: (text) => view.update(text),
            });

            if (!result.text.trim()) {
                throw new ai.AsisFanError(
                    'empty',
                    result.stopReason === 'refusal' ? 'Maaf, AsisFan tidak bisa membantu permintaan ini.' : 'AsisFan tidak memberikan jawaban. Coba lagi.'
                );
            }
            view.finish(result.text, noteFor(result.stopReason));
            chat.messages.push({ role: 'assistant', content: result.text });
        } catch (err) {
            const partial = (err && err.partialText) || view.text;
            if (err && err.name === 'AbortError') {
                if (partial) {
                    view.finish(partial, 'Jawaban dihentikan.');
                    chat.messages.push({ role: 'assistant', content: partial });
                } else {
                    view.remove();
                }
            } else if (partial) {
                view.finish(partial, err.message);
                chat.messages.push({ role: 'assistant', content: partial });
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
        if (!text || busy) return;

        if (!current) {
            current = {
                id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`,
                title: makeTitle(text),
                messages: [],
                updatedAt: Date.now(),
            };
            chats.unshift(current);
        }

        current.messages.push({ role: 'user', content: text });
        current.updatedAt = Date.now();
        saveChats();
        renderHistory();

        setEmpty(false);
        titleEl.textContent = current.title;
        appendUser(text);
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
