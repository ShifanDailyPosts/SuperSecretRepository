/**
 * Shifan Shalih Adiluhung - Interactive Portfolio Engine (v3.0)
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
        aboutMeaning: "Saya Shifan Shalih Adiluhung — pelajar asal Ciamis, Jawa Barat, yang aktif sebagai santri di Hiraa Center (Rumah Qur'an & Konsultasi). Nama 'Adiluhung' bukan sekadar nama; ia adalah standar hidup — bermakna luhur dan agung dalam bahasa Jawa. Saya membawa nilai itu ke dalam setiap hal yang saya kerjakan, dari hafalan Al-Qur'an hingga baris kode yang saya tulis.",
        aboutEdu: "Saat ini saya aktif menghafal Al-Qur'an di Hiraa Center dan sekaligus membangun keahlian di bidang teknologi web. Salah satu bukti nyata: portofolio yang sedang kamu baca ini — dibangun sendiri dari nol menggunakan HTML, CSS, dan JavaScript, lengkap dengan sistem admin terproteksi dan deployment ke hosting sungguhan. Pencapaian akademis formal: On Progress.",
        aboutVision: "Saya percaya bahwa seorang santri dan seorang developer bisa berjalan beriringan. Tujuan saya adalah membangun karya digital yang tidak hanya fungsional, tapi juga bermakna — memberi manfaat nyata bagi orang di sekitar saya. Bidang spesifik yang ingin saya tekuni lebih dalam: On Progress.",
        contactEmail: "shifan.adiluhung@example.com",
        contactLocation: "Ciamis / Jawa Barat, Indonesia",
        githubUrl: "https://github.com",
        linkedinUrl: "https://linkedin.com",
        instagramUrl: "https://instagram.com",
        
        // Categorized Skills (Checklist & Status Kata-Kata)
        skillCategories: [
            { id: 'web-dev', key: 'webDevSkills', title: 'Web Development', icon: 'fa-solid fa-code' },
            { id: 'design', key: 'designSkills', title: 'Design', icon: 'fa-solid fa-palette' },
            { id: 'other-skills', key: 'otherSkills', title: 'Other Skills', icon: 'fa-solid fa-brain' }
        ],
        webDevSkills: [
            {
                id: 1,
                name: "HTML",
                icon: "fa-brands fa-html5",
                statusText: "Mastered / Cleaned",
                items: [
                    { title: "Struktur Dokumen & Tag Semantik HTML5", stage: 5, done: true },
                    { title: "Pengolahan Form, Input & Validasinya", stage: 5, done: true },
                    { title: "Integrasi Metadata SEO & OpenGraph", stage: 5, done: true },
                    { title: "Aksesibilitas & Clean Code Structure", stage: 5, done: true }
                ]
            },
            {
                id: 2,
                name: "CSS",
                icon: "fa-brands fa-css3-alt",
                statusText: "Mastered / Cleaned",
                items: [
                    { title: "Layouting Flexbox & Responsive Grid System", stage: 5, done: true },
                    { title: "Desain UI Glassmorphism & Visual Dark Mode", stage: 5, done: true },
                    { title: "Keyframe Animations & Micro-Interactions", stage: 5, done: true },
                    { title: "Custom CSS Variables & Responsive Breakpoints", stage: 5, done: true }
                ]
            },
            {
                id: 3,
                name: "JavaScript",
                icon: "fa-brands fa-js",
                statusText: "Half-Baked",
                items: [
                    { title: "Sintaksis ES6+, Arrow Functions & Logic Flow", stage: 5, done: true },
                    { title: "DOM Manipulation & Dynamic Rendering Engine", stage: 5, done: true },
                    { title: "Web Storage (LocalStorage & SessionState)", stage: 4, done: false },
                    { title: "Event Listeners & Interactive Keyboard Logic", stage: 0, done: false }
                ]
            },
            {
                id: 4,
                name: "Python",
                icon: "fa-brands fa-python",
                statusText: "Grinding Hard",
                items: [
                    { title: "Sintaksis Dasar, Variabel & Tipe Data", stage: 2, done: false },
                    { title: "Struktur Kontrol (If-Else & Looping)", stage: 0, done: false },
                    { title: "Pemrosesan Fungsi & Scripting Sederhana", stage: 0, done: false },
                    { title: "Pengembangan Backend / Framework Web", stage: 0, done: false }
                ]
            }
        ],
        designSkills: [],
        otherSkills: [],

        // Categorized Projects (Website Portofolio Ini & 3 On Progress)
        projects: [
            {
                id: 1,
                title: "Website Portofolio Shifan Shalih Adiluhung",
                desc: "Platform portofolio web interaktif resmi yang sedang kamu jelajahi saat ini. Dibangun dengan layout glassmorphism modern, dynamic typing, sistem admin terproteksi, dan hosting mandiri.",
                category: "web-projects",
                tech: "HTML5, CSS3, JavaScript ES6, LocalStorage, FTP Deployment",
                link: "index.html",
                isCurrentSite: true
            },
            {
                id: 2,
                title: "Proyek Web Baru (On Progress)",
                desc: "Pengembangan karya web interaktif berikutnya sedang dalam tahap perancangan arsitektur, riset konsep, dan pengerjaan (On Progress).",
                category: "web-projects",
                tech: "Web App, On Progress",
                link: "#",
                isCurrentSite: false
            },
            {
                id: 3,
                title: "Eksplorasi Desain UI/UX (On Progress)",
                desc: "Koleksi perancangan antarmuka visual modern, sistem layout responsif, dan aset grafis kreatif dalam tahap pengerjaan (On Progress).",
                category: "design-projects",
                tech: "UI/UX, Glassmorphism, On Progress",
                link: "#",
                isCurrentSite: false
            },
            {
                id: 4,
                title: "Inovasi & Riset Teknologi (On Progress)",
                desc: "Inisiatif teknologi terapan, sistem informasi digital, dan proyek eksplorasi lainnya sedang dalam tahap perencanaan (On Progress).",
                category: "other-projects",
                tech: "Research, Concept, On Progress",
                link: "#",
                isCurrentSite: false
            }
        ],

        // Experience (On Progress)
        experiences: [
            {
                id: 1,
                role: "Riwayat & Rekam Jejak Pengalaman",
                org: "Tahap Pemutakhiran Data",
                period: "On Progress",
                desc: "Bagian pengalaman dan rekam jejak ini sedang dalam tahap penyesuaian dan verifikasi data resmi (On Progress)."
            }
        ],

        // Achievements (On Progress)
        achievements: [
            {
                id: 1,
                title: "Daftar Pencapaian & Prestasi Resmi",
                desc: "Informasi rekam jejak pencapaian dan prestasi resmi sedang dalam tahap penyesuaian data (On Progress)."
            }
        ],

        // Certificates (On Progress)
        certificates: [
            {
                id: 1,
                title: "Arsip Sertifikasi & Kredensial Resmi",
                issuer: "Tahap Pemutakhiran Data",
                desc: "Dokumen dan bukti sertifikat resmi sedang dalam tahap pendataan serta verifikasi (On Progress)."
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

        // Testimonials (On Progress)
        testimonials: [
            {
                id: 1,
                quote: "Bagian testimoni dan ulasan ini sedang dalam tahap pengumpulan serta verifikasi resmi (On Progress).",
                author: "Tahap Pemutakhiran",
                title: "On Progress"
            }
        ]
    };

    // Migration Helper for Skills Data Structures
    const migrateSkillsData = (data) => {
        if (!data) return defaultSiteData;
        if (!data.skillCategories || !Array.isArray(data.skillCategories)) {
            data.skillCategories = [
                { id: 'web-dev', key: 'webDevSkills', title: 'Web Development', icon: 'fa-solid fa-code' },
                { id: 'design', key: 'designSkills', title: 'Design', icon: 'fa-solid fa-palette' },
                { id: 'other-skills', key: 'otherSkills', title: 'Other Skills', icon: 'fa-solid fa-brain' }
            ];
        }
        data.skillCategories.forEach(cat => {
            const key = cat.key;
            if (!data[key] || !Array.isArray(data[key])) {
                data[key] = (defaultSiteData[key] && Array.isArray(defaultSiteData[key])) ? defaultSiteData[key] : [];
            } else {
                data[key].forEach(s => {
                    if (!s.items || !Array.isArray(s.items)) {
                        s.items = [];
                    }
                    let prevMastered = true;
                    s.items.forEach((itm, idx) => {
                        if (itm.stage === undefined || itm.stage === null) {
                            itm.stage = itm.done ? 5 : (prevMastered ? 1 : 0);
                        } else {
                            itm.stage = parseInt(itm.stage);
                        }
                        if (!prevMastered && itm.stage > 0) {
                            itm.stage = 0;
                        }
                        itm.done = (itm.stage === 5);
                        prevMastered = (itm.stage === 5);
                    });

                    const totalPoints = s.items.reduce((sum, itm) => sum + (itm.stage || 0), 0);
                    const maxPoints = (s.items.length || 1) * 5;
                    const avgPct = Math.round((totalPoints / maxPoints) * 100);

                    if (!s.statusText || ['Sangat Mahir','Mahir','Cukup Mahir','Kurang Mahir'].includes(s.statusText)) {
                        if (avgPct >= 90) s.statusText = "Mastered / Cleaned";
                        else if (avgPct >= 70) s.statusText = "Half-Baked";
                        else if (avgPct >= 50) s.statusText = "Werving / On Radar";
                        else if (avgPct >= 30) s.statusText = "Grinding Hard";
                        else if (avgPct > 0) s.statusText = "Newbie Grounding";
                        else s.statusText = "Locked";
                    }
                });
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
        // Migrasi Pengalaman ke On Progress jika terdeteksi data lama yang tidak akurat
        if (siteData.experiences && Array.isArray(siteData.experiences)) {
            const hasOldInaccurateExp = siteData.experiences.some(e => 
                (e.org && (e.org.includes('Hiraa') || e.org.includes('Ciamis') || e.org.includes('Mandiri'))) ||
                (e.role && (e.role.includes('Pesantren Liburan') || e.role.includes('Rekam Jejak') || e.role.includes('Praktisi Web')))
            );
            if (hasOldInaccurateExp) {
                siteData.experiences = defaultSiteData.experiences;
            }
        }
        // Migrasi Sertifikat ke On Progress jika terdeteksi data lama yang tidak akurat
        if (siteData.certificates && Array.isArray(siteData.certificates)) {
            const hasOldInaccurateCerts = siteData.certificates.some(c => 
                (c.issuer && (c.issuer.includes('Hiraa') || c.issuer.includes('Santri') || c.issuer.includes('Digital Competency'))) ||
                (c.title && (c.title.includes('Pesantren Liburan') || c.title.includes('Hafalan') || c.title.includes('Frontend Architecture')))
            );
            if (hasOldInaccurateCerts) {
                siteData.certificates = defaultSiteData.certificates;
            }
        }
        // Migrasi Projects ke Website Portofolio & 3 On Progress
        const needsProjectsUpdate = !siteData.projects || 
            !Array.isArray(siteData.projects) || 
            siteData.projects.length !== 4 || 
            !siteData.projects[0] || 
            !siteData.projects[0].isCurrentSite ||
            siteData.projectsVersion !== 2;

        if (needsProjectsUpdate) {
            siteData.projects = defaultSiteData.projects;
            siteData.projectsVersion = 2;
        }

        // Migrasi Achievements ke On Progress jika terdeteksi data lama
        const needsAchievementsUpdate = !siteData.achievements || 
            !Array.isArray(siteData.achievements) || 
            siteData.achievements.length !== 1 || 
            siteData.achievementsVersion !== 2;

        if (needsAchievementsUpdate) {
            siteData.achievements = defaultSiteData.achievements;
            siteData.achievementsVersion = 2;
        }

        // Migrasi Testimonials ke On Progress jika terdeteksi data lama
        const needsTestimonialsUpdate = !siteData.testimonials || 
            !Array.isArray(siteData.testimonials) || 
            siteData.testimonials.length !== 1 || 
            siteData.testimonialsVersion !== 2;

        if (needsTestimonialsUpdate) {
            siteData.testimonials = defaultSiteData.testimonials;
            siteData.testimonialsVersion = 2;
        }
        localStorage.setItem('ssa_site_data', JSON.stringify(siteData));
    }

    // Real-time Storage Sync (Updates website live when Admin edits in another tab)
    window.addEventListener('storage', (e) => {
        if (e.key === 'ssa_site_data' && e.newValue) {
            try {
                siteData = migrateSkillsData(JSON.parse(e.newValue));
                if (siteData.experiences && Array.isArray(siteData.experiences)) {
                    const hasOldInaccurateExp = siteData.experiences.some(e => 
                        (e.org && (e.org.includes('Hiraa') || e.org.includes('Ciamis') || e.org.includes('Mandiri'))) ||
                        (e.role && (e.role.includes('Pesantren Liburan') || e.role.includes('Rekam Jejak') || e.role.includes('Praktisi Web')))
                    );
                    if (hasOldInaccurateExp) {
                        siteData.experiences = defaultSiteData.experiences;
                    }
                }
                if (siteData.certificates && Array.isArray(siteData.certificates)) {
                    const hasOldInaccurateCerts = siteData.certificates.some(c => 
                        (c.issuer && (c.issuer.includes('Hiraa') || c.issuer.includes('Santri') || c.issuer.includes('Digital Competency'))) ||
                        (c.title && (c.title.includes('Pesantren Liburan') || c.title.includes('Hafalan') || c.title.includes('Frontend Architecture')))
                    );
                    if (hasOldInaccurateCerts) {
                        siteData.certificates = defaultSiteData.certificates;
                    }
                }
                const needsProjectsUpdate = !siteData.projects || 
                    !Array.isArray(siteData.projects) || 
                    siteData.projects.length !== 4 || 
                    !siteData.projects[0] || 
                    !siteData.projects[0].isCurrentSite ||
                    siteData.projectsVersion !== 2;

                if (needsProjectsUpdate) {
                    siteData.projects = defaultSiteData.projects;
                    siteData.projectsVersion = 2;
                }
                const needsAchievementsUpdate = !siteData.achievements || 
                    !Array.isArray(siteData.achievements) || 
                    siteData.achievements.length !== 1 || 
                    siteData.achievementsVersion !== 2;

                if (needsAchievementsUpdate) {
                    siteData.achievements = defaultSiteData.achievements;
                    siteData.achievementsVersion = 2;
                }
                const needsTestimonialsUpdate = !siteData.testimonials || 
                    !Array.isArray(siteData.testimonials) || 
                    siteData.testimonials.length !== 1 || 
                    siteData.testimonialsVersion !== 2;

                if (needsTestimonialsUpdate) {
                    siteData.testimonials = defaultSiteData.testimonials;
                    siteData.testimonialsVersion = 2;
                }
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

    // User Physical Keypress Listener ("Ngetik Asal") & Secret Admin Shortcut
    window.addEventListener('keydown', (e) => {
        // Secret Shortcut to Admin: Ctrl + Shift + A (Windows/Linux) or Cmd + Shift + A (Mac)
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
            e.preventDefault();
            window.location.href = 'admin.html';
            return;
        }

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

        // Categorized Skills (Clean Grid with Status Kata-Kata & Progress Fill)
        const createSkillItemHTML = (s) => {
            const items = s.items || [];
            const totalCount = items.length;
            
            // Calculate percentage fill based on checklist items stages if available, or statusText / pct
            let progressPct = 50;
            if (totalCount > 0) {
                const totalPoints = items.reduce((sum, itm) => sum + (itm.stage !== undefined ? parseInt(itm.stage) : (itm.done ? 5 : 0)), 0);
                progressPct = Math.round((totalPoints / (totalCount * 5)) * 100);
            } else if (s.pct !== undefined) {
                progressPct = s.pct;
            } else {
                const txt = (s.statusText || '').toLowerCase();
                if (txt.includes('mastered') || txt.includes('cleaned') || txt.includes('sangat mahir') || txt.includes('expert')) progressPct = 95;
                else if (txt.includes('half-baked') || txt.includes('mahir') || txt.includes('advanced')) progressPct = 78;
                else if (txt.includes('werving') || txt.includes('radar') || txt.includes('cukup mahir') || txt.includes('menengah')) progressPct = 58;
                else if (txt.includes('grinding') || txt.includes('kurang mahir')) progressPct = 38;
                else if (txt.includes('newbie') || txt.includes('grounding') || txt.includes('pemula')) progressPct = 20;
                else if (txt.includes('locked')) progressPct = 0;
            }

            // Icon fallback
            let iconClass = s.icon || 'fa-solid fa-code';
            const sNameLower = s.name ? s.name.toLowerCase() : '';
            if (sNameLower.includes('html')) iconClass = 'fa-brands fa-html5';
            else if (sNameLower.includes('css')) iconClass = 'fa-brands fa-css3-alt';
            else if (sNameLower.includes('javascript') || sNameLower.includes('js')) iconClass = 'fa-brands fa-js';
            else if (sNameLower.includes('python')) iconClass = 'fa-brands fa-python';

            let statusText = s.statusText;
            if (!statusText) {
                if (progressPct >= 90) statusText = "Mastered / Cleaned";
                else if (progressPct >= 70) statusText = "Half-Baked";
                else if (progressPct >= 50) statusText = "Werving / On Radar";
                else if (progressPct >= 30) statusText = "Grinding Hard";
                else if (progressPct > 0) statusText = "Newbie Grounding";
                else statusText = "Locked";
            }
            const isGold = progressPct >= 90 || statusText.toLowerCase().includes('mastered') || statusText.toLowerCase().includes('sangat mahir');
            const isLocked = statusText.toLowerCase().includes('locked');
            const badgeClass = isGold ? 'gold' : (isLocked ? 'locked' : '');

            return `
                <div class="skill-item">
                    <div class="skill-info">
                        <div class="skill-name-box">
                            <i class="${iconClass} skill-icon"></i>
                            <span class="skill-name">${s.name}</span>
                        </div>
                        <span class="skill-status-badge ${badgeClass}">${statusText}</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill ${isGold ? 'gold-fill' : ''}" style="width: ${progressPct}%;"></div>
                    </div>
                </div>
            `;
        };

        // 3. Render Categorized Skills
        const skillsTabGroup = document.getElementById('skillsTabGroup');
        const skillsWrapper = document.querySelector('.skills-categorized-wrapper');
        const categories = (siteData.skillCategories && Array.isArray(siteData.skillCategories))
            ? siteData.skillCategories
            : [
                { id: 'web-dev', key: 'webDevSkills', title: 'Web Development', icon: 'fa-solid fa-code' },
                { id: 'design', key: 'designSkills', title: 'Design', icon: 'fa-solid fa-palette' },
                { id: 'other-skills', key: 'otherSkills', title: 'Other Skills', icon: 'fa-solid fa-brain' }
            ];

        if (skillsTabGroup && skillsWrapper) {
            if (categories.length === 0) {
                skillsTabGroup.innerHTML = '';
                skillsWrapper.innerHTML = `
                    <div class="glass-card text-center p-4 text-muted" style="border: 1px dashed rgba(255,255,255,0.15);">
                        <i class="fa-solid fa-hourglass-half" style="font-size: 2rem; margin-bottom: 0.75rem; color: var(--text-gold);"></i>
                        <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Keahlian Belum Diisi (On Progress)</h4>
                        <p style="font-size: 0.9rem; margin: 0;">Kategori keahlian sedang dalam tahap penyesuaian kurikulum dan materi.</p>
                    </div>
                `;
            } else {
                skillsTabGroup.innerHTML = categories.map((cat, idx) => `
                    <button class="filter-btn ${idx === 0 ? 'active' : ''}" data-skill-tab="${cat.id}">
                        <i class="${cat.icon || 'fa-solid fa-folder'}"></i> ${cat.title}
                    </button>
                `).join('');

                skillsWrapper.innerHTML = categories.map((cat, idx) => {
                    const skillsList = siteData[cat.key] || [];
                    let itemsHtml = '';
                    if (!skillsList || skillsList.length === 0) {
                        itemsHtml = `
                            <div class="empty-skills-placeholder text-center p-3">
                                <i class="fa-solid fa-hourglass-half"></i>
                                <h4 style="font-size: 1.05rem; margin-top: 0.5rem; margin-bottom: 0.25rem;">Keahlian Belum Diisi (On Progress)</h4>
                                <p style="font-size: 0.85rem; color: var(--text-muted); margin: 0;">Kategori keahlian ini disiapkan untuk tahap perkembangan selanjutnya.</p>
                            </div>
                        `;
                    } else {
                        itemsHtml = skillsList.map(s => createSkillItemHTML(s)).join('');
                    }

                    return `
                        <div class="skills-pane ${idx === 0 ? 'active' : ''}" id="paneSkill_${cat.id}">
                            <div class="skills-grid glass-card p-4">
                                <div class="skill-items">
                                    ${itemsHtml}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('');
            }
        }

        // Projects ⭐⭐⭐
        const projectsContainer = document.getElementById('projectsGridContainer');
        const projList = siteData.projects || defaultSiteData.projects;
        if (projectsContainer) {
            projectsContainer.innerHTML = projList.map(p => {
                const isCurrentWebsite = p.isCurrentSite || (p.link === "index.html") || (p.title && p.title.toLowerCase().includes("website portofolio"));
                if (isCurrentWebsite) {
                    return `
                        <div class="project-card glass-card project-card-clickable" data-category="${p.category}" data-href="index.html" title="Klik untuk memuat ulang / masuk ke website ini">
                            <div class="project-thumb">
                                <div class="badge-live-site"><span class="badge-live-dot"></span> Website Ini (Aktif)</div>
                                <div class="thumb-icon"><i class="fa-solid fa-globe"></i></div>
                                <span class="project-category">Web Project</span>
                            </div>
                            <div class="project-details">
                                <h3>${p.title}</h3>
                                <p>${p.desc}</p>
                                <div class="project-tech">
                                    ${p.tech.split(',').map(t => `<span>${t.trim()}</span>`).join('')}
                                </div>
                                <a href="index.html" class="btn btn-sm btn-primary project-action-btn" style="width: fit-content; text-decoration: none;">
                                    <i class="fa-solid fa-arrow-rotate-right"></i> Masuk Ulang ke Website Ini
                                </a>
                            </div>
                        </div>
                    `;
                } else {
                    return `
                        <div class="project-card glass-card project-card-onprogress" data-category="${p.category}" title="Proyek masih dalam tahap pengerjaan (On Progress)">
                            <div class="project-thumb">
                                <div class="badge-onprogress-site"><i class="fa-solid fa-hourglass-half"></i> On Progress</div>
                                <div class="thumb-icon" style="opacity: 0.45;"><i class="fa-solid fa-${p.category === 'web-projects' ? 'laptop-code' : p.category === 'design-projects' ? 'wand-magic-sparkles' : 'folder'}"></i></div>
                                <span class="project-category">${p.category === 'web-projects' ? 'Web Project' : p.category === 'design-projects' ? 'Design Project' : 'Other Project'}</span>
                            </div>
                            <div class="project-details">
                                <h3>${p.title}</h3>
                                <p>${p.desc}</p>
                                <div class="project-tech">
                                    ${p.tech.split(',').map(t => `<span style="background: rgba(245, 158, 11, 0.12); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.25);">${t.trim()}</span>`).join('')}
                                </div>
                                <button type="button" class="btn btn-sm btn-outline onprogress-project-btn" style="width: fit-content; opacity: 0.85; cursor: pointer;">
                                    <i class="fa-solid fa-hourglass-half"></i> On Progress
                                </button>
                            </div>
                        </div>
                    `;
                }
            }).join('');
        }

        // Experience
        const expContainer = document.getElementById('experienceTimelineContainer');
        const expList = siteData.experiences || defaultSiteData.experiences;
        if (expContainer) {
            if (!expList || expList.length === 0) {
                expContainer.innerHTML = `
                    <div class="glass-card text-center p-4" style="max-width: 600px; margin: 0 auto;">
                        <i class="fa-solid fa-hourglass-half" style="font-size: 2rem; color: var(--primary-color); margin-bottom: 0.75rem;"></i>
                        <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Pengalaman Sedang Diperbarui (On Progress)</h3>
                        <p style="font-size: 0.88rem; color: var(--text-muted); margin: 0;">Data riwayat pengalaman dan rekam jejak resmi sedang dalam tahap pemutakhiran.</p>
                    </div>
                `;
            } else {
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
        }

        // Achievements
        const achContainer = document.getElementById('achievementsGridContainer');
        const achList = siteData.achievements || defaultSiteData.achievements;
        if (achContainer) {
            const isOnProgress = !achList || achList.length === 0 || achList.some(a => (a.title && a.title.includes('On Progress')) || (a.desc && a.desc.includes('On Progress')));
            if (isOnProgress) {
                achContainer.innerHTML = `
                    <div class="glass-card text-center p-4" style="grid-column: 1 / -1; max-width: 600px; margin: 0 auto;">
                        <i class="fa-solid fa-hourglass-half" style="font-size: 2rem; color: var(--primary-color); margin-bottom: 0.75rem;"></i>
                        <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Pencapaian Sedang Diperbarui (On Progress)</h3>
                        <p style="font-size: 0.88rem; color: var(--text-muted); margin: 0;">Data riwayat pencapaian dan prestasi resmi sedang dalam tahap penyesuaian serta verifikasi (On Progress).</p>
                    </div>
                `;
            } else {
                achContainer.innerHTML = achList.map(a => `
                    <div class="achieve-card glass-card">
                        <div class="achieve-icon"><i class="fa-solid fa-trophy"></i></div>
                        <h3>${a.title}</h3>
                        <p style="color: var(--text-secondary); font-size: 0.9rem;">${a.desc}</p>
                    </div>
                `).join('');
            }
        }

        // Certificates
        const certContainer = document.getElementById('certificatesGridContainer');
        const certList = siteData.certificates || defaultSiteData.certificates;
        if (certContainer) {
            if (!certList || certList.length === 0) {
                certContainer.innerHTML = `
                    <div class="glass-card text-center p-4" style="grid-column: 1 / -1; max-width: 600px; margin: 0 auto;">
                        <i class="fa-solid fa-hourglass-half" style="font-size: 2rem; color: var(--text-gold); margin-bottom: 0.75rem;"></i>
                        <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Sertifikat Sedang Diverifikasi (On Progress)</h3>
                        <p style="font-size: 0.88rem; color: var(--text-muted); margin: 0;">Dokumen dan bukti sertifikat resmi sedang dalam tahap pendataan serta pemutakhiran.</p>
                    </div>
                `;
            } else {
                certContainer.innerHTML = certList.map(c => `
                    <div class="cert-card glass-card">
                        <div class="cert-icon"><i class="fa-solid fa-certificate"></i></div>
                        <div class="cert-issuer">${c.issuer}</div>
                        <h3>${c.title}</h3>
                        <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.5rem;">${c.desc}</p>
                    </div>
                `).join('');
            }
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
            const isOnProgress = !testList || testList.length === 0 || testList.some(t => (t.quote && t.quote.includes('On Progress')) || (t.title && t.title.includes('On Progress')) || (t.author && t.author.includes('Pemutakhiran')));
            if (isOnProgress) {
                testContainer.innerHTML = `
                    <div class="glass-card text-center p-4" style="grid-column: 1 / -1; max-width: 600px; margin: 0 auto;">
                        <i class="fa-solid fa-hourglass-half" style="font-size: 2rem; color: var(--primary-color); margin-bottom: 0.75rem;"></i>
                        <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem;">Testimoni Sedang Dikumpulkan (On Progress)</h3>
                        <p style="font-size: 0.88rem; color: var(--text-muted); margin: 0;">Ulasan, rekomendasi, dan pesan kesan resmi sedang dalam proses pengumpulan (On Progress).</p>
                    </div>
                `;
            } else {
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

    // === 6. Skills Sub-Category Tabs Listener (Event Delegation) ===
    const skillsTabGroupEl = document.getElementById('skillsTabGroup');
    if (skillsTabGroupEl) {
        skillsTabGroupEl.addEventListener('click', (e) => {
            const btn = e.target.closest('.filter-btn');
            if (!btn) return;
            skillsTabGroupEl.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const targetTab = btn.getAttribute('data-skill-tab');
            document.querySelectorAll('.skills-pane').forEach(pane => pane.classList.remove('active'));
            const targetPane = document.getElementById(`paneSkill_${targetTab}`) || document.getElementById(`paneSkill${targetTab.replace(/-([a-z])/g, (g) => g[1].toUpperCase())}`);
            if (targetPane) targetPane.classList.add('active');
        });
    }

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

        // Click handler untuk Website Ini -> Masuk ulang ke website ini
        document.querySelectorAll('.project-card-clickable').forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.closest('a')) return;
                window.location.href = card.getAttribute('data-href') || 'index.html';
            });
        });

        // Click handler untuk On Progress cards & buttons
        document.querySelectorAll('.project-card-onprogress, .onprogress-project-btn').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                showToast('Proyek ini masih dalam tahap pengerjaan (On Progress).', 'info');
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

    // === Discreet Admin Triggers ===
    // 1. Triple-click on logo brand (Ideal for mobile / touch devices)
    const brandEl = document.querySelector('.nav-brand');
    if (brandEl) {
        let brandClickCount = 0;
        let brandClickTimer = null;
        brandEl.addEventListener('click', () => {
            brandClickCount++;
            if (brandClickCount === 3) {
                window.location.href = 'admin.html';
                brandClickCount = 0;
                return;
            }
            clearTimeout(brandClickTimer);
            brandClickTimer = setTimeout(() => {
                brandClickCount = 0;
            }, 1000);
        });
    }

    // 2. Secret URL Query Trigger (e.g. ?panel=1 or ?admin=1)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === '1' || urlParams.get('panel') === '1') {
        window.location.href = 'admin.html';
    }
});

