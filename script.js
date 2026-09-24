/**
 * Shifan Shalih Adiluhung - Interactive Portfolio & Admin Engine
 */

document.addEventListener('DOMContentLoaded', () => {
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
        adminPassword: "shifan123",
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
                desc: "Platform portofolio web interaktif dengan desain glassmorphism premium, live dynamic typing, admin portal terproteksi password, dan hosting terintegrasi.",
                category: "web",
                tech: "HTML5, CSS3, JavaScript ES6, LocalStorage State, Admin Portal"
            },
            {
                id: 2,
                title: "Al-Qur'an & Memorization Tracker",
                desc: "Aplikasi web interaktif untuk pemantauan hafalan harian, target muraja'ah, dan catatan evaluasi tajwid berbasis analitik.",
                category: "edu",
                tech: "JavaScript, Web Storage, Interactive Dashboard"
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
    }

    // Save State Helper
    const saveSiteData = () => {
        localStorage.setItem('ssa_site_data', JSON.stringify(siteData));
        renderFrontendContent();
    };

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
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // === 4. Dynamic Typing Effect ===
    const typingTextEl = document.getElementById('typingText');
    let subheadlines = siteData.subheadlines || defaultSiteData.subheadlines;

    let currentTextIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const typeEffect = () => {
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
        socialContainer.innerHTML = `
            <a href="${siteData.githubUrl}" target="_blank" rel="noopener" class="social-btn" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
            <a href="${siteData.linkedinUrl}" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="${siteData.instagramUrl}" target="_blank" rel="noopener" class="social-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="mailto:${siteData.contactEmail}" class="social-btn" aria-label="Email"><i class="fa-solid fa-envelope"></i></a>
        `;

        // Tech Skills
        const techSkillsContainer = document.getElementById('techSkillsContainer');
        techSkillsContainer.innerHTML = siteData.techSkills.map(s => `
            <div class="skill-item">
                <div class="skill-info">
                    <span>${s.name}</span>
                    <span class="skill-pct">${s.pct}%</span>
                </div>
                <div class="progress-bar"><div class="progress-fill" style="width: ${s.pct}%;"></div></div>
            </div>
        `).join('');

        // Soft Skills
        const softSkillsContainer = document.getElementById('softSkillsContainer');
        softSkillsContainer.innerHTML = siteData.softSkills.map(s => `
            <div class="skill-item">
                <div class="skill-info">
                    <span>${s.name}</span>
                    <span class="skill-pct">${s.pct}%</span>
                </div>
                <div class="progress-bar"><div class="progress-fill" style="width: ${s.pct}%;"></div></div>
            </div>
        `).join('');

        // Projects
        const projectsContainer = document.getElementById('projectsGridContainer');
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
                document.getElementById('pModalTitle').textContent = btn.getAttribute('data-title');
                document.getElementById('pModalDesc').textContent = btn.getAttribute('data-desc');
                document.getElementById('pModalTech').textContent = btn.getAttribute('data-tech');
                projectModal.classList.add('active');
            });
        });
    }

    const closeProjectModal = () => projectModal.classList.remove('active');
    if (projectModalCloseBtn) projectModalCloseBtn.addEventListener('click', closeProjectModal);
    if (projectModalOverlay) projectModalOverlay.addEventListener('click', closeProjectModal);
    if (projectModalOkBtn) projectModalOkBtn.addEventListener('click', closeProjectModal);

    // === 9. ADMIN SYSTEM & DASHBOARD ENGINE ===
    const openAdminBtn = document.getElementById('openAdminBtn');
    const footerAdminBtn = document.getElementById('footerAdminBtn');
    const heroAdminPortalBtn = document.getElementById('heroAdminPortalBtn');
    const adminLoginModal = document.getElementById('adminLoginModal');
    const adminLoginOverlay = document.getElementById('adminLoginOverlay');
    const adminLoginCloseBtn = document.getElementById('adminLoginCloseBtn');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminPassInput = document.getElementById('adminPassInput');
    const togglePassBtn = document.getElementById('togglePassBtn');

    const adminPanelModal = document.getElementById('adminPanelModal');
    const adminPanelOverlay = document.getElementById('adminPanelOverlay');
    const adminPanelCloseBtn = document.getElementById('adminPanelCloseBtn');
    const adminLogoutBtn = document.getElementById('adminLogoutBtn');

    // Password Toggle Visibility
    if (togglePassBtn) {
        togglePassBtn.addEventListener('click', () => {
            const isPass = adminPassInput.type === 'password';
            adminPassInput.type = isPass ? 'text' : 'password';
            togglePassBtn.innerHTML = isPass ? `<i class="fa-solid fa-eye-slash"></i>` : `<i class="fa-solid fa-eye"></i>`;
        });
    }

    // Check Admin Login Session
    const isAdminLoggedIn = () => sessionStorage.getItem('ssa_admin_session') === 'true';

    const openAdminPortal = () => {
        if (isAdminLoggedIn()) {
            populateAdminForms();
            adminPanelModal.classList.add('active');
        } else {
            adminPassInput.value = '';
            adminLoginModal.classList.add('active');
        }
    };

    if (openAdminBtn) openAdminBtn.addEventListener('click', (e) => { e.preventDefault(); openAdminPortal(); });
    if (footerAdminBtn) footerAdminBtn.addEventListener('click', (e) => { e.preventDefault(); openAdminPortal(); });
    if (heroAdminPortalBtn) heroAdminPortalBtn.addEventListener('click', (e) => { e.preventDefault(); openAdminPortal(); });

    if (adminLoginCloseBtn) adminLoginCloseBtn.addEventListener('click', () => adminLoginModal.classList.remove('active'));
    if (adminLoginOverlay) adminLoginOverlay.addEventListener('click', () => adminLoginModal.classList.remove('active'));
    if (adminPanelCloseBtn) adminPanelCloseBtn.addEventListener('click', () => adminPanelModal.classList.remove('active'));
    if (adminPanelOverlay) adminPanelOverlay.addEventListener('click', () => adminPanelModal.classList.remove('active'));

    // Admin Login Form Submit
    adminLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputPass = adminPassInput.value;
        const correctPass = siteData.adminPassword || defaultSiteData.adminPassword;

        if (inputPass === correctPass) {
            sessionStorage.setItem('ssa_admin_session', 'true');
            adminLoginModal.classList.remove('active');
            populateAdminForms();
            adminPanelModal.classList.add('active');
            showToast('Selamat datang Admin Shifan! Login berhasil.', 'success');
        } else {
            showToast('Password admin salah! Harap coba lagi.', 'error');
            adminPassInput.focus();
        }
    });

    // Admin Logout
    adminLogoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem('ssa_admin_session');
        adminPanelModal.classList.remove('active');
        showToast('Logout admin berhasil.', 'info');
    });

    // Admin Tabs Switcher
    const adminTabBtns = document.querySelectorAll('.admin-tab-btn');
    const adminTabContents = document.querySelectorAll('.admin-tab-content');

    adminTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            adminTabBtns.forEach(b => b.classList.remove('active'));
            adminTabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetId = btn.getAttribute('data-tab');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Populate Admin Forms from State
    function populateAdminForms() {
        // Tab Profile & Hero
        document.getElementById('admName').value = siteData.name;
        document.getElementById('admSubheadlines').value = siteData.subheadlines.join(', ');
        document.getElementById('admHeroBio').value = siteData.bio;

        // Tab About
        document.getElementById('admAboutMeaning').value = siteData.aboutMeaning;
        document.getElementById('admAboutEdu').value = siteData.aboutEdu;
        document.getElementById('admAboutVision').value = siteData.aboutVision;

        // Tab Contact
        document.getElementById('admContactEmail').value = siteData.contactEmail;
        document.getElementById('admContactLocation').value = siteData.contactLocation;
        document.getElementById('admGithubUrl').value = siteData.githubUrl;
        document.getElementById('admLinkedinUrl').value = siteData.linkedinUrl;
        document.getElementById('admInstagramUrl').value = siteData.instagramUrl;

        // Render Admin Skills List
        renderAdminSkillsList();

        // Render Admin Projects List
        renderAdminProjectsList();
    }

    // Save Admin Profile Form
    document.getElementById('adminProfileForm').addEventListener('submit', (e) => {
        e.preventDefault();
        siteData.name = document.getElementById('admName').value.trim();
        siteData.subheadlines = document.getElementById('admSubheadlines').value.split(',').map(s => s.trim()).filter(Boolean);
        siteData.bio = document.getElementById('admHeroBio').value.trim();

        saveSiteData();
        showToast('Profil Utama & Hero berhasil diperbarui!', 'success');
    });

    // Save Admin About Form
    document.getElementById('adminAboutForm').addEventListener('submit', (e) => {
        e.preventDefault();
        siteData.aboutMeaning = document.getElementById('admAboutMeaning').value.trim();
        siteData.aboutEdu = document.getElementById('admAboutEdu').value.trim();
        siteData.aboutVision = document.getElementById('admAboutVision').value.trim();

        saveSiteData();
        showToast('Halaman Tentang & Filosofi berhasil disimpan!', 'success');
    });

    // Save Admin Contact Form
    document.getElementById('adminContactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        siteData.contactEmail = document.getElementById('admContactEmail').value.trim();
        siteData.contactLocation = document.getElementById('admContactLocation').value.trim();
        siteData.githubUrl = document.getElementById('admGithubUrl').value.trim();
        siteData.linkedinUrl = document.getElementById('admLinkedinUrl').value.trim();
        siteData.instagramUrl = document.getElementById('admInstagramUrl').value.trim();

        saveSiteData();
        showToast('Informasi Kontak & Sosmed berhasil diperbarui!', 'success');
    });

    // Admin Password Change
    document.getElementById('adminChangePassForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const currPass = document.getElementById('admCurrPass').value;
        const newPass = document.getElementById('admNewPass').value;
        const confirmPass = document.getElementById('admConfirmPass').value;

        if (currPass !== siteData.adminPassword) {
            showToast('Password sekarang salah!', 'error');
            return;
        }

        if (newPass !== confirmPass) {
            showToast('Konfirmasi password baru tidak cocok!', 'error');
            return;
        }

        if (newPass.length < 4) {
            showToast('Password baru terlalu pendek (min 4 karakter).', 'error');
            return;
        }

        siteData.adminPassword = newPass;
        saveSiteData();
        document.getElementById('adminChangePassForm').reset();
        showToast('Password Admin berhasil diubah!', 'success');
    });

    // Render Admin Skills List
    function renderAdminSkillsList() {
        const skillsContainer = document.getElementById('adminSkillsList');
        const allSkills = [
            ...siteData.techSkills.map(s => ({ ...s, type: 'tech' })),
            ...siteData.softSkills.map(s => ({ ...s, type: 'soft' }))
        ];

        skillsContainer.innerHTML = allSkills.map(s => `
            <div class="admin-item-card">
                <div class="admin-item-info">
                    <strong>${s.name}</strong>
                    <span>Kategori: ${s.type === 'tech' ? 'Teknologi & Web' : 'Kapasitas & Soft Skill'} | Persentase: ${s.pct}%</span>
                </div>
                <div class="admin-item-actions">
                    <button class="btn btn-sm btn-outline danger-btn delete-skill-btn" data-id="${s.id}" data-type="${s.type}"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `).join('');

        // Attach Delete skill listeners
        document.querySelectorAll('.delete-skill-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                const type = btn.getAttribute('data-type');
                if (type === 'tech') {
                    siteData.techSkills = siteData.techSkills.filter(s => s.id !== id);
                } else {
                    siteData.softSkills = siteData.softSkills.filter(s => s.id !== id);
                }
                saveSiteData();
                renderAdminSkillsList();
                showToast('Keahlian berhasil dihapus.', 'info');
            });
        });
    }

    // Add New Skill
    document.getElementById('addNewSkillBtn').addEventListener('click', () => {
        const name = prompt("Masukkan nama keahlian baru:");
        if (!name) return;
        const pctStr = prompt("Masukkan persentase penguasaan (1-100):", "90");
        const pct = parseInt(pctStr) || 90;
        const typeChoice = prompt("Pilih kategori: Ketik 'tech' untuk Teknologi/Web, atau 'soft' untuk Soft Skill:", "tech");

        const newSkill = { id: Date.now(), name, pct };
        if (typeChoice === 'soft') {
            siteData.softSkills.push(newSkill);
        } else {
            siteData.techSkills.push(newSkill);
        }

        saveSiteData();
        renderAdminSkillsList();
        showToast('Keahlian baru berhasil ditambahkan!', 'success');
    });

    // Render Admin Projects List
    function renderAdminProjectsList() {
        const projectsContainer = document.getElementById('adminProjectsList');
        projectsContainer.innerHTML = siteData.projects.map(p => `
            <div class="admin-item-card">
                <div class="admin-item-info">
                    <strong>${p.title}</strong>
                    <span>Kategori: ${p.category} | Tech: ${p.tech}</span>
                </div>
                <div class="admin-item-actions">
                    <button class="btn btn-sm btn-outline danger-btn delete-project-btn" data-id="${p.id}"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.delete-project-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                siteData.projects = siteData.projects.filter(p => p.id !== id);
                saveSiteData();
                renderAdminProjectsList();
                showToast('Proyek berhasil dihapus.', 'info');
            });
        });
    }

    // Add New Project
    document.getElementById('addNewProjectBtn').addEventListener('click', () => {
        const title = prompt("Masukkan Judul Proyek:");
        if (!title) return;
        const desc = prompt("Masukkan Deskripsi Proyek:");
        const category = prompt("Pilih Kategori ('web', 'edu', atau 'creative'):", "web");
        const tech = prompt("Masukkan Teknologi (pisahkan dengan koma):", "HTML5, CSS3, JavaScript");

        const newProject = {
            id: Date.now(),
            title,
            desc: desc || "Deskripsi proyek baru Shifan.",
            category: category || "web",
            tech: tech || "HTML5, CSS3"
        };

        siteData.projects.push(newProject);
        saveSiteData();
        renderAdminProjectsList();
        showToast('Proyek baru berhasil ditambahkan!', 'success');
    });

    // Export Data JSON Backup
    document.getElementById('adminExportDataBtn').addEventListener('click', () => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(siteData, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `shifan_portfolio_backup_${Date.now()}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
        showToast('Backup JSON data berhasil diunduh.', 'success');
    });

    // Reset All Data
    document.getElementById('adminResetAllBtn').addEventListener('click', () => {
        if (confirm("Apakah Anda yakin ingin mengembalikan seluruh isi website ke data default awal?")) {
            localStorage.removeItem('ssa_site_data');
            siteData = defaultSiteData;
            localStorage.setItem('ssa_site_data', JSON.stringify(siteData));
            renderFrontendContent();
            populateAdminForms();
            showToast('Seluruh data website dikembalikan ke default.', 'info');
        }
    });

    // === 10. Contact Form Submission & Toast System ===
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
