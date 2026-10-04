/**
 * Shifan Shalih Adiluhung - Interactive Portfolio Engine (v3.0)
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
        aboutMeaning: "Saya Shifan Shalih Adiluhung — pelajar asal Ciamis, Jawa Barat, yang aktif sebagai santri di Hiraa Center (Rumah Qur'an & Konsultasi). Nama 'Adiluhung' bukan sekadar nama; ia adalah standar hidup — bermakna luhur dan agung dalam bahasa Jawa. Saya membawa nilai itu ke dalam setiap hal yang saya kerjakan, dari hafalan Al-Qur'an hingga baris kode yang saya tulis.",
        aboutEdu: "Saat ini saya aktif menghafal Al-Qur'an di Hiraa Center dan sekaligus membangun keahlian di bidang teknologi web. Salah satu bukti nyata: portofolio yang sedang kamu baca ini — dibangun sendiri dari nol menggunakan HTML, CSS, dan JavaScript, lengkap dengan sistem admin terproteksi dan deployment ke hosting sungguhan. Pencapaian akademis formal: On Progress.",
        aboutVision: "Saya percaya bahwa seorang santri dan seorang developer bisa berjalan beriringan. Tujuan saya adalah membangun karya digital yang tidak hanya fungsional, tapi juga bermakna — memberi manfaat nyata bagi orang di sekitar saya. Bidang spesifik yang ingin saya tekuni lebih dalam: On Progress.",
        contactEmail: "shifan.adiluhung@example.com",
        contactLocation: "Ciamis / Jawa Barat, Indonesia",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
        instagramUrl: "https://instagram.com",
        
        // Categorized Skills (Checklist & Status Kata-Kata)
        webDevSkills: [
            {
                id: 1,
                name: "HTML",
                icon: "fa-brands fa-html5",
                statusText: "Sangat Mahir & Teruji",
                items: [
                    { title: "Struktur Dokumen & Tag Semantik HTML5", done: true },
                    { title: "Pengolahan Form, Input & Validasinya", done: true },
                    { title: "Integrasi Metadata SEO & OpenGraph", done: true },
                    { title: "Aksesibilitas & Clean Code Structure", done: true }
                ]
            },
            {
                id: 2,
                name: "CSS",
                icon: "fa-brands fa-css3-alt",
                statusText: "Sangat Mahir & Responsive",
                items: [
                    { title: "Layouting Flexbox & Responsive Grid System", done: true },
                    { title: "Desain UI Glassmorphism & Visual Dark Mode", done: true },
                    { title: "Keyframe Animations & Micro-Interactions", done: true },
                    { title: "Custom CSS Variables & Responsive Breakpoints", done: true }
                ]
            },
            {
                id: 3,
                name: "JavaScript",
                icon: "fa-brands fa-js",
                statusText: "Mahir — State Engine & DOM",
                items: [
                    { title: "Sintaksis ES6+, Arrow Functions & Logic Flow", done: true },
                    { title: "DOM Manipulation & Dynamic Rendering Engine", done: true },
                    { title: "Web Storage (LocalStorage & SessionState)", done: true },
                    { title: "Event Listeners & Interactive Keyboard Logic", done: true }
                ]
            },
            {
                id: 4,
                name: "Python",
                icon: "fa-brands fa-python",
                statusText: "Dasar & Logika (On Progress)",
                items: [
                    { title: "Sintaksis Dasar, Variabel & Tipe Data", done: true },
                    { title: "Struktur Kontrol (If-Else & Looping)", done: true },
                    { title: "Pemrosesan Fungsi & Scripting Sederhana", done: false },
                    { title: "Pengembangan Backend / Framework Web", done: false }
                ]
            }
        ],
        designSkills: [],
        otherSkills: [],

        // Categorized Projects
        projects: [
            {
                id: 1,
                title: "Shifan Adiluhung Official Portfolio Hub",
                desc: "Platform portofolio web interaktif dengan desain glassmorphism premium, live dynamic typing, halaman pengelola terproteksi password, dan hosting terintegrasi.",
                category: "web-projects",
                tech: "HTML5, CSS3, JavaScript ES6, LocalStorage State, Halaman Admin"
            },
            {
                id: 2,
                title: "Al-Qur'an & Memorization Tracker Web App",
                desc: "Aplikasi web interaktif untuk pemantauan hafalan harian, target muraja'ah, dan catatan evaluasi tajwid berbasis analitik.",
                category: "web-projects",
                tech: "JavaScript, Web Storage, Dashboard UI"
            },
            {
                id: 3,
                title: "Glassmorphism UI Design System Kit",
                desc: "Konsep tata letak UI glassmorphism modern dengan palet warna dark mode & aksen cyan emas bernilai tinggi.",
                category: "design-projects",
                tech: "UI Design, CSS System, Visual Aesthetics"
            },
            {
                id: 4,
                title: "Personal Brand & Bio Builder Concept",
                desc: "Desain antarmuka pembuat ringkasan profil pribadi interaktif yang dapat disesuaikan secara real-time.",
                category: "design-projects",
                tech: "UI Layout, Interactive Design"
            },
            {
                id: 5,
                title: "Arsip Digital Santri & Siswa Ciamis",
                desc: "Konsep sistem informasi manajemen data prestasi akademis dan capaian santri yang responsif dan mudah diakses.",
                category: "other-projects",
                tech: "Database Concept, Search UI"
            }
        ],

        // Experience
        experiences: [
            {
                id: 1,
                role: "Panitia & Volunteer Pesantren Liburan",
                org: "Hiraa Center — Rumah Qur'an & Konsultasi",
                period: "Kegiatan Berkala",
                desc: "Aktif berpartisipasi dalam penyelenggaraan Pesantren Liburan Hiraa Center, mendampingi santri, serta membangun karakter kepemimpinan yang beretika."
            },
            {
                id: 2,
                role: "Rekam Jejak Akademis & Santri Terpelajar",
                org: "Lembaga Pendidikan Ciamis, Jawa Barat",
                period: "2009 — Sekarang",
                desc: "Mencapai rekam jejak hafalan Al-Qur'an dan prestasi akademis yang konsisten serta terdaftar secara publik."
            },
            {
                id: 3,
                role: "Praktisi Web Development & Creator",
                org: "Portofolio Digital Mandiri",
                period: "2024 — Sekarang",
                desc: "Mengembangkan aplikasi web modern, mengintegrasikan fitur pengelola admin, dan mempublikasikan karya ke server Hostinger."
            }
        ],

        // Achievements
        achievements: [
            {
                id: 1,
                title: "Capaian Hafalan Al-Qur'an & Character Excellence",
                desc: "Tercatat resmi dalam arsip capaian hafalan santri lembaga pendidikan dengan daya ingat dan akhlak luhur."
            },
            {
                id: 2,
                title: "Terdaftar Rekam Akademis Siswa Ciamis",
                desc: "Tercatat dalam data siswa terpelajar wilayah Ciamis, Jawa Barat dengan dedikasi belajar tinggi."
            },
            {
                id: 3,
                title: "Penguasaan Modern Web Engineering & Live Deployment",
                desc: "Berhasil mengintegrasikan website portofolio interaktif ke GitHub dan Hostinger FTP secara otomatis."
            }
        ],

        // Certificates
        certificates: [
            {
                id: 1,
                title: "Sertifikat Panitia/Volunteer Pesantren Liburan",
                issuer: "Hiraa Center",
                desc: "Bukti dedikasi dalam mendampingi dan mengelola kegiatan santri di Rumah Qur'an Hiraa Center."
            },
            {
                id: 2,
                title: "Sertifikat Capaian Hafalan Al-Qur'an",
                issuer: "Lembaga Pendidikan Santri",
                desc: "Penghargaan atas ketekunan dan pencapaian target hafalan Al-Qur'an."
            },
            {
                id: 3,
                title: "Sertifikat Web Development & Frontend Architecture",
                issuer: "Digital Competency Hub",
                desc: "Kelulusan pelatihan pembuatan aplikasi web responsif dan modern."
            }
        ],

        // Tools & Tech
        tools: [
            { name: "HTML5", icon: "fa-brands fa-html5" },
            { name: "CSS3", icon: "fa-brands fa-css3-alt" },
            { name: "JavaScript", icon: "fa-brands fa-js" },
            { name: "Git & GitHub", icon: "fa-brands fa-github" },
            { name: "Hostinger FTP", icon: "fa-solid fa-server" },
            { name: "VS Code", icon: "fa-solid fa-code" }
        ],

        // Testimonials
        testimonials: [
            {
                id: 1,
                quote: "Shifan memiliki ketekunan luar biasa baik dalam hafalan keilmuan maupun dalam menyelesaikan tugas-tugas teknologi dengan hasil bernilai adiluhung.",
                author: "Pengajar Hiraa Center",
                title: "Pembimbing Santri"
            },
            {
                id: 2,
                quote: "Kombinasi yang sangat inspiratif antara karakter terpelajar yang santun dan kecakapan membuat aplikasi web modern.",
                author: "Rekan Kolaborator",
                title: "Web Practitioner"
            }
        ]
    };

    // Migration Helper for Skills Data Structures
    const migrateSkillsData = (data) => {
        if (!data) return defaultSiteData;
        ['webDevSkills', 'designSkills', 'otherSkills'].forEach(key => {
            if (data[key] && Array.isArray(data[key]) && data[key].length > 0) {
                if (data[key][0].pct !== undefined && !data[key][0].items) {
                    data[key] = defaultSiteData[key];
                }
            }
        });
        return data;
    };

    // Load State from LocalStorage or initialize
    let siteData = JSON.parse(localStorage.getItem('ssa_site_data') || 'null');
    if (!siteData) {
        siteData = defaultSiteData;
        localStorage.setItem('ssa_site_data', JSON.stringify(siteData));
    } else {
        siteData = migrateSkillsData(siteData);
        if (siteData.adminPassword === "shifan123" || !siteData.adminPassword) {
            siteData.adminPassword = FIXED_DEFAULT_PASS;
        }
        localStorage.setItem('ssa_site_data', JSON.stringify(siteData));
    }

    // Real-time Storage Sync (Updates website live when Admin edits in another tab)
    window.addEventListener('storage', (e) => {
        if (e.key === 'ssa_site_data' && e.newValue) {
            try {
                siteData = migrateSkillsData(JSON.parse(e.newValue));
                if (typeof renderFrontendContent === 'function') {
                    renderFrontendContent();
                }
            } catch (err) {
                console.error("Auto-sync error:", err);
            }
        }
    });

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

    // === 2. Theme Switcher ===
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

    // === 4. Interactive & Auto Typing Effect (Ngetik Asal) ===
    const typingTextEl = document.getElementById('typingText');
    const rawSubheadlines = siteData.subheadlines || defaultSiteData.subheadlines;
    let subheadlines = (Array.isArray(rawSubheadlines) ? rawSubheadlines : defaultSiteData.subheadlines).map(s => String(s).trim());

    let currentTextIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let idleTimer = null;
    let autoTypingActive = false;

    const renderTypingText = () => {
        if (!typingTextEl) return;
        const currentPhrase = subheadlines[currentTextIndex] || subheadlines[0];
        typingTextEl.textContent = currentPhrase.substring(0, charIndex);
    };

    const stepTyping = () => {
        if (!typingTextEl) return;
        const currentPhrase = subheadlines[currentTextIndex] || subheadlines[0];

        if (isDeleting) {
            if (charIndex > 0) {
                charIndex--;
                renderTypingText();
                typingSpeed = 45; // Fast deletion animation
                setTimeout(stepTyping, typingSpeed);
            } else {
                isDeleting = false;
                currentTextIndex = (currentTextIndex + 1) % subheadlines.length;
                startIdleAutoTypeTimer();
            }
        } else if (autoTypingActive) {
            if (charIndex < currentPhrase.length) {
                charIndex++;
                renderTypingText();
                if (charIndex === currentPhrase.length) {
                    isDeleting = true;
                    setTimeout(stepTyping, 1800); // Pause 1.8s then auto delete
                } else {
                    typingSpeed = 100;
                    setTimeout(stepTyping, typingSpeed);
                }
            } else {
                isDeleting = true;
                setTimeout(stepTyping, 1800);
            }
        }
    };

    const startIdleAutoTypeTimer = () => {
        clearTimeout(idleTimer);
        // If user hasn't typed in 2.5s, auto-type automatically
        idleTimer = setTimeout(() => {
            if (!isDeleting && !autoTypingActive) {
                autoTypingActive = true;
                stepTyping();
            }
        }, 2500);
    };

    // User Physical Keypress Listener ("Ngetik Asal")
    window.addEventListener('keydown', (e) => {
        // Ignore modifier keys, shortcut combos, navigation keys
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        if (['Control', 'Shift', 'Alt', 'Meta', 'Tab', 'Escape', 'CapsLock', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12'].includes(e.key)) return;

        // Ignore keypresses if user is currently typing in an input or textarea (e.g. form fields, admin portal)
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        if (activeTag === 'input' || activeTag === 'textarea' || (document.activeElement && document.activeElement.isContentEditable)) return;

        if (!typingTextEl) return;
        const currentPhrase = subheadlines[currentTextIndex] || subheadlines[0];

        // If currently auto-deleting, cancel deletion and start fresh on keypress
        if (isDeleting) {
            isDeleting = false;
            charIndex = 0;
            renderTypingText();
        }

        autoTypingActive = false; // User keypress takes control!
        clearTimeout(idleTimer);

        if (charIndex < currentPhrase.length) {
            charIndex++;
            renderTypingText();

            if (charIndex === currentPhrase.length) {
                // Completed! Pause 1.8s then auto-delete backspacing
                isDeleting = true;
                setTimeout(stepTyping, 1800);
            } else {
                startIdleAutoTypeTimer();
            }
        }
    });

    if (typingTextEl) {
        startIdleAutoTypeTimer();
    }

    // === 5. Render All Frontend Content Dynamically ===
    const renderFrontendContent = () => {
        if (!document.getElementById('heroNameDisplay')) return;

        // Hero Name & Bio
        document.getElementById('heroNameDisplay').textContent = siteData.name;
        document.getElementById('aboutNameDisplay').textContent = siteData.name;
        document.getElementById('contactTitleName').textContent = siteData.name;
        document.getElementById('heroBioDisplay').textContent = siteData.bio;
        subheadlines = (Array.isArray(siteData.subheadlines) ? siteData.subheadlines : defaultSiteData.subheadlines).map(s => String(s).trim());

        // About Narrative
        if (document.getElementById('aboutMeaningText')) document.getElementById('aboutMeaningText').innerHTML = siteData.aboutMeaning || defaultSiteData.aboutMeaning;
        if (document.getElementById('aboutEduText')) document.getElementById('aboutEduText').innerHTML = siteData.aboutEdu || defaultSiteData.aboutEdu;
        if (document.getElementById('aboutVisionText')) document.getElementById('aboutVisionText').innerHTML = siteData.aboutVision || defaultSiteData.aboutVision;

        // Categorized Skills (Checklist & Word Status)
        const createSkillCardHTML = (s) => {
            const items = s.items || [];
            const doneCount = items.filter(i => i.done).length;
            const totalCount = items.length;
            
            // Icon fallback
            let iconClass = s.icon || 'fa-solid fa-code';
            const sNameLower = s.name ? s.name.toLowerCase() : '';
            if (sNameLower.includes('html')) iconClass = 'fa-brands fa-html5';
            else if (sNameLower.includes('css')) iconClass = 'fa-brands fa-css3-alt';
            else if (sNameLower.includes('javascript') || sNameLower.includes('js')) iconClass = 'fa-brands fa-js';
            else if (sNameLower.includes('python')) iconClass = 'fa-brands fa-python';

            const statusText = s.statusText || (doneCount === totalCount && totalCount > 0 ? "Sangat Mahir & Teruji" : doneCount > 0 ? "Menengah (Dalam Pengembangan)" : "Baru Mempelajari (On Progress)");
            const isGold = doneCount === totalCount && totalCount > 0;

            const checklistHTML = items.map(item => `
                <li class="skill-checklist-item ${item.done ? 'done' : 'pending'}">
                    <i class="${item.done ? 'fa-solid fa-square-check' : 'fa-regular fa-square'}"></i>
                    <span>${item.title}</span>
                </li>
            `).join('');

            return `
                <div class="skill-card glass-card">
                    <div class="skill-card-header">
                        <div class="skill-card-title-box">
                            <i class="${iconClass} skill-card-icon"></i>
                            <h3>${s.name}</h3>
                        </div>
                        <span class="skill-status-badge ${isGold ? 'gold' : ''}">${statusText}</span>
                    </div>
                    <ul class="skill-checklist">
                        ${checklistHTML || '<li class="skill-checklist-item pending"><span>Belum ada target spesifik.</span></li>'}
                    </ul>
                    <div class="skill-card-footer">
                        <span><i class="fa-solid fa-list-check"></i> Target Pencapaian</span>
                        <strong>${doneCount} dari ${totalCount} Target Selesai</strong>
                    </div>
                </div>
            `;
        };

        const renderSkillsCategory = (containerId, skillsList) => {
            const container = document.getElementById(containerId);
            if (!container) return;

            if (!skillsList || skillsList.length === 0) {
                container.innerHTML = `
                    <div class="empty-skills-placeholder glass-card">
                        <i class="fa-solid fa-hourglass-half"></i>
                        <h4>Keahlian Belum Diisi (On Progress)</h4>
                        <p>Kategori keahlian ini disiapkan untuk tahap perkembangan selanjutnya.</p>
                    </div>
                `;
            } else {
                container.innerHTML = skillsList.map(s => createSkillCardHTML(s)).join('');
            }
        };

        renderSkillsCategory('webDevSkillsContainer', siteData.webDevSkills || defaultSiteData.webDevSkills);
        renderSkillsCategory('designSkillsContainer', siteData.designSkills || defaultSiteData.designSkills);
        renderSkillsCategory('otherSkillsContainer', siteData.otherSkills || defaultSiteData.otherSkills);

        // Projects ⭐⭐⭐
        const projectsContainer = document.getElementById('projectsGridContainer');
        const projList = siteData.projects || defaultSiteData.projects;
        if (projectsContainer) {
            projectsContainer.innerHTML = projList.map(p => `
                <div class="project-card glass-card" data-category="${p.category}">
                    <div class="project-thumb">
                        <div class="thumb-icon"><i class="fa-solid fa-${p.category === 'web-projects' ? 'laptop-code' : p.category === 'design-projects' ? 'wand-magic-sparkles' : 'folder'}"></i></div>
                        <span class="project-category">${p.category === 'web-projects' ? 'Web Project' : p.category === 'design-projects' ? 'Design Project' : 'Other Project'}</span>
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

        // Experience
        const expContainer = document.getElementById('experienceTimelineContainer');
        const expList = siteData.experiences || defaultSiteData.experiences;
        if (expContainer) {
            expContainer.innerHTML = expList.map(e => `
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="timeline-content glass-card">
                        <span class="timeline-date"><i class="fa-solid fa-calendar-days"></i> ${e.period}</span>
                        <h3>${e.role}</h3>
                        <h4 style="color: var(--primary-color); font-size: 0.95rem; margin-bottom: 0.75rem;">${e.org}</h4>
                        <p>${e.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        // Achievements
        const achContainer = document.getElementById('achievementsGridContainer');
        const achList = siteData.achievements || defaultSiteData.achievements;
        if (achContainer) {
            achContainer.innerHTML = achList.map(a => `
                <div class="achieve-card glass-card">
                    <div class="achieve-icon"><i class="fa-solid fa-trophy"></i></div>
                    <h3>${a.title}</h3>
                    <p style="color: var(--text-secondary); font-size: 0.9rem;">${a.desc}</p>
                </div>
            `).join('');
        }

        // Certificates
        const certContainer = document.getElementById('certificatesGridContainer');
        const certList = siteData.certificates || defaultSiteData.certificates;
        if (certContainer) {
            certContainer.innerHTML = certList.map(c => `
                <div class="cert-card glass-card">
                    <div class="cert-icon"><i class="fa-solid fa-certificate"></i></div>
                    <div class="cert-issuer">${c.issuer}</div>
                    <h3>${c.title}</h3>
                    <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.5rem;">${c.desc}</p>
                </div>
            `).join('');
        }

        // Tools & Tech
        const toolContainer = document.getElementById('toolsGridContainer');
        const toolList = siteData.tools || defaultSiteData.tools;
        if (toolContainer) {
            toolContainer.innerHTML = toolList.map(t => `
                <div class="tool-card glass-card">
                    <div class="tool-icon"><i class="${t.icon}"></i></div>
                    <div class="tool-name">${t.name}</div>
                </div>
            `).join('');
        }

        // Testimonials
        const testContainer = document.getElementById('testimonialsGridContainer');
        const testList = siteData.testimonials || defaultSiteData.testimonials;
        if (testContainer) {
            testContainer.innerHTML = testList.map(t => `
                <div class="testimonial-card glass-card">
                    <p>"${t.quote}"</p>
                    <div class="testimonial-author">
                        <div class="author-avatar">${t.author.charAt(0)}</div>
                        <div class="author-info">
                            <strong>${t.author}</strong>
                            <span>${t.title}</span>
                        </div>
                    </div>
                </div>
            `).join('');
        }

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

        attachProjectModalListeners();
    };

    renderFrontendContent();

    // === 6. Skills Sub-Category Tabs Listener ===
    const skillTabBtns = document.querySelectorAll('#skillsTabGroup .filter-btn');
    skillTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            skillTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const targetTab = btn.getAttribute('data-skill-tab');
            document.querySelectorAll('.skills-pane').forEach(pane => pane.classList.remove('active'));

            if (targetTab === 'web-dev') document.getElementById('paneSkillWebDev').classList.add('active');
            if (targetTab === 'design') document.getElementById('paneSkillDesign').classList.add('active');
            if (targetTab === 'other-skills') document.getElementById('paneSkillOther').classList.add('active');
        });
    });

    // === 7. Project Category Filters ===
    const projFilterBtns = document.querySelectorAll('[data-proj-filter]');
    projFilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            projFilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-proj-filter');
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

    // === 8. 3D Tilt Effect on Hero Card ===
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

    // === 9. Modals (Name Meaning & Project Detail) ===
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

    // Toast Helper
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
