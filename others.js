/**
 * Shifan Shalih Adiluhung - Others Page Security & AI Hub
 * Strict CSP Compliant (No inline scripts)
 * Versi 3.0 - Gen Z & Gen Alpha Interactive Edition
 */

document.addEventListener('DOMContentLoaded', () => {
    // === 1. CREDENTIAL CONFIGURATION ===
    // Kredensial Akses Khusus Others:
    // Username: qsbs
    // Password: AK561
    const VALID_USERNAME = 'qsbs';
    const VALID_PASSWORD = 'AK561';

    const AUTH_SESSION_KEY = 'ssa_others_auth';
    const AUTH_USER_KEY = 'ssa_others_user';
    const AUTH_TIME_KEY = 'ssa_others_time';

    // DOM Elements - Auth & Gatekeeper
    const gatekeeperSection = document.getElementById('gatekeeperSection');
    const gatekeeperCard = document.getElementById('gatekeeperCard');
    const blankPageSection = document.getElementById('blankPageSection');
    const othersLoginForm = document.getElementById('othersLoginForm');
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    const togglePasswordBtn = document.getElementById('togglePasswordBtn');
    const togglePasswordIcon = document.getElementById('togglePasswordIcon');
    const authErrorAlert = document.getElementById('authErrorAlert');
    const authErrorText = document.getElementById('authErrorText');
    const logoutBtn = document.getElementById('logoutBtn');
    const themeToggleBtn = document.getElementById('themeToggleBtn');

    // === 2. AUTHENTICATION STATE HANDLERS ===
    const checkAuthState = () => {
        let isAuth = false;
        try {
            isAuth = sessionStorage.getItem(AUTH_SESSION_KEY) === 'true';
        } catch (e) {
            isAuth = false;
        }

        if (isAuth) {
            setAuthenticatedView();
        } else {
            setUnauthenticatedView();
        }
    };

    const setAuthenticatedView = () => {
        document.documentElement.classList.add('is-authenticated');
        document.documentElement.classList.remove('is-unauthenticated');

        if (gatekeeperSection) gatekeeperSection.style.display = 'none';
        if (blankPageSection) blankPageSection.style.display = 'block';

        // Inisialisasi builder output real-time saat login
        updateBuilderPreview();
    };

    const setUnauthenticatedView = () => {
        document.documentElement.classList.add('is-unauthenticated');
        document.documentElement.classList.remove('is-authenticated');

        if (blankPageSection) blankPageSection.style.display = 'none';
        if (gatekeeperSection) gatekeeperSection.style.display = 'flex';

        if (othersLoginForm) othersLoginForm.reset();
        if (authErrorAlert) authErrorAlert.classList.remove('show');
        if (passwordInput) passwordInput.type = 'password';
        if (togglePasswordIcon) {
            togglePasswordIcon.classList.remove('fa-eye-slash');
            togglePasswordIcon.classList.add('fa-eye');
        }

        // Fokus ke input username setelah render
        setTimeout(() => {
            if (usernameInput) usernameInput.focus();
        }, 150);
    };

    // Tampilkan pesan error dengan animasi getar
    const showError = (message) => {
        if (!authErrorAlert || !authErrorText) return;
        authErrorText.textContent = message;
        authErrorAlert.classList.add('show');

        if (gatekeeperCard) {
            gatekeeperCard.classList.remove('shake-anim');
            void gatekeeperCard.offsetWidth; // trigger reflow
            gatekeeperCard.classList.add('shake-anim');
            setTimeout(() => {
                gatekeeperCard.classList.remove('shake-anim');
            }, 600);
        }
    };

    // === 3. LOGIN FORM SUBMISSION ===
    if (othersLoginForm) {
        othersLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputUser = (usernameInput?.value || '').trim();
            const inputPass = passwordInput?.value || '';

            if (!inputUser || !inputPass) {
                showError('Mohon isi nama pengguna dan kata sandi.');
                showToast('Formulir belum lengkap', 'error');
                return;
            }

            // Validasi kredensial pengguna (case-insensitive username)
            if (inputUser.toLowerCase() === VALID_USERNAME.toLowerCase() && inputPass === VALID_PASSWORD) {
                const now = new Date();
                const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

                try {
                    sessionStorage.setItem(AUTH_SESSION_KEY, 'true');
                    sessionStorage.setItem(AUTH_USER_KEY, VALID_USERNAME);
                    sessionStorage.setItem(AUTH_TIME_KEY, timeString);
                } catch (e) {}

                showToast(`Verifikasi sukses! Selamat datang, ${VALID_USERNAME}.`, 'success');
                setAuthenticatedView();
            } else {
                showError('Nama pengguna atau kata sandi tidak valid. Silakan coba lagi.');
                showToast('Akses ditolak: Kredensial salah', 'error');
                if (passwordInput) {
                    passwordInput.value = '';
                    passwordInput.focus();
                }
            }
        });
    }

    // Toggle Password Visibility
    if (togglePasswordBtn && passwordInput && togglePasswordIcon) {
        togglePasswordBtn.addEventListener('click', () => {
            const isPassword = passwordInput.type === 'password';
            passwordInput.type = isPassword ? 'text' : 'password';

            if (isPassword) {
                togglePasswordIcon.classList.remove('fa-eye');
                togglePasswordIcon.classList.add('fa-eye-slash');
            } else {
                togglePasswordIcon.classList.remove('fa-eye-slash');
                togglePasswordIcon.classList.add('fa-eye');
            }
        });
    }

    // === 4. LOGOUT / LOCK HANDLER ===
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            try {
                sessionStorage.removeItem(AUTH_SESSION_KEY);
                sessionStorage.removeItem(AUTH_USER_KEY);
                sessionStorage.removeItem(AUTH_TIME_KEY);
            } catch (e) {}

            showToast('Halaman Others telah dikunci kembali.', 'info');
            setUnauthenticatedView();
        });
    }

    // === 5. THEME TOGGLE SWITCHER ===
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.body.classList.contains('dark-theme');
            const toLight = isDark;
            document.body.classList.toggle('light-theme', toLight);
            document.body.classList.toggle('dark-theme', !toLight);

            try {
                localStorage.setItem('ssa_theme', toLight ? 'light' : 'dark');
            } catch (e) {}

            showToast(toLight ? 'Tema terang diaktifkan' : 'Tema gelap diaktifkan', 'info');
        });
    }

    // === 6. TOAST NOTIFICATION ENGINE ===
    function showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        let icon = 'fa-circle-info';
        if (type === 'success') icon = 'fa-circle-check';
        if (type === 'error') icon = 'fa-triangle-exclamation';

        toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideIn 0.3s ease-out reverse forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

    // === 7. NAVIGATION TABS SWITCHER ===
    const tabButtons = document.querySelectorAll('.prompt-tab-btn');
    const tabPanes = document.querySelectorAll('.prompt-tab-pane');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-tab');
            if (!targetId) return;

            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const activePane = document.getElementById(targetId);
            if (activePane) activePane.classList.add('active');
        });
    });

    // === 8. COPY TO CLIPBOARD HELPER ===
    const copyToClipboard = async (text, btnElement) => {
        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(text);
            } else {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand('copy');
                document.body.removeChild(textarea);
            }

            if (btnElement) {
                const originalHtml = btnElement.innerHTML;
                btnElement.classList.add('copied');
                btnElement.innerHTML = `<i class="fa-solid fa-check"></i> <span>Tersalin!</span>`;
                setTimeout(() => {
                    btnElement.classList.remove('copied');
                    btnElement.innerHTML = originalHtml;
                }, 2200);
            }

            showToast('Prompt berhasil disalin ke clipboard!', 'success');
        } catch (err) {
            showToast('Gagal menyalin teks ke clipboard.', 'error');
        }
    };

    // Bind generic copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-copy-target');
            if (targetId) {
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    copyToClipboard(targetEl.textContent.trim(), btn);
                }
            }
        });
    });

    // === 9. INTERACTIVE PROMPT BUILDER ENGINE ===
    const roleInput = document.getElementById('builderRole');
    const contextInput = document.getElementById('builderContext');
    const taskInput = document.getElementById('builderTask');
    const constraintsInput = document.getElementById('builderConstraints');
    const outputInput = document.getElementById('builderOutput');
    const liveOutputEl = document.getElementById('builderLiveOutput');
    const copyBuilderBtn = document.getElementById('copyBuilderBtn');
    const presetBtns = document.querySelectorAll('.preset-btn');

    // Presets Definition (Gen Z & Santri Friendly)
    const BUILDER_PRESETS = {
        webdev: {
            role: "Senior Frontend Web Developer & UI Specialist",
            context: "Website portofolio santri modern bertema dark mode dengan aksen cyan glow. Dibuat menggunakan HTML5 semantik dan CSS Flexbox murni.",
            task: "Bikinkan komponen hero section interaktif yang menampilkan foto profil melingkar dengan glowing border, nama, tagline keahlian santri developer, dan tombol call-to-action.",
            constraints: "- Jangan pakai Bootstrap atau Tailwind (pure custom CSS).\n- Desain harus responsif di HP (mobile-friendly).\n- Berikan animasi halus saat tombol di-hover.",
            output: "Berikan blok kode HTML dan CSS terpisah yang bersih dan siap copy-paste tanpa penjelasan bertele-tele."
        },
        debug: {
            role: "Dokter Koding & Senior JavaScript Debugger",
            context: "Aplikasi web portofolio Vanilla JS mengalami error saat tombol diklik: 'Uncaught TypeError: Cannot read properties of null (reading addEventListener)'.",
            task: "Jelaskan dengan bahasa santai kenapa error ini bisa terjadi, dan berikan kode perbaikan yang aman agar script tidak macet.",
            constraints: "- Jelaskan dulu penyebabnya dalam 2 kalimat gampang.\n- Kode perbaikan harus mengecek apakah elemen DOM sudah ada sebelum dipasangi event listener.\n- Bahasa santai, ramah, dan memotivasi.",
            output: "Format: (1) Kenapa Bisa Error, (2) Solusi Kode Perbaikan."
        },
        summary: {
            role: "Tutor Pembelajaran Cerdas & Master Pembuat Catatan Ringkas",
            context: "Catatan pelajaran tentang dasar-dasar jaringan komputer (IP Address, DNS, dan Protokol HTTP/HTTPS) untuk santri sekolah menengah.",
            task: "Rangkum konsep-konsep kunci tersebut menjadi 5 poin penting yang super gampang dipahami, lengkapi dengan 3 kuis pilihan ganda singkat.",
            constraints: "- Gunakan analogi dunia nyata (misal: analogi alamat rumah untuk IP Address).\n- Hindari istilah teknis yang tidak dijelaskan.\n- Format poin-poin bersih dengan emoji menarik.",
            output: "Format Markdown dengan bullet points dan kuis pilihan ganda beserta kunci jawaban."
        },
        content: {
            role: "Kreator Konten Edukasi Digital & Influencer Santri Inspiratif",
            context: "Video pendek TikTok / Instagram Reels berdurasi 60 detik yang mengajak anak muda/santri untuk semangat belajar coding dan adab teknologi.",
            task: "Buatkan naskah (script) video pendek yang catchy dari hook 3 detik pertama, isi pesan motivasi (santri melek teknologi), sampai call-to-action.",
            constraints: "- Hook awal harus bikin orang berhenti scroll (menggugah rasa penasaran).\n- Bahasa gaul santun, energik, dan tidak menggurui.\n- Sertakan arahan visual/kamera (Scene direction).",
            output: "Tabel naskah: Detik ke berapa | Visual & Aksi Kamera | Narasi Suara."
        }
    };

    function updateBuilderPreview() {
        if (!liveOutputEl) return;

        const role = roleInput?.value.trim() || '';
        const context = contextInput?.value.trim() || '';
        const task = taskInput?.value.trim() || '';
        const constraints = constraintsInput?.value.trim() || '';
        const output = outputInput?.value.trim() || '';

        const compiledPrompt = 
`[ROLE / TOPENG KEAHLIAN]
${role}

[CONTEXT / LATAR BELAKANG]
${context}

[TASK / PERINTAH INTI]
${task}

[CONSTRAINTS / PAGAR LARANGAN]
${constraints}

[EXPECTED OUTPUT FORMAT]
${output}`;

        liveOutputEl.textContent = compiledPrompt;
    }

    // Input listeners real-time
    [roleInput, contextInput, taskInput, constraintsInput, outputInput].forEach(input => {
        if (input) {
            input.addEventListener('input', updateBuilderPreview);
        }
    });

    // Preset button switcher
    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const presetKey = btn.getAttribute('data-preset');
            const data = BUILDER_PRESETS[presetKey];
            if (!data) return;

            presetBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (roleInput) roleInput.value = data.role;
            if (contextInput) contextInput.value = data.context;
            if (taskInput) taskInput.value = data.task;
            if (constraintsInput) constraintsInput.value = data.constraints;
            if (outputInput) outputInput.value = data.output;

            updateBuilderPreview();
            showToast(`Preset "${btn.textContent.trim()}" dimuat!`, 'info');
        });
    });

    // Copy Builder Output Button
    if (copyBuilderBtn && liveOutputEl) {
        copyBuilderBtn.addEventListener('click', () => {
            copyToClipboard(liveOutputEl.textContent.trim(), copyBuilderBtn);
        });
    }

    // === 10. SMOOTH CURSOR FOLLOWER ===
    const cursorDot = document.getElementById('cursorDot');
    const cursorBlur = document.getElementById('cursorBlur');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    if (cursorDot && cursorBlur && hasFinePointer && !prefersReducedMotion && window.innerWidth > 992) {
        let mouseX = 0, mouseY = 0;
        let blurX = 0, blurY = 0;
        let animating = false;

        const animateCursor = () => {
            blurX += (mouseX - blurX) * 0.15;
            blurY += (mouseY - blurY) * 0.15;
            cursorBlur.style.transform = `translate3d(${blurX}px, ${blurY}px, 0) translate(-50%, -50%)`;
            if (Math.abs(mouseX - blurX) > 0.3 || Math.abs(mouseY - blurY) > 0.3) {
                requestAnimationFrame(animateCursor);
            } else {
                animating = false;
            }
        };

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
            if (!animating) {
                animating = true;
                requestAnimationFrame(animateCursor);
            }
        }, { passive: true });
    } else {
        if (cursorDot) cursorDot.remove();
        if (cursorBlur) cursorBlur.remove();
    }

    // === 11. INITIALIZE AUTHENTICATION STATE ===
    checkAuthState();
});