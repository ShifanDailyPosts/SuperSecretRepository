/**
 * Shifan Shalih Adiluhung - Others Page Security & Gatekeeper Engine
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

    // DOM Elements
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
    const sessionTimeDisplay = document.getElementById('sessionTimeDisplay');
    const displayUsername = document.getElementById('displayUsername');
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

        let savedUser = 'qsbs';
        let savedTime = '';
        try {
            savedUser = sessionStorage.getItem(AUTH_USER_KEY) || 'qsbs';
            savedTime = sessionStorage.getItem(AUTH_TIME_KEY) || '';
        } catch (e) {}

        if (displayUsername) displayUsername.textContent = savedUser;
        if (sessionTimeDisplay && savedTime) {
            sessionTimeDisplay.textContent = `Masuk pukul ${savedTime} WIB`;
        }
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

    // === 7. SMOOTH CURSOR FOLLOWER ===
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

    // === 8. INITIALIZE AUTHENTICATION STATE ===
    checkAuthState();
});
