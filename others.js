/**
 * Shifan Shalih Adiluhung - Others Page Security & Web Showcase Engine
 * Strict CSP Compliant (No inline scripts)
 * Versi 4.0 - Auto-Shifting 5s Showcase & Auto-Scroll Viewport
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

        // Start showcase auto-shift loop when authenticated
        initShowcaseCarousel();
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

        // Stop showcase timer when logged out
        stopShowcaseTimer();

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

            // If switching to showcase tab, restart auto-shift timer
            if (targetId === 'tabShowcase') {
                startShowcaseTimer();
            }
        });
    });

    // === 8. SHOWCASE CAROUSEL ENGINE (5s AUTO-SHIFT & AUTO-SCROLL) ===
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.showcase-slide');
    const pillButtons = document.querySelectorAll('.showcase-pill-btn');
    const browserUrlText = document.getElementById('browserUrlText');
    const browserProgressFill = document.getElementById('browserProgressFill');
    const browserMockup = document.getElementById('browserMockup');
    const prevSlideBtn = document.getElementById('prevSlideBtn');
    const nextSlideBtn = document.getElementById('nextSlideBtn');
    const togglePlayBtn = document.getElementById('togglePlayBtn');
    const playPauseIcon = document.getElementById('playPauseIcon');
    const refreshBrowserBtn = document.getElementById('refreshBrowserBtn');

    const TOTAL_SLIDES = slides.length;
    const SLIDE_DURATION_MS = 5000;
    let slideTimer = null;
    let progressStartTime = 0;
    let progressAnimFrame = null;
    let isUserPaused = false;
    let isHoverPaused = false;

    function goToSlide(index) {
        if (TOTAL_SLIDES === 0) return;

        // Wrap around index
        currentSlideIndex = (index + TOTAL_SLIDES) % TOTAL_SLIDES;

        slides.forEach((slide, idx) => {
            const isActive = idx === currentSlideIndex;
            slide.classList.toggle('active', isActive);

            // Reset animation on active slide to restart auto-scroll from top
            if (isActive) {
                const scrollable = slide.querySelector('.web-page-scrollable');
                if (scrollable) {
                    scrollable.style.animation = 'none';
                    void scrollable.offsetWidth; // Force reflow
                    scrollable.style.animation = '';
                }
            }
        });

        // Update pills
        pillButtons.forEach((pill, idx) => {
            pill.classList.toggle('active', idx === currentSlideIndex);
        });

        // Update address bar
        const activeSlide = slides[currentSlideIndex];
        if (activeSlide && browserUrlText) {
            browserUrlText.textContent = activeSlide.getAttribute('data-url') || 'https://shifandailyposts.mediasosial.net';
        }

        // Reset progress bar
        resetProgressBar();
    }

    function nextSlide() {
        goToSlide(currentSlideIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentSlideIndex - 1);
    }

    function resetProgressBar() {
        if (!browserProgressFill) return;
        browserProgressFill.style.width = '0%';
        progressStartTime = performance.now();
    }

    function updateProgress(now) {
        if (!isUserPaused && !isHoverPaused && browserProgressFill) {
            const elapsed = now - progressStartTime;
            const progress = Math.min(elapsed / SLIDE_DURATION_MS, 1);
            browserProgressFill.style.width = `${progress * 100}%`;

            if (elapsed >= SLIDE_DURATION_MS) {
                nextSlide();
            }
        } else {
            // Keep timer reference synced while paused
            progressStartTime = now - (parseFloat(browserProgressFill?.style.width || '0') / 100 * SLIDE_DURATION_MS);
        }

        progressAnimFrame = requestAnimationFrame(updateProgress);
    }

    function startShowcaseTimer() {
        if (progressAnimFrame) cancelAnimationFrame(progressAnimFrame);
        progressStartTime = performance.now();
        progressAnimFrame = requestAnimationFrame(updateProgress);
    }

    function stopShowcaseTimer() {
        if (progressAnimFrame) {
            cancelAnimationFrame(progressAnimFrame);
            progressAnimFrame = null;
        }
    }

    function initShowcaseCarousel() {
        if (TOTAL_SLIDES === 0) return;

        goToSlide(0);
        startShowcaseTimer();

        // Bind control buttons
        if (nextSlideBtn) {
            nextSlideBtn.addEventListener('click', () => {
                nextSlide();
            });
        }

        if (prevSlideBtn) {
            prevSlideBtn.addEventListener('click', () => {
                prevSlide();
            });
        }

        if (togglePlayBtn && playPauseIcon) {
            togglePlayBtn.addEventListener('click', () => {
                isUserPaused = !isUserPaused;
                if (isUserPaused) {
                    playPauseIcon.classList.remove('fa-pause');
                    playPauseIcon.classList.add('fa-play');
                    showToast('Auto-shift website dijeda', 'info');
                } else {
                    playPauseIcon.classList.remove('fa-play');
                    playPauseIcon.classList.add('fa-pause');
                    showToast('Auto-shift website dilanjutkan', 'info');
                    progressStartTime = performance.now();
                }
            });
        }

        if (refreshBrowserBtn) {
            refreshBrowserBtn.addEventListener('click', () => {
                goToSlide(currentSlideIndex);
                showToast('Tampilan website dimuat ulang!', 'info');
            });
        }

        // Bind Pill Buttons
        pillButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetIdx = parseInt(btn.getAttribute('data-slide'), 10);
                if (!isNaN(targetIdx)) {
                    goToSlide(targetIdx);
                }
            });
        });

        // Pause auto-shift when hovering the mockup window so user can explore
        if (browserMockup) {
            browserMockup.addEventListener('mouseenter', () => {
                isHoverPaused = true;
            });

            browserMockup.addEventListener('mouseleave', () => {
                isHoverPaused = false;
            });
        }
    }

    // === 9. SMOOTH CURSOR FOLLOWER ===
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

    // === 10. INITIALIZE AUTHENTICATION STATE ===
    checkAuthState();
});