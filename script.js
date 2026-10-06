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
        heroStats: [
            { icon: "fa-solid fa-graduation-cap", num: "100%", label: "Integritas Keilmuan" },
            { icon: "fa-solid fa-microchip", num: "Modern", label: "Tech & Development" },
            { icon: "fa-solid fa-star", num: "Adiluhung", label: "Nilai Luhur & Agung" }
        ],
        aboutMeaning: "Saya Shifan Shalih Adiluhung — pelajar asal Ciamis, Jawa Barat, yang aktif sebagai santri di Hiraa Center (Rumah Qur'an & Konsultasi). Nama 'Adiluhung' bukan sekadar nama; ia adalah standar hidup — bermakna luhur dan agung dalam bahasa Jawa. Saya membawa nilai itu ke dalam setiap hal yang saya kerjakan, dari hafalan Al-Qur'an hingga baris kode yang saya tulis.",
        aboutEdu: "Saat ini saya aktif menghafal Al-Qur'an di Hiraa Center dan sekaligus membangun keahlian di bidang teknologi web. Salah satu bukti nyata: portofolio yang sedang kamu baca ini — dibangun sendiri dari nol menggunakan HTML, CSS, dan JavaScript, lengkap dengan sistem admin terproteksi dan deployment ke hosting sungguhan. Pencapaian akademis formal: On Progress.",
        aboutVision: "Saya percaya bahwa seorang santri dan seorang developer bisa berjalan beriringan. Tujuan saya adalah membangun karya digital yang tidak hanya fungsional, tapi juga bermakna — memberi manfaat nyata bagi orang di sekitar saya. Bidang spesifik yang ingin saya tekuni lebih dalam: On Progress.",
        aboutFactTitle: "Perpaduan Nilai Tradisi & Inovasi Teknologi",
        aboutFactDesc: "Shifan Shalih Adiluhung mewakili generasi yang memegang teguh etika dan integritas spiritual santri, sembari adaptif dan unggul dalam menguasai ekosistem teknologi digital era modern.",
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

        // Experience
        experiences: [
            {
                id: 1,
                role: "Pengurus OSIS (Sekbid 8 - Komunikasi dalam Bahasa)",
                org: "SMP Quranic Science Boarding School Al-Kautsar 561",
                category: "Kepengurusan OSIS",
                period: "2026 - 2027",
                desc: "Berperan aktif sebagai pengurus OSIS Seksi Bidang 8 (Komunikasi dalam Bahasa), mengoordinasikan program pengembangan bahasa, literasi santri, serta komunikasi multibahasa di lingkungan SMP Quranic Science Boarding School Al-Kautsar 561."
            },
            {
                id: 2,
                role: "Volunteer",
                org: "HiraaCenter",
                category: "Pesantren Liburan Batch 3",
                period: "Pesantren Liburan Batch 3",
                desc: "Berkontribusi aktif sebagai relawan (volunteer) dalam mendukung kelancaran operasional, pendampingan peserta, serta rangkaian kegiatan pembelajaran dan kepesantrenan pada program Pesantren Liburan Batch 3 di HiraaCenter."
            }
        ],

        // Achievements
        achievements: [
            {
                id: 1,
                title: "Pemenang ke-2 Deen Warriors",
                role: "Ketua Kelompok",
                award: "Hadiah Rp 2.500.000",
                desc: "Meraih Juara 2 dalam ajang kompetisi Deen Warriors sekaligus memimpin tim sebagai Ketua Kelompok, dengan perolehan apresiasi hadiah senilai Rp 2.500.000 atas dedikasi dan kerja sama tim yang solid."
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
        ],

        // Finance & Savings (Pengelolaan Keuangan & Tabungan)
        finance: {
            current: 1500000,
            target: 5000000,
            goal: "Tabungan Mandiri, Pendidikan & Alat Belajar",
            notes: "Pengelolaan dana mandiri yang dialokasikan secara disiplin dan terencana untuk menunjang kebutuhan pendidikan, keilmuan, serta perangkat teknologi masa depan.",
            lastUpdated: "Oktober 2026"
        }
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
        if (!siteData.skillCategories || !Array.isArray(siteData.skillCategories) || siteData.skillCategories.length === 0) {
            siteData.skillCategories = defaultSiteData.skillCategories;
        }
        if (!siteData.webDevSkills || !Array.isArray(siteData.webDevSkills) || siteData.webDevSkills.length === 0) {
            siteData.webDevSkills = defaultSiteData.webDevSkills;
        }
        if (!siteData.projects || !Array.isArray(siteData.projects)) siteData.projects = defaultSiteData.projects;
        const isOldExpPlaceholder = siteData.experiences && siteData.experiences.length === 1 && (siteData.experiences[0].org === 'Tahap Pemutakhiran Data' || siteData.experiences[0].role === 'Riwayat & Rekam Jejak Pengalaman');
        if (!siteData.experiences || !Array.isArray(siteData.experiences) || siteData.experiences.length === 0 || isOldExpPlaceholder) {
            siteData.experiences = defaultSiteData.experiences;
        } else {
            const hasOsis = siteData.experiences.some(e => e.role && e.role.toLowerCase().includes('osis'));
            if (!hasOsis) {
                siteData.experiences = [defaultSiteData.experiences[0], ...siteData.experiences];
            }
        }
        const isOldAchPlaceholder = siteData.achievements && siteData.achievements.length === 1 && (siteData.achievements[0].title.includes('On Progress') || siteData.achievements[0].title.includes('Daftar Pencapaian') || siteData.achievements[0].desc.includes('On Progress'));
        if (!siteData.achievements || !Array.isArray(siteData.achievements) || siteData.achievements.length === 0 || isOldAchPlaceholder) {
            siteData.achievements = defaultSiteData.achievements;
        }
        if (!siteData.certificates || !Array.isArray(siteData.certificates)) siteData.certificates = defaultSiteData.certificates;
        if (!siteData.testimonials || !Array.isArray(siteData.testimonials)) siteData.testimonials = defaultSiteData.testimonials;
        if (!siteData.tools || !Array.isArray(siteData.tools)) siteData.tools = defaultSiteData.tools;
        if (!siteData.heroStats || !Array.isArray(siteData.heroStats)) siteData.heroStats = defaultSiteData.heroStats;
        if (!siteData.aboutFactTitle) siteData.aboutFactTitle = defaultSiteData.aboutFactTitle;
        if (!siteData.aboutFactDesc) siteData.aboutFactDesc = defaultSiteData.aboutFactDesc;
        if (!siteData.finance) siteData.finance = defaultSiteData.finance;
        localStorage.setItem('ssa_site_data', JSON.stringify(siteData));
    }

    // Real-time Storage Sync (Updates website live when Admin edits in another tab)
    window.addEventListener('storage', (e) => {
        if (e.key === 'ssa_site_data' && e.newValue) {
            try {
                siteData = migrateSkillsData(JSON.parse(e.newValue));
                if (!siteData.skillCategories || !Array.isArray(siteData.skillCategories) || siteData.skillCategories.length === 0) {
                    siteData.skillCategories = defaultSiteData.skillCategories;
                }
                if (!siteData.webDevSkills || !Array.isArray(siteData.webDevSkills) || siteData.webDevSkills.length === 0) {
                    siteData.webDevSkills = defaultSiteData.webDevSkills;
                }
                if (!siteData.projects || !Array.isArray(siteData.projects)) siteData.projects = defaultSiteData.projects;
                const isOldExpSync = siteData.experiences && siteData.experiences.length === 1 && (siteData.experiences[0].org === 'Tahap Pemutakhiran Data' || siteData.experiences[0].role === 'Riwayat & Rekam Jejak Pengalaman');
                if (!siteData.experiences || !Array.isArray(siteData.experiences) || isOldExpSync) {
                    siteData.experiences = defaultSiteData.experiences;
                } else {
                    const hasOsisSync = siteData.experiences.some(e => e.role && e.role.toLowerCase().includes('osis'));
                    if (!hasOsisSync) {
                        siteData.experiences = [defaultSiteData.experiences[0], ...siteData.experiences];
                    }
                }
                const isOldAchSync = siteData.achievements && siteData.achievements.length === 1 && (siteData.achievements[0].title.includes('On Progress') || siteData.achievements[0].title.includes('Daftar Pencapaian') || siteData.achievements[0].desc.includes('On Progress'));
                if (!siteData.achievements || !Array.isArray(siteData.achievements) || isOldAchSync) {
                    siteData.achievements = defaultSiteData.achievements;
                }
                if (!siteData.certificates || !Array.isArray(siteData.certificates)) siteData.certificates = defaultSiteData.certificates;
                if (!siteData.testimonials || !Array.isArray(siteData.testimonials)) siteData.testimonials = defaultSiteData.testimonials;
                if (!siteData.tools || !Array.isArray(siteData.tools)) siteData.tools = defaultSiteData.tools;
                if (!siteData.heroStats || !Array.isArray(siteData.heroStats)) siteData.heroStats = defaultSiteData.heroStats;
                if (!siteData.aboutFactTitle) siteData.aboutFactTitle = defaultSiteData.aboutFactTitle;
                if (!siteData.aboutFactDesc) siteData.aboutFactDesc = defaultSiteData.aboutFactDesc;
                if (!siteData.finance) siteData.finance = defaultSiteData.finance;

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

        // Hero Stats
        const stats = siteData.heroStats || defaultSiteData.heroStats;
        if (stats && Array.isArray(stats)) {
            if (stats[0]) {
                const elNum = document.getElementById('heroStat1Num');
                const elLabel = document.getElementById('heroStat1Label');
                const elIcon = document.getElementById('heroStat1Icon');
                if (elNum) elNum.textContent = stats[0].num;
                if (elLabel) elLabel.textContent = stats[0].label;
                if (elIcon && stats[0].icon) elIcon.className = stats[0].icon;
            }
            if (stats[1]) {
                const elNum = document.getElementById('heroStat2Num');
                const elLabel = document.getElementById('heroStat2Label');
                const elIcon = document.getElementById('heroStat2Icon');
                if (elNum) elNum.textContent = stats[1].num;
                if (elLabel) elLabel.textContent = stats[1].label;
                if (elIcon && stats[1].icon) elIcon.className = stats[1].icon;
            }
            if (stats[2]) {
                const elNum = document.getElementById('heroStat3Num');
                const elLabel = document.getElementById('heroStat3Label');
                const elIcon = document.getElementById('heroStat3Icon');
                if (elNum) elNum.textContent = stats[2].num;
                if (elLabel) elLabel.textContent = stats[2].label;
                if (elIcon && stats[2].icon) elIcon.className = stats[2].icon;
            }
        }

        // About Narrative
        if (document.getElementById('aboutMeaningText')) document.getElementById('aboutMeaningText').innerHTML = siteData.aboutMeaning || defaultSiteData.aboutMeaning;
        if (document.getElementById('aboutEduText')) document.getElementById('aboutEduText').innerHTML = siteData.aboutEdu || defaultSiteData.aboutEdu;
        if (document.getElementById('aboutVisionText')) document.getElementById('aboutVisionText').innerHTML = siteData.aboutVision || defaultSiteData.aboutVision;

        // About Fact Banner
        if (document.getElementById('aboutFactTitle')) document.getElementById('aboutFactTitle').innerHTML = siteData.aboutFactTitle || defaultSiteData.aboutFactTitle;
        if (document.getElementById('aboutFactDesc')) document.getElementById('aboutFactDesc').innerHTML = siteData.aboutFactDesc || defaultSiteData.aboutFactDesc;

        // Footer Name
        if (document.getElementById('footerCopyrightName')) document.getElementById('footerCopyrightName').textContent = siteData.name;

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
                expContainer.innerHTML = expList.map(e => {
                    const isVolunteer = (e.role && e.role.toLowerCase().includes('volunteer')) || (e.desc && e.desc.toLowerCase().includes('volunteer'));
                    const isOsis = (e.role && e.role.toLowerCase().includes('osis')) || (e.category && e.category.toLowerCase().includes('osis'));
                    let iconClass = 'fa-solid fa-briefcase';
                    if (isVolunteer) iconClass = 'fa-solid fa-hand-holding-heart';
                    else if (isOsis) iconClass = 'fa-solid fa-users-gear';
                    else if (e.period === 'On Progress') iconClass = 'fa-solid fa-hourglass-half';

                    let orgIcon = 'fa-solid fa-building-columns';
                    if (e.org && (e.org.toLowerCase().includes('smp') || e.org.toLowerCase().includes('school'))) orgIcon = 'fa-solid fa-school';
                    else if (e.org && e.org.toLowerCase().includes('hiraa')) orgIcon = 'fa-solid fa-mosque';

                    const categoryHtml = e.category ? `<span class="exp-category-badge"><i class="fa-solid fa-tag"></i> ${e.category}</span>` : '';
                    const periodHtml = e.period ? `<span class="exp-period-badge"><i class="fa-solid fa-calendar-check"></i> ${e.period}</span>` : '';

                    return `
                        <div class="experience-card-item glass-card">
                            <div class="experience-badge-icon">
                                <i class="${iconClass}"></i>
                            </div>
                            <div class="experience-body">
                                <div class="experience-header-meta">
                                    <div>
                                        <h3 class="experience-role-title">${e.role}</h3>
                                        <span class="experience-org-title"><i class="${orgIcon}"></i> ${e.org}</span>
                                    </div>
                                    <div class="experience-meta-tags">
                                        ${categoryHtml}
                                        ${periodHtml}
                                    </div>
                                </div>
                                <p class="experience-desc">${e.desc}</p>
                            </div>
                        </div>
                    `;
                }).join('');
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
                achContainer.innerHTML = achList.map(a => {
                    const isWin2 = (a.title && (a.title.toLowerCase().includes('ke-2') || a.title.toLowerCase().includes('ke 2') || a.title.toLowerCase().includes('juara 2')));
                    const badges = [];
                    if (isWin2) {
                        badges.push(`<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); font-size: 0.75rem; padding: 0.2rem 0.65rem; border-radius: 20px; font-weight: 700;"><i class="fa-solid fa-medal"></i> Juara 2</span>`);
                    } else if (a.badge) {
                        badges.push(`<span class="badge" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.3); font-size: 0.75rem; padding: 0.2rem 0.65rem; border-radius: 20px; font-weight: 700;"><i class="fa-solid fa-medal"></i> ${a.badge}</span>`);
                    }
                    if (a.role) {
                        badges.push(`<span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3); font-size: 0.75rem; padding: 0.2rem 0.65rem; border-radius: 20px; font-weight: 700;"><i class="fa-solid fa-crown"></i> ${a.role}</span>`);
                    }
                    if (a.award) {
                        badges.push(`<span class="badge" style="background: rgba(6, 182, 212, 0.15); color: #38bdf8; border: 1px solid rgba(6, 182, 212, 0.3); font-size: 0.75rem; padding: 0.2rem 0.65rem; border-radius: 20px; font-weight: 700;"><i class="fa-solid fa-gift"></i> ${a.award}</span>`);
                    }
                    const badgesHtml = badges.length > 0 ? `<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 0.75rem;">${badges.join('')}</div>` : '';

                    return `
                        <div class="achieve-card glass-card">
                            <div class="achieve-icon" style="color: #fbbf24; background: rgba(245, 158, 11, 0.15);"><i class="fa-solid fa-trophy"></i></div>
                            ${badgesHtml}
                            <h3>${a.title}</h3>
                            <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6; margin-top: 0.35rem;">${a.desc}</p>
                        </div>
                    `;
                }).join('');
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

        // 11. Finance & Savings (Pengelolaan Keuangan & Tabungan)
        const finData = siteData.finance || defaultSiteData.finance;
        if (finData) {
            const formatRp = (val) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val || 0);
            const currentVal = parseFloat(finData.current) || 0;
            const targetVal = parseFloat(finData.target) || 1;
            const pct = Math.min(100, Math.round((currentVal / targetVal) * 100));

            const goalEl = document.getElementById('savingsGoalDisplay');
            if (goalEl) goalEl.textContent = finData.goal || 'Tabungan Mandiri & Pendidikan';

            const amountEl = document.getElementById('savingsAmountDisplay');
            if (amountEl) amountEl.textContent = formatRp(currentVal);

            const targetEl = document.getElementById('savingsTargetDisplay');
            if (targetEl) targetEl.textContent = formatRp(targetVal);

            const pctEl = document.getElementById('savingsPercentDisplay');
            if (pctEl) pctEl.textContent = `${pct}%`;

            const lastUpdatedEl = document.getElementById('savingsLastUpdatedDisplay');
            if (lastUpdatedEl) lastUpdatedEl.textContent = finData.lastUpdated || '-';

            const pctTextEl = document.getElementById('savingsPercentText');
            if (pctTextEl) pctTextEl.textContent = `${pct}% Tercapai`;

            const fillEl = document.getElementById('savingsProgressFill');
            if (fillEl) fillEl.style.width = `${pct}%`;

            const notesEl = document.getElementById('savingsNotesDisplay');
            if (notesEl) notesEl.textContent = finData.notes || 'Pengelolaan dana mandiri yang dialokasikan secara disiplin dan terencana.';
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

    // === 11. ASISFAN: AI ASSISTANT CHAT ENGINE ===
    const asisfanWidget = document.getElementById('asisfanWidget');
    const asisfanTriggerBtn = document.getElementById('asisfanTriggerBtn');
    const asisfanChatWindow = document.getElementById('asisfanChatWindow');
    const asisfanCloseBtn = document.getElementById('asisfanCloseBtn');
    const asisfanClearBtn = document.getElementById('asisfanClearBtn');
    const asisfanForm = document.getElementById('asisfanForm');
    const asisfanInput = document.getElementById('asisfanInput');
    const asisfanMessages = document.getElementById('asisfanMessages');
    const asisfanSuggestions = document.getElementById('asisfanSuggestions');

    if (asisfanWidget && asisfanTriggerBtn && asisfanChatWindow) {
        // Toggle Chat Window
        const toggleChatWindow = (open) => {
            const shouldOpen = (open !== undefined) ? open : !asisfanChatWindow.classList.contains('active');
            if (shouldOpen) {
                asisfanChatWindow.classList.add('active');
                setTimeout(() => { if (asisfanInput) asisfanInput.focus(); }, 200);
            } else {
                asisfanChatWindow.classList.remove('active');
            }
        };

        asisfanTriggerBtn.addEventListener('click', () => toggleChatWindow());
        if (asisfanCloseBtn) asisfanCloseBtn.addEventListener('click', () => toggleChatWindow(false));

        // Format Rupiah Helper
        const formatRupiah = (val) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(val || 0);

        // Escape HTML for user input
        const escapeHtml = (str) => {
            const div = document.createElement('div');
            div.textContent = str;
            return div.innerHTML;
        };

        const getCurrentTime = () => {
            const now = new Date();
            return now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
        };

        // Scroll to bottom
        const scrollToBottom = () => {
            if (asisfanMessages) {
                asisfanMessages.scrollTop = asisfanMessages.scrollHeight;
            }
        };

        // Add message to chat stream
        const appendMessage = (sender, contentHtml) => {
            const msgEl = document.createElement('div');
            msgEl.className = `asisfan-msg asisfan-msg-${sender}`;

            const timeStr = getCurrentTime();

            if (sender === 'bot') {
                msgEl.innerHTML = `
                    <div class="asisfan-header-avatar" style="width: 30px; height: 30px; font-size: 0.95rem; flex-shrink: 0;">
                        <i class="fa-solid fa-robot"></i>
                    </div>
                    <div>
                        <div class="asisfan-msg-bubble">${contentHtml}</div>
                        <span class="asisfan-msg-time">${timeStr}</span>
                    </div>
                `;
            } else {
                msgEl.innerHTML = `
                    <div>
                        <div class="asisfan-msg-bubble">${contentHtml}</div>
                        <span class="asisfan-msg-time">${timeStr}</span>
                    </div>
                `;
            }

            asisfanMessages.appendChild(msgEl);
            scrollToBottom();
            return msgEl;
        };

        // Show Typing Indicator
        const showTypingIndicator = () => {
            const typingEl = document.createElement('div');
            typingEl.className = 'asisfan-msg asisfan-msg-bot asisfan-typing-row';
            typingEl.id = 'asisfanTypingIndicator';
            typingEl.innerHTML = `
                <div class="asisfan-header-avatar" style="width: 30px; height: 30px; font-size: 0.95rem; flex-shrink: 0;">
                    <i class="fa-solid fa-robot"></i>
                </div>
                <div class="asisfan-typing">
                    <span class="asisfan-dot"></span>
                    <span class="asisfan-dot"></span>
                    <span class="asisfan-dot"></span>
                </div>
            `;
            asisfanMessages.appendChild(typingEl);
            scrollToBottom();
        };

        const hideTypingIndicator = () => {
            const typingEl = document.getElementById('asisfanTypingIndicator');
            if (typingEl) typingEl.remove();
        };

        // AI Answer Generator based on live siteData
        const generateAsisFanAnswer = (query) => {
            const q = query.toLowerCase().trim();
            const data = siteData || defaultSiteData;

            // 1. Sapaan / Greetings
            if (/^(halo|hai|assalamu|assalam|hei|hey|pagi|siang|sore|malam|tes|test|ping)/.test(q)) {
                return `Wa'alaikumsalam warahmatullahi wabarakatuh! 👋<br><br>Halo! Senang sekali bisa berbincang denganmu. Saya <strong>AsisFan</strong>, asisten AI pribadi Shifan Shalih Adiluhung. Ada hal seputar profil, keahlian coding, rekam jejak OSIS/volunteer, atau proyek Shifan yang ingin kamu tanyakan? 😊`;
            }

            // 2. Siapa Shifan / Profil / Tentang / Biodata
            if (q.includes('siapa') || q.includes('tentang') || q.includes('profil') || q.includes('biodata') || q.includes('nama') || q.includes('adiluhung') || q.includes('asal') || q.includes('ciamis') || q.includes('arti nama')) {
                return `<strong>${data.name}</strong> adalah seorang pelajar asal <strong>Ciamis, Jawa Barat</strong> yang saat ini aktif sebagai santri penghafal Al-Qur'an di <strong>Hiraa Center (Rumah Qur'an & Konsultasi)</strong> sekaligus berdedikasi membangun keahlian teknologi web modern. 🌟<br><br>
                Makna nama <em>'Adiluhung'</em> diambil dari bahasa Jawa/Indonesia yang berarti <strong>Luhur, Agung, dan Bernilai Tinggi</strong>. Nama ini menjadi pedoman Shifan dalam menjaga integritas moral santri dan menghasilkan karya berkualitas tinggi di ranah teknologi.`;
            }

            // 3. OSIS / Sekolah / SMP / Al-Kautsar 561
            if (q.includes('osis') || q.includes('sekbid') || q.includes('al-kautsar') || q.includes('561') || q.includes('smp') || q.includes('sekolah') || q.includes('bahasa')) {
                const osisExp = data.experiences ? data.experiences.find(e => e.role.toLowerCase().includes('osis') || e.org.toLowerCase().includes('kautsar')) : null;
                const role = osisExp ? osisExp.role : "Pengurus OSIS (Sekbid 8 - Komunikasi dalam Bahasa)";
                const org = osisExp ? osisExp.org : "SMP Quranic Science Boarding School Al-Kautsar 561";
                const period = osisExp ? osisExp.period : "2026 - 2027";
                const desc = osisExp ? osisExp.desc : "Mengkoordinasikan program kebahasaan dan literasi santri.";

                return `🏫 <strong>Aktivitas Kepengurusan Sekolah:</strong><br><br>
                Shifan dipercaya menjadi <strong>${role}</strong> untuk masa bakti <strong>${period}</strong> di <strong>${org}</strong>.<br><br>
                📌 <em>Peran utama</em>: ${desc}`;
            }

            // 4. Volunteer / HiraaCenter / Pesantren Liburan
            if (q.includes('volunteer') || q.includes('relawan') || q.includes('hiraa') || q.includes('pesantren liburan') || q.includes('batch 3')) {
                const volExp = data.experiences ? data.experiences.find(e => e.role.toLowerCase().includes('volunteer') || e.org.toLowerCase().includes('hiraa')) : null;
                const org = volExp ? volExp.org : "HiraaCenter";
                const cat = volExp && volExp.category ? volExp.category : "Pesantren Liburan Batch 3";
                const desc = volExp ? volExp.desc : "Berkontribusi mendukung kelancaran kegiatan santri liburan.";

                return `🤝 <strong>Pengalaman Relawan (Volunteer):</strong><br><br>
                Shifan aktif menjadi relawan (volunteer) pada program <strong>${cat}</strong> di <strong>${org}</strong>.<br><br>
                📌 <em>Kontribusi</em>: ${desc}`;
            }

            // 5. Seluruh Pengalaman / Experience / Karir
            if (q.includes('pengalaman') || q.includes('experience') || q.includes('organisasi') || q.includes('karir') || q.includes('kegiatan')) {
                const exps = data.experiences || [];
                if (exps.length === 0) {
                    return `Data pengalaman Shifan saat ini sedang dalam proses pemutakhiran resmi (On Progress).`;
                }
                let listHtml = exps.map(e => `• <strong>${e.role}</strong> di <em>${e.org}</em> (${e.period})<br>&nbsp;&nbsp;↳ <small style="opacity:0.9;">${e.desc}</small>`).join('<br><br>');
                return `📋 <strong>Rekam Jejak Pengalaman Shifan:</strong><br><br>${listHtml}`;
            }

            // 6. Skill / Kemampuan / Bahasa Pemrograman / Tech Stack
            if (q.includes('skill') || q.includes('kemampuan') || q.includes('keahlian') || q.includes('coding') || q.includes('program') || q.includes('bahasa pemrograman') || q.includes('html') || q.includes('css') || q.includes('javascript') || q.includes('python')) {
                const webSkills = data.webDevSkills || [];
                let skillList = webSkills.map(s => `• <strong>${s.name}</strong> — status: <span style="color:var(--text-gold); font-weight:600;">${s.statusText || 'Aktif Dipelajari'}</span>`).join('<br>');
                return `⚡ <strong>Keahlian & Penguasaan Teknologi Shifan:</strong><br><br>
                Shifan berfokus pada teknologi web modern dan pemrograman:<br>${skillList || '• HTML5, CSS3, JavaScript ES6+, Python'}<br><br>
                Teknologi pendukung harian: Git & GitHub, VS Code, LocalStorage API, Responsive Grid/Flexbox, dan FTP Hosting Deployment.`;
            }

            // 7. Proyek / Project / Karya / Portofolio
            if (q.includes('proyek') || q.includes('project') || q.includes('karya') || q.includes('portofolio') || q.includes('bikin apa') || q.includes('buat apa')) {
                const projs = data.projects || [];
                let projList = projs.slice(0, 3).map(p => `• <strong>${p.title}</strong> (${p.category})<br>&nbsp;&nbsp;↳ <small style="opacity:0.9;">${p.desc}</small>`).join('<br><br>');
                return `🚀 <strong>Proyek & Portofolio Karya Shifan:</strong><br><br>
                ${projList}<br><br>
                Website portofolio yang sedang kamu buka ini adalah bukti nyata karya Shifan yang dibangun dari nol!`;
            }

            // 8. Tabungan / Keuangan / Duit / Finansial
            if (q.includes('tabung') || q.includes('uang') || q.includes('duit') || q.includes('keuangan') || q.includes('finansial') || q.includes('biaya') || q.includes('target tabung') || q.includes('terkumpul')) {
                const fin = data.finance || { current: 1500000, target: 5000000, goal: "Tabungan Mandiri & Pendidikan", notes: "Pengelolaan terencana.", lastUpdated: "Oktober 2026" };
                const pct = Math.min(100, Math.round(((fin.current || 0) / (fin.target || 1)) * 100));
                return `💰 <strong>Status Pengelolaan Keuangan & Tabungan Shifan:</strong><br><br>
                • <strong>Uang Terkumpul</strong>: <span style="color:#10b981; font-weight:700;">${formatRupiah(fin.current)}</span><br>
                • <strong>Target Tabungan</strong>: ${formatRupiah(fin.target)} (${pct}% tercapai)<br>
                • <strong>Tujuan Alokasi</strong>: ${fin.goal}<br>
                • <strong>Pembaruan Terakhir</strong>: ${fin.lastUpdated}<br><br>
                💬 <em>Catatan</em>: "${fin.notes}"`;
            }

            // 9. Prestasi / Pencapaian / Deen Warriors / Juara / Sertifikat
            if (q.includes('prestasi') || q.includes('pencapaian') || q.includes('achievement') || q.includes('deen') || q.includes('warrior') || q.includes('juara') || q.includes('menang') || q.includes('hadiah') || q.includes('sertifikat') || q.includes('certificate')) {
                const achs = data.achievements || [];
                const validAchs = achs.filter(a => a && !a.title.includes('On Progress') && !a.desc.includes('On Progress'));
                if (validAchs.length > 0) {
                    let achListHtml = validAchs.map(a => {
                        let badgeInfo = [];
                        if (a.role) badgeInfo.push(`Peran: ${a.role}`);
                        if (a.award) badgeInfo.push(`Hadiah: ${a.award}`);
                        const meta = badgeInfo.length > 0 ? ` (${badgeInfo.join(' | ')})` : '';
                        return `🏆 <strong>${a.title}</strong>${meta}<br>&nbsp;&nbsp;↳ <small style="opacity:0.9;">${a.desc}</small>`;
                    }).join('<br><br>');

                    return `🏆 <strong>Prestasi & Pencapaian Shifan:</strong><br><br>
                    ${achListHtml}<br><br>
                    ✨ Shifan sukses meraih <strong>Juara 2 (Pemenang ke-2) Deen Warriors</strong> sekaligus memimpin tim sebagai <strong>Ketua Kelompok</strong> dengan apresiasi hadiah sebesar <strong>Rp 2.500.000</strong>!`;
                }

                return `🏆 <strong>Prestasi & Capaian Shifan:</strong><br><br>
                Shifan telah menorehkan prestasi membanggakan sebagai <strong>Juara 2 Deen Warriors</strong> dengan peran sebagai <strong>Ketua Kelompok</strong> dan mendapatkan hadiah senilai <strong>Rp 2.500.000 (2,5 Juta)</strong>! 🌟<br><br>
                Untuk sertifikat resmi lainnya saat ini sedang dalam proses pendataan dan verifikasi (<em>On Progress</em>). Shifan terus bersemangat menuntut ilmu dan berkarya!`;
            }

            // 10. Kontak / Hubungi / Email / Medsos / Sosmed
            if (q.includes('kontak') || q.includes('hubungi') || q.includes('email') || q.includes('instagram') || q.includes('github') || q.includes('linkedin') || q.includes('sosmed') || q.includes('medsos') || q.includes('wa') || q.includes('telepon')) {
                return `📬 <strong>Informasi Kontak & Media Sosial Shifan:</strong><br><br>
                • 📧 <strong>Email Resmi</strong>: <a href="mailto:${data.contactEmail}">${data.contactEmail}</a><br>
                • 📍 <strong>Domisili</strong>: ${data.contactLocation}<br>
                • 🐙 <strong>GitHub</strong>: <a href="${data.githubUrl}" target="_blank" rel="noopener">Kunjungi GitHub</a><br>
                • 💼 <strong>LinkedIn</strong>: <a href="${data.linkedinUrl}" target="_blank" rel="noopener">Profil LinkedIn</a><br>
                • 📸 <strong>Instagram</strong>: <a href="${data.instagramUrl}" target="_blank" rel="noopener">Kunjungi Instagram</a><br><br>
                Kamu juga bisa mengirim pesan langsung melalui formulir kontak di bagian bawah website!`;
            }

            // 11. Pujian / Ucapan Terima Kasih
            if (q.includes('terima kasih') || q.includes('makasih') || q.includes('thanks') || q.includes('keren') || q.includes('mantap') || q.includes('hebat') || q.includes('bagus') || q.includes('alhamdulillah')) {
                return `Alhamdulillah, terima kasih banyak atas apresiasi dan doa baiknya! 🙏✨ Semoga keberkahan dan kesuksesan selalu menyertaimu. Jika ada hal lain yang ingin kamu tanyakan seputar Shifan, silakan beri tahu saya ya!`;
            }

            // 12. Identitas AsisFan
            if (q.includes('kamu siapa') || q.includes('asisfan') || q.includes('siapa kamu') || q.includes('asisten')) {
                return `Saya adalah <strong>AsisFan</strong>, asisten virtual berbasis kecerdasan buatan (AI) yang dirancang khusus untuk memandu dan menjawab pertanyaan pengunjung portofolio Shifan Shalih Adiluhung secara interaktif dan informatif! 🤖✨`;
            }

            // 13. Default Smart Fallback
            return `Terima kasih atas pertanyaannya! 🤔<br><br>
            Sebagai asisten AI, saya siap membantu menjawab seputar Shifan Shalih Adiluhung, antara lain:<br>
            • 💡 <strong>Profil & Makna Filosofis Nama Adiluhung</strong><br>
            • ⚡ <strong>Skill & Penguasaan Bahasa Pemrograman</strong><br>
            • 🏫 <strong>Pengalaman OSIS Sekbid 8 di SMP Al-Kautsar 561</strong><br>
            • 🤝 <strong>Pengalaman Volunteer di HiraaCenter</strong><br>
            • 💰 <strong>Transparansi Tabungan & Target Keuangan</strong><br>
            • 📬 <strong>Alamat Kontak & Media Sosial</strong><br><br>
            Silakan klik salah satu topik di atas atau tuliskan pertanyaan spesifikmu! 😊`;
        };

        // Handle user sending message
        const handleSendMessage = (text) => {
            const trimmed = text.trim();
            if (!trimmed) return;

            // Render user bubble
            appendMessage('user', escapeHtml(trimmed));
            if (asisfanInput) asisfanInput.value = '';

            // Hide suggestions to keep view clean
            if (asisfanSuggestions) {
                asisfanSuggestions.style.display = 'none';
            }

            // Show typing indicator
            showTypingIndicator();

            // Simulate natural AI thinking delay (450 - 750ms)
            const delay = Math.min(750, Math.max(450, trimmed.length * 15));
            setTimeout(() => {
                hideTypingIndicator();
                const replyHtml = generateAsisFanAnswer(trimmed);
                appendMessage('bot', replyHtml);
            }, delay);
        };

        if (asisfanForm) {
            asisfanForm.addEventListener('submit', (e) => {
                e.preventDefault();
                if (asisfanInput) handleSendMessage(asisfanInput.value);
            });
        }

        // Handle Suggestion Chips click
        const bindSuggestionChips = () => {
            document.querySelectorAll('.asisfan-chip').forEach(chip => {
                chip.onclick = () => {
                    const query = chip.getAttribute('data-query') || chip.textContent;
                    handleSendMessage(query);
                };
            });
        };
        bindSuggestionChips();

        // Clear Chat History
        if (asisfanClearBtn) {
            asisfanClearBtn.addEventListener('click', () => {
                asisfanMessages.innerHTML = `
                    <div class="asisfan-msg asisfan-msg-bot">
                        <div class="asisfan-header-avatar" style="width: 30px; height: 30px; font-size: 0.95rem; flex-shrink: 0;">
                            <i class="fa-solid fa-robot"></i>
                        </div>
                        <div>
                            <div class="asisfan-msg-bubble">
                                Riwayat percakapan telah dibersihkan! 🧹<br><br>
                                Ada yang ingin kamu tanyakan lagi kepada <strong>AsisFan</strong> tentang profil atau karya Shifan?
                            </div>
                            <span class="asisfan-msg-time">${getCurrentTime()}</span>
                        </div>
                    </div>
                    <div class="asisfan-suggestions" id="asisfanSuggestions">
                        <button type="button" class="asisfan-chip" data-query="Siapa itu Shifan Shalih Adiluhung?">💡 Siapa itu Shifan?</button>
                        <button type="button" class="asisfan-chip" data-query="Apa saja keahlian dan skill yang dikuasai Shifan?">⚡ Skill &amp; Kemampuan</button>
                        <button type="button" class="asisfan-chip" data-query="Apa saja pengalaman organisasi dan kepengurusan Shifan?">💼 Pengalaman &amp; OSIS</button>
                        <button type="button" class="asisfan-chip" data-query="Proyek dan karya apa yang sudah dibuat Shifan?">🚀 Proyek &amp; Karya</button>
                        <button type="button" class="asisfan-chip" data-query="Berapa uang yang sedang ditabung Shifan saat ini?">💰 Tabungan &amp; Keuangan</button>
                        <button type="button" class="asisfan-chip" data-query="Bagaimana cara menghubungi atau kontak Shifan?">📩 Kontak &amp; Medsos</button>
                    </div>
                `;
                bindSuggestionChips();
                showToast("Percakapan dengan AsisFan dibersihkan.", "info");
            });
        }
    }
});

