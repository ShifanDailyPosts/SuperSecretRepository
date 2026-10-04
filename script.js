/**
 * Shifan Shalih Adiluhung - Interactive Portfolio Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    const FIXED_DEFAULT_PASS = "adiluhung33";

    // === DEFAULT SITE STATE DATA ===
    const defaultSiteData = {
        name: "Shifan Shalih Adiluhung",
        subheadlines: [
            "Scholar & Santri Terpelajar",
            "Tech & Web Developer",
            "Continuous Learner",
            "Innovator Nilai Adiluhung"
        ],
        bio: "Mengkombinasikan ketekunan keilmuan, integritas karakter santri terpelajar, dan semangat inovasi teknologi modern untuk menghasilkan karya bermakna yang bernilai Adiluhung (luhur & agung).",
        adminPassword: FIXED_DEFAULT_PASS,
        aboutMeaning: "Dalam bahasa Indonesia, kata Adiluhung memiliki arti mutlak yaitu luhur, agung, atau bernilai tinggi. Nama ini mencerminkan standar moral dan visi hidup yang tinggi untuk senantiasa memberikan hasil karya dan perilaku terbaik dalam setiap aspek kehidupan.",
        aboutEdu: "Nama Shifan Shalih Adiluhung tercatat secara publik dalam rekam prestasi pendidikan dan capaian santri (hafalan Al-Qur'an) serta data siswa di wilayah Ciamis, Jawa Barat. Hal ini membuktikan fondasi kedisiplinan dan daya ingat tinggi sejak usia muda.",
        aboutVision: "Menggabungkan karakter keilmuan yang kuat dengan keahlian dunia teknologi informasi modern. Shifan terus mengasah kemampuan analitis, pembuatan aplikasi web, dan pemecahan masalah (problem solving) untuk memberikan dampak nyata.",
        contactEmail: "shifan.adiluhung@example.com",
        contactLocation: "Ciamis / Jawa Barat, Indonesia",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
        instagramUrl: "https://instagram.com",
        techSkills: [
            { id: 1, name: "HTML5 & CSS3 Architecture (Responsive Design)", pct: 92 },
            { id: 2, name: "JavaScript (ES6+, DOM Manipulation, Dynamic State)", pct: 88 },
            { id: 3, name: "UI/UX Design & Aesthetic Glassmorphism", pct: 90 },
            { id: 4, name: "Web Performance & Hostinger FTP Deployment", pct: 85 }
        ],
        softSkills: [
            { id: 1, name: "Metode Daya Ingat & Hafalan (Memory & Memorization)", pct: 95 },
            { id: 2, name: "Berpikir Analitis & Pemecahan Masalah (Problem Solving)", pct: 90 },
            { id: 3, name: "Manajemen Waktu & Kedisiplinan Terstruktur", pct: 93 },
            { id: 4, name: "Komunikasi & Kepemimpinan Beretika", pct: 87 }
        ],
        projects: [
            {
                id: 1,
                title: "Shifan Adiluhung Official Portfolio Hub",
                desc: "Platform portofolio web interaktif dengan desain glassmorphism premium, live dynamic typing, halaman pengelola terproteksi password, dan hosting terintegrasi.",
                category: "web",
                tech: "HTML5, CSS3, JavaScript ES6, LocalStorage State, Halaman Admin"
            },
            {
                id: 2,
                title: "Al-Qur'an & Memorization Tracker",
                desc: "Aplikasi web interaktif untuk pemantauan hafalan harian, target muraja'ah, dan catatan evaluasi tajwid berbasis analitik.",
                category: "edu",
                tech: "JavaScript, Web Storage, Dashboard UI"
            },
            {
                id: 3,
                title: "Arsip Digital Santri & Siswa Ciamis",
                desc: "Konsep sistem informasi manajemen data prestasi akademis dan capaian santri yang responsif dan mudah diakses.",
                category: "web",
                tech: "Database Concept, Search & Filter UI"
            },
            {
                id: 4,
                title: "Interactive Bio & Admin Portal Builder",
                desc: "Alat pembuat ringkasan profil pribadi interaktif dengan portal admin langsung untuk mengelola seluruh halaman website.",
                category: "creative",
                tech: "DOM Engine, Custom Theme, State Management"
            }
        ]
    };

    // Load State from LocalStorage or initialize
    let siteData = JSON.parse(localStorage.getItem('ssa_site_data') || 'null');
    if (!siteData) {
        siteData = defaultSiteData;
        localStorage.setItem('ssa_site_data', JSON.stringify(siteData));
    } else if (siteData.adminPassword === "shifan123" || !siteData.adminPassword) {
        siteData.adminPassword = FIXED_DEFAULT_PASS;
        localStorage.setItem('ssa_site_data', JSON.stringify(siteData));
    }

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

    if (themeToggleBtn) {
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
    }

    // === 3. Header Scroll Observer & Mobile Nav ===
    const siteHeader = document.getElementById('siteHeader');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');

    window.addEventListener('scroll', () => {
        if (siteHeader) {
            if (window.scrollY > 40) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        }
    });

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // === 4. Dynamic Typing Effect ===
    const typingTextEl = document.getElementById('typingText');
    let subheadlines = siteData.subheadlines || defaultSiteData.subheadlines;

    let currentTextIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const typeEffect = () => {
        if (!typingTextEl) return;
        const currentPhrase = subheadlines[currentTextIndex] || subheadlines[0];

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
            typingSpeed = 2000;
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

    // === 5. Render All Frontend Content Dynamically ===
    const renderFrontendContent = () => {
        if (!document.getElementById('heroNameDisplay')) return;

        // Hero Name & Bio
        document.getElementById('heroNameDisplay').textContent = siteData.name;
        document.getElementById('aboutNameDisplay').textContent = siteData.name;
        document.getElementById('contactTitleName').textContent = siteData.name;
        document.getElementById('heroBioDisplay').textContent = siteData.bio;
        subheadlines = siteData.subheadlines;

        // About Narrative
        document.getElementById('aboutMeaningText').innerHTML = siteData.aboutMeaning;
        document.getElementById('aboutEduText').innerHTML = siteData.aboutEdu;
        document.getElementById('aboutVisionText').innerHTML = siteData.aboutVision;

        // Contact Info
        document.getElementById('contactEmailDisplay').textContent = siteData.contactEmail;
        document.getElementById('contactLocationDisplay').textContent = siteData.contactLocation;

        // Social Links
        const socialContainer = document.getElementById('socialLinksContainer');
        if (socialContainer) {
            socialContainer.innerHTML = `
                <a href="${siteData.githubUrl}" target="_blank" rel="noopener" class="social-btn" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
                <a href="${siteData.linkedinUrl}" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="${siteData.instagramUrl}" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                <a href="mailto:${siteData.contactEmail}" class="social-btn" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
            `;
        }

        // Tech Skills
        const techSkillsContainer = document.getElementById('techSkillsContainer');
        if (techSkillsContainer) {
            techSkillsContainer.innerHTML = siteData.techSkills.map(s => `
                <div class="skill-item">
                    <div class="skill-info">
                        <span>${s.name}</span>
                        <span class="skill-pct">${s.pct}%</span>
                    </div>
                    <div class="progress-bar"><div class="progress-fill" style="width: ${s.pct}%;"></div></div>
                </div>
            `).join('');
        }

        // Soft Skills
        const softSkillsContainer = document.getElementById('softSkillsContainer');
        if (softSkillsContainer) {
            softSkillsContainer.innerHTML = siteData.softSkills.map(s => `
                <div class="skill-item">
                    <div class="skill-info">
                        <span>${s.name}</span>
                        <span class="skill-pct">${s.pct}%</span>
                    </div>
                    <div class="progress-bar"><div class="progress-fill" style="width: ${s.pct}%;"></div></div>
                </div>
            `).join('');
        }

        // Projects
        const projectsContainer = document.getElementById('projectsGridContainer');
        if (projectsContainer) {
            projectsContainer.innerHTML = siteData.projects.map(p => `
                <div class="project-card glass-card" data-category="${p.category}">
                    <div class="project-thumb">
                        <div class="thumb-icon"><i class="fa-solid fa-${p.category === 'edu' ? 'book-bookmark' : p.category === 'creative' ? 'wand-magic-sparkles' : 'globe'}"></i></div>
                        <span class="project-category">${p.category === 'edu' ? 'Pendidikan' : p.category === 'creative' ? 'Kreatif' : 'Web App'}</span>
                    </div>
                    <div class="project-details">
                        <h3>${p.title}</h3>
                        <p>${p.desc}</p>
                        <div class="project-tech">
                            ${p.tech.split(',').map(t => `<span>${t.trim()}</span>`).join('')}
                        </div>
                        <button class="btn btn-sm btn-outline view-project-btn" data-title="${p.title}" data-desc="${p.desc}" data-tech="${p.tech}">
                            Detail Proyek <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }

        // Re-attach project modal listeners
        attachProjectModalListeners();
    };

    renderFrontendContent();

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
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            document.querySelectorAll('.project-card').forEach(card => {
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
        if (!nameModal) return;
        if (show) nameModal.classList.add('active');
        else nameModal.classList.remove('active');
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

    function attachProjectModalListeners() {
        document.querySelectorAll('.view-project-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (!projectModal) return;
                document.getElementById('pModalTitle').textContent = btn.getAttribute('data-title');
                document.getElementById('pModalDesc').textContent = btn.getAttribute('data-desc');
                document.getElementById('pModalTech').textContent = btn.getAttribute('data-tech');
                projectModal.classList.add('active');
            });
        });
    }

    const closeProjectModal = () => { if (projectModal) projectModal.classList.remove('active'); };
    if (projectModalCloseBtn) projectModalCloseBtn.addEventListener('click', closeProjectModal);
    if (projectModalOverlay) projectModalOverlay.addEventListener('click', closeProjectModal);
    if (projectModalOkBtn) projectModalOkBtn.addEventListener('click', closeProjectModal);

    // === 9. Contact Form Submission & Toast System ===
    const contactForm = document.getElementById('contactForm');
    const submitContactBtn = document.getElementById('submitContactBtn');

    if (contactForm) {
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

            submitContactBtn.disabled = true;
            submitContactBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Mengirim...</span>`;

            setTimeout(() => {
                submitContactBtn.disabled = false;
                submitContactBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> <span>Kirim Pesan Sekarang</span>`;
                contactForm.reset();
                showToast(`Terima kasih ${name}, pesan Anda telah terkirim ke Shifan!`, 'success');
            }, 1200);
        });
    }

    // Helper Toast Function
    function showToast(message, type = 'info') {
        const container = document.getElementById('toastContainer');
        if (!container) return;
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
