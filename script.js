/**
 * Shifan Shalih Adiluhung - Interactive Portfolio JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    // === 1. Custom Cursor Follower ===
    const cursorDot = document.getElementById('cursorDot');
    const cursorBlur = document.getElementById('cursorBlur');

    if (cursorDot && cursorBlur && window.innerWidth > 992) {
        let mouseX = 0, mouseY = 0;
        let blurX = 0, blurY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        });

        const animateCursor = () => {
            blurX += (mouseX - blurX) * 0.15;
            blurY += (mouseY - blurY) * 0.15;
            cursorBlur.style.transform = `translate3d(${blurX}px, ${blurY}px, 0) translate(-50%, -50%)`;
            requestAnimationFrame(animateCursor);
        };
        animateCursor();
    }

    // === 2. Theme Switcher (Dark / Light) ===
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const savedTheme = localStorage.getItem('ssa_theme') || 'dark';

    if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (document.body.classList.contains('dark-theme')) {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            localStorage.setItem('ssa_theme', 'light');
            showToast('Tema terang diaktifkan', 'info');
        } else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
            localStorage.setItem('ssa_theme', 'dark');
            showToast('Tema gelap diaktifkan', 'info');
        }
    });

    // === 3. Header Scroll Observer & Mobile Nav ===
    const siteHeader = document.getElementById('siteHeader');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });

    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
    });

    // Close menu when clicking nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // === 4. Dynamic Typing Effect ===
    const typingTextEl = document.getElementById('typingText');
    let subheadlines = [
        "Scholar & Santri Terpelajar",
        "Tech & Web Developer",
        "Continuous Learner",
        "Innovator Nilai Adiluhung"
    ];

    let currentTextIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const typeEffect = () => {
        const currentPhrase = subheadlines[currentTextIndex];

        if (isDeleting) {
            typingTextEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingTextEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at full word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % subheadlines.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    };

    if (typingTextEl) {
        typeEffect();
    }

    // === 5. Live Profile Customizer & LocalStorage Engine ===
    const heroNameDisplay = document.getElementById('heroNameDisplay');
    const heroBioDisplay = document.getElementById('heroBioDisplay');
    const profileEditorForm = document.getElementById('profileEditorForm');
    const editNameInput = document.getElementById('editName');
    const editSubheadlineInput = document.getElementById('editSubheadline');
    const editBioInput = document.getElementById('editBio');
    const resetProfileBtn = document.getElementById('resetProfileBtn');

    // Load stored profile data if exists
    const loadProfileData = () => {
        const savedData = JSON.parse(localStorage.getItem('ssa_profile_data') || '{}');
        if (savedData.name) {
            heroNameDisplay.textContent = savedData.name;
            editNameInput.value = savedData.name;
        }
        if (savedData.subheadlines && savedData.subheadlines.length > 0) {
            subheadlines = savedData.subheadlines;
            editSubheadlineInput.value = savedData.subheadlines.join(', ');
        }
        if (savedData.bio) {
            heroBioDisplay.textContent = savedData.bio;
            editBioInput.value = savedData.bio;
        }
    };
    loadProfileData();

    profileEditorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newName = editNameInput.value.trim();
        const newSubheadlinesStr = editSubheadlineInput.value.trim();
        const newBio = editBioInput.value.trim();

        if (!newName || !newBio) {
            showToast('Harap isi nama dan bio dengan benar.', 'error');
            return;
        }

        const newSubheadlines = newSubheadlinesStr
            ? newSubheadlinesStr.split(',').map(s => s.trim()).filter(Boolean)
            : subheadlines;

        // Update DOM
        heroNameDisplay.textContent = newName;
        heroBioDisplay.textContent = newBio;
        subheadlines = newSubheadlines;
        currentTextIndex = 0;
        charIndex = 0;
        isDeleting = false;

        // Save to LocalStorage
        const profilePayload = {
            name: newName,
            subheadlines: newSubheadlines,
            bio: newBio
        };
        localStorage.setItem('ssa_profile_data', JSON.stringify(profilePayload));

        showToast('Profil Shifan berhasil diperbarui secara live!', 'success');
    });

    resetProfileBtn.addEventListener('click', () => {
        localStorage.removeItem('ssa_profile_data');
        const defaultName = "Shifan Shalih Adiluhung";
        const defaultBio = "Mengkombinasikan ketekunan keilmuan, integritas karakter santri terpelajar, dan semangat inovasi teknologi modern untuk menghasilkan karya bermakna yang bernilai Adiluhung (luhur & agung).";
        const defaultSubheadlines = [
            "Scholar & Santri Terpelajar",
            "Tech & Web Developer",
            "Continuous Learner",
            "Innovator Nilai Adiluhung"
        ];

        heroNameDisplay.textContent = defaultName;
        heroBioDisplay.textContent = defaultBio;
        editNameInput.value = defaultName;
        editBioInput.value = defaultBio;
        editSubheadlineInput.value = defaultSubheadlines.join(', ');
        subheadlines = defaultSubheadlines;

        showToast('Profil dikembalikan ke data awal.', 'info');
    });

    // === 6. Interactive 3D Tilt Effect on Hero Card ===
    const heroCardTilt = document.getElementById('heroCardTilt');
    if (heroCardTilt && window.innerWidth > 992) {
        heroCardTilt.addEventListener('mousemove', (e) => {
            const rect = heroCardTilt.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateX = (-y / rect.height) * 15;
            const rotateY = (x / rect.width) * 15;

            heroCardTilt.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        heroCardTilt.addEventListener('mouseleave', () => {
            heroCardTilt.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    }

    // === 7. Project Gallery Filter ===
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = 'flex';
                    setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });
        });
    });

    // === 8. Modals (Name Meaning & Project Detail) ===
    const nameModal = document.getElementById('nameModal');
    const openNameModalBtn = document.getElementById('openNameModalBtn');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalOkBtn = document.getElementById('modalOkBtn');

    const toggleNameModal = (show) => {
        if (show) {
            nameModal.classList.add('active');
        } else {
            nameModal.classList.remove('active');
        }
    };

    if (openNameModalBtn) openNameModalBtn.addEventListener('click', () => toggleNameModal(true));
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', () => toggleNameModal(false));
    if (modalOverlay) modalOverlay.addEventListener('click', () => toggleNameModal(false));
    if (modalOkBtn) modalOkBtn.addEventListener('click', () => toggleNameModal(false));

    // Project Detail Modal
    const projectModal = document.getElementById('projectModal');
    const projectModalOverlay = document.getElementById('projectModalOverlay');
    const projectModalCloseBtn = document.getElementById('projectModalCloseBtn');
    const projectModalOkBtn = document.getElementById('projectModalOkBtn');
    const pModalTitle = document.getElementById('pModalTitle');
    const pModalDesc = document.getElementById('pModalDesc');
    const pModalTech = document.getElementById('pModalTech');

    document.querySelectorAll('.view-project-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const title = btn.getAttribute('data-title');
            const desc = btn.getAttribute('data-desc');
            const tech = btn.getAttribute('data-tech');

            pModalTitle.textContent = title;
            pModalDesc.textContent = desc;
            pModalTech.textContent = tech;

            projectModal.classList.add('active');
        });
    });

    const closeProjectModal = () => projectModal.classList.remove('active');
    if (projectModalCloseBtn) projectModalCloseBtn.addEventListener('click', closeProjectModal);
    if (projectModalOverlay) projectModalOverlay.addEventListener('click', closeProjectModal);
    if (projectModalOkBtn) projectModalOkBtn.addEventListener('click', closeProjectModal);

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            toggleNameModal(false);
            closeProjectModal();
        }
    });

    // === 9. Contact Form Simulation & Toast System ===
    const contactForm = document.getElementById('contactForm');
    const submitContactBtn = document.getElementById('submitContactBtn');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('contactSubject').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        if (!name || !email || !subject || !message) {
            showToast('Harap lengkapi semua kolom pesan.', 'error');
            return;
        }

        // Show loading state
        submitContactBtn.disabled = true;
        submitContactBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Mengirim...</span>`;

        setTimeout(() => {
            submitContactBtn.disabled = false;
            submitContactBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> <span>Kirim Pesan Sekarang</span>`;
            contactForm.reset();
            showToast(`Terima kasih ${name}, pesan Anda telah terkirim ke Shifan!`, 'success');
        }, 1200);
    });

    // Helper Toast Function
    function showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        let iconClass = 'fa-circle-info';
        if (type === 'success') iconClass = 'fa-circle-check';
        if (type === 'error') iconClass = 'fa-triangle-exclamation';

        toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideIn 0.3s ease-out reverse forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }
});
