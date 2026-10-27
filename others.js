/**
 * Shifan Shalih Adiluhung - Others Page Security & AI Prompting Engine
 * Strict CSP Compliant (No inline scripts)
 */

document.addEventListener('DOMContentLoaded', () => {
    // === 1. CREDENTIAL CONFIGURATION ===
    // Sesuai permintaan pengguna:
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

        // Inisialisasi generator prompt saat masuk
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

        // Auto-focus username field after rendering
        setTimeout(() => {
            if (usernameInput) usernameInput.focus();
        }, 150);
    };

    // Show Error Alert Helper
    const showError = (message) => {
        if (!authErrorAlert || !authErrorText) return;
        authErrorText.textContent = message;
        authErrorAlert.classList.add('show');

        if (gatekeeperCard) {
            gatekeeperCard.classList.remove('shake-anim');
            // Force browser reflow to re-trigger keyframe
            void gatekeeperCard.offsetWidth;
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

            // Validasi kredensial pengguna
            if (inputUser.toLowerCase() === VALID_USERNAME.toLowerCase() && inputPass === VALID_PASSWORD) {
                const now = new Date();
                const timeString = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

                try {
                    sessionStorage.setItem(AUTH_SESSION_KEY, 'true');
                    sessionStorage.setItem(AUTH_USER_KEY, VALID_USERNAME);
                    sessionStorage.setItem(AUTH_TIME_KEY, timeString);
                } catch (e) {
                    // Fallback jika storage dinonaktifkan
                }

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

    // === 7. PROMPT GUIDE TABS SWITCHER ===
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
                // Fallback for non-https or older environments
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
            if (!targetId) return;
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                copyToClipboard(targetEl.textContent.trim(), btn);
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

    // Presets Definition
    const BUILDER_PRESETS = {
        webdev: {
            role: "Senior Fullstack Web Developer & Security Specialist",
            context: "Proyek website portofolio santri modern menggunakan HTML5 semantik, CSS Grid/Flexbox, dan Vanilla JavaScript (ES6+). Server berjalan di LiteSpeed dengan header CSP ketat.",
            task: "Buatkan modul JavaScript interaktif untuk memvalidasi formulir dan menampilkan notifikasi toast dinamis saat aksi berhasil disimpan.",
            constraints: "- Jangan gunakan pustaka pihak ketiga (pure vanilla JS).\n- Wajib bebas celah XSS (gunakan sanitasi input).\n- Kode harus modular, mudah dibaca, dan disertai komentar penjelas fungsi.",
            output: "Berikan hanya blok kode JavaScript bersih tanpa narasi pembuka atau penutup."
        },
        debug: {
            role: "Principal Software Engineer & Expert Code Diagnostician",
            context: "Aplikasi Single Page Application (SPA) berbasis Vanilla JS mengalami memory leak dan error 'Uncaught TypeError' saat berpindah halaman secara dinamis di peramban mobile.",
            task: "Analisis cuplikan kode yang bermasalah, temukan akar penyebabnya (Root Cause), dan berikan rekomendasi perbaikan kode beserta alasan teknisnya.",
            constraints: "- Wajib gunakan metode Chain-of-Thought: jelaskan analisis logis terlebih dahulu sebelum kode.\n- Pertahankan kompatibilitas browser modern tanpa menambahkan dependensi baru.\n- Berikan solusi minimal yang paling hemat CPU.",
            output: "Format: (1) Diagnosa Masalah, (2) Solusi Teknis, (3) Cuplikan Kode Refaktor."
        },
        refactor: {
            role: "Clean Code Evangelist & Software Architect",
            context: "Fungsi JavaScript monolithic sepanjang 250 baris yang menangani render UI, kalkulasi data, dan request API sekaligus dalam satu blok kode.",
            task: "Refaktor kode menjadi fungsi-fungsi murni (Pure Functions) yang modular, menerapkan prinsip Single Responsibility Principle (SRP) dan Immutability.",
            constraints: "- Jangan mengubah fungsionalitas dan return value eksternal.\n- Gunakan sintaks modern ES6+ (Destructuring, Optional Chaining, Arrow Functions).\n- Berikan penamaan variabel dan fungsi yang self-documenting.",
            output: "Tuliskan kode hasil refaktor lengkap dengan JSDoc dokumentasi di setiap fungsi."
        },
        content: {
            role: "Penulis Konten Teknologi Edukasi & Pengajar Santri Developer",
            context: "Artikel blog edukatif untuk santri pondok pesantren yang baru mulai belajar pemrograman web dasar (HTML/CSS) agar memiliki semangat keilmuan tinggi.",
            task: "Tuliskan artikel pengantar yang inspiratif tentang perpaduan antara integritas santri (adab, ketekunan, kejujuran) dan keterampilan teknologi modern di era digital.",
            constraints: "- Bahasa santun, ramah, dan memotivasi tanpa kata-kata teknis yang terlalu membingungkan.\n- Sertakan analogi hafalan Al-Qur'an dengan konsistensi belajar coding.\n- Panjang 300-400 kata.",
            output: "Gunakan format Markdown dengan heading terstruktur, bullet point, dan callout inspiratif."
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
`[ROLE & PERSONA]
${role}

[CONTEXT & BACKGROUND]
${context}

[TASK / ACTION]
${task}

[CONSTRAINTS & GUARDRAILS]
${constraints}

[EXPECTED OUTPUT FORMAT]
${output}`;

        liveOutputEl.textContent = compiledPrompt;
    }

    // Bind real-time input listeners
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
            showToast(`Preset "${btn.textContent}" dimuat!`, 'info');
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
