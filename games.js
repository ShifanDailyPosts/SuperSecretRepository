/**
 * Shifan Games Arcade Hub Logic Engine
 * Strict CSP Compliant (No inline JS)
 * Version 1.0
 */

document.addEventListener('DOMContentLoaded', () => {

    // === 1. MODAL DIALOG HANDLER (GAME 1 / LOCALHOST INFO) ===
    const btnLaunchGame1 = document.getElementById('btnLaunchGame1');
    const btnPreviewCabinet = document.getElementById('btnPreviewCabinet');
    const arcadeModal = document.getElementById('arcadeModal');
    const btnCloseModal = document.getElementById('btnCloseModal');
    const btnModalOk = document.getElementById('btnModalOk');

    const openModal = () => {
        if (arcadeModal) {
            arcadeModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    const closeModal = () => {
        if (arcadeModal) {
            arcadeModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (btnLaunchGame1) btnLaunchGame1.addEventListener('click', openModal);
    if (btnPreviewCabinet) btnPreviewCabinet.addEventListener('click', openModal);
    if (btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
    if (btnModalOk) btnModalOk.addEventListener('click', closeModal);

    if (arcadeModal) {
        arcadeModal.addEventListener('click', (e) => {
            if (e.target === arcadeModal) closeModal();
        });
    }

    // === 2. INTERACTIVE QUIZ ARENA (PERMAINAN KETIGA) ===
    const quizQuestions = [
        {
            q: "Di dalam HTML5, tag manakah yang paling tepat digunakan untuk membungkus area konten utama suatu halaman website?",
            opts: ["A. <div class='content'>", "B. <main>", "C. <section-all>", "D. <body-core>"],
            answer: 1,
            expl: "Tag <main> adalah standar semantik HTML5 untuk konten utama yang unik per halaman."
        },
        {
            q: "Properti CSS mana yang digunakan untuk menghasilkan efek buram kaca transparan (Glassmorphism)?",
            opts: ["A. filter: opacity(50%)", "B. background-blur: 10px", "C. backdrop-filter: blur(...) ", "D. box-shadow: glass"],
            answer: 2,
            expl: "backdrop-filter: blur(...) memberikan efek frosted glass transparan yang estetik."
        },
        {
            q: "Dalam alur Git, perintah manakah yang digunakan untuk mengirim rekaman commit lokal ke repositori online GitHub?",
            opts: ["A. git push origin main", "B. git upload server", "C. git send .", "D. git commit --cloud"],
            answer: 0,
            expl: "git push origin main mengirim riwayat commit dari cabang lokal ke remote GitHub."
        }
    ];

    let currentQuizIndex = 0;
    let quizScore = 0;
    let quizTimer = 15;
    let quizInterval = null;
    let quizLocked = false;

    const quizProgressText = document.getElementById('quizProgressText');
    const quizTimerDisplay = document.getElementById('quizTimerDisplay');
    const quizQuestionText = document.getElementById('quizQuestionText');
    const quizOptionsContainer = document.getElementById('quizOptionsContainer');
    const quizFeedbackBox = document.getElementById('quizFeedbackBox');

    function startQuizTimer() {
        clearInterval(quizInterval);
        quizTimer = 15;
        if (quizTimerDisplay) {
            quizTimerDisplay.innerHTML = `<i class="fa-solid fa-clock"></i> ${quizTimer}s`;
            quizTimerDisplay.style.color = '#fbbf24';
        }

        quizInterval = setInterval(() => {
            quizTimer--;
            if (quizTimerDisplay) {
                quizTimerDisplay.innerHTML = `<i class="fa-solid fa-clock"></i> ${quizTimer}s`;
                if (quizTimer <= 5) quizTimerDisplay.style.color = '#ef4444';
            }

            if (quizTimer <= 0) {
                clearInterval(quizInterval);
                handleQuizAnswer(-1); // Waktu habis
            }
        }, 1000);
    }

    function renderQuizQuestion() {
        quizLocked = false;
        if (!quizQuestionText || !quizOptionsContainer) return;

        if (currentQuizIndex >= quizQuestions.length) {
            // Selesai kuis
            clearInterval(quizInterval);
            if (quizTimerDisplay) quizTimerDisplay.style.display = 'none';
            if (quizProgressText) quizProgressText.textContent = 'Kuis Selesai! 🏆';

            const percentage = Math.round((quizScore / quizQuestions.length) * 100);
            let badgeTitle = 'Mumtaz (Istimewa) 🏆';
            if (percentage < 60) badgeTitle = 'Terus Berlatih 👍';

            quizQuestionText.innerHTML = `Selamat! Skor Kamu: <span style="color: #38bdf8;">${quizScore} / ${quizQuestions.length} (${percentage}%)</span><br><span style="font-size: 1rem; color: #fbbf24;">Predikat: ${badgeTitle}</span>`;

            quizOptionsContainer.innerHTML = `
                <button type="button" class="btn btn-primary" id="btnRestartQuiz" style="grid-column: span 2; width: 100%;">
                    <i class="fa-solid fa-rotate-left"></i> Mainkan Kuis Lagi
                </button>
            `;

            const restartBtn = document.getElementById('btnRestartQuiz');
            if (restartBtn) {
                restartBtn.addEventListener('click', () => {
                    currentQuizIndex = 0;
                    quizScore = 0;
                    if (quizTimerDisplay) quizTimerDisplay.style.display = 'inline-block';
                    renderQuizQuestion();
                });
            }

            if (quizFeedbackBox) quizFeedbackBox.innerHTML = '';
            return;
        }

        const data = quizQuestions[currentQuizIndex];
        if (quizProgressText) {
            quizProgressText.innerHTML = `<i class="fa-solid fa-list-check"></i> Soal ${currentQuizIndex + 1} dari ${quizQuestions.length}`;
        }
        quizQuestionText.textContent = data.q;
        if (quizFeedbackBox) quizFeedbackBox.innerHTML = '';

        quizOptionsContainer.innerHTML = data.opts.map((opt, idx) => `
            <button type="button" class="quiz-option-btn" data-opt="${idx}">
                <span>${opt}</span>
            </button>
        `).join('');

        const optionBtns = quizOptionsContainer.querySelectorAll('.quiz-option-btn');
        optionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const chosenIdx = parseInt(btn.getAttribute('data-opt'), 10);
                handleQuizAnswer(chosenIdx);
            });
        });

        startQuizTimer();
    }

    function handleQuizAnswer(chosenIdx) {
        if (quizLocked) return;
        quizLocked = true;
        clearInterval(quizInterval);

        const data = quizQuestions[currentQuizIndex];
        const optionBtns = quizOptionsContainer.querySelectorAll('.quiz-option-btn');

        if (chosenIdx === data.answer) {
            quizScore++;
            if (optionBtns[chosenIdx]) optionBtns[chosenIdx].classList.add('correct');
            if (quizFeedbackBox) {
                quizFeedbackBox.innerHTML = `<span style="color: #34d399;"><i class="fa-solid fa-circle-check"></i> Jawaban Tepat! ${data.expl}</span>`;
            }
        } else {
            if (chosenIdx >= 0 && optionBtns[chosenIdx]) {
                optionBtns[chosenIdx].classList.add('wrong');
            }
            if (optionBtns[data.answer]) {
                optionBtns[data.answer].classList.add('correct');
            }
            if (quizFeedbackBox) {
                const msg = chosenIdx === -1 ? 'Waktu habis!' : 'Kurang tepat.';
                quizFeedbackBox.innerHTML = `<span style="color: #f87171;"><i class="fa-solid fa-triangle-exclamation"></i> ${msg} ${data.expl}</span>`;
            }
        }

        setTimeout(() => {
            currentQuizIndex++;
            renderQuizQuestion();
        }, 2200);
    }

    renderQuizQuestion();

    // === 3. CYBERSHIELD TYPING DEFENSE ARCADE (PERMAINAN KEEMPAT) ===
    const defenseWords = [
        'sudo', 'deploy', 'python', 'github', 'docker', 'santri',
        'script', 'firewall', 'crypto', 'packet', 'server', 'logic'
    ];

    let typingScore = 0;
    let typingStreak = 0;
    let currentWordIndex = 0;

    const defenseTargetWord = document.getElementById('defenseTargetWord');
    const defenseInputBox = document.getElementById('defenseInputBox');
    const typingScoreDisplay = document.getElementById('typingScoreDisplay');
    const typingStreakDisplay = document.getElementById('typingStreakDisplay');
    const defenseResultMsg = document.getElementById('defenseResultMsg');

    function nextTypingWord() {
        const nextIdx = Math.floor(Math.random() * defenseWords.length);
        currentWordIndex = nextIdx;
        if (defenseTargetWord) {
            defenseTargetWord.textContent = defenseWords[currentWordIndex];
            defenseTargetWord.style.transform = 'scale(1.1)';
            setTimeout(() => {
                if (defenseTargetWord) defenseTargetWord.style.transform = 'scale(1)';
            }, 150);
        }
        if (defenseInputBox) {
            defenseInputBox.value = '';
        }
    }

    if (defenseInputBox) {
        defenseInputBox.addEventListener('input', (e) => {
            const inputVal = defenseInputBox.value.trim().toLowerCase();
            const targetVal = (defenseWords[currentWordIndex] || '').toLowerCase();

            if (inputVal === targetVal) {
                typingScore += 100;
                typingStreak++;

                if (typingScoreDisplay) typingScoreDisplay.textContent = typingScore;
                if (typingStreakDisplay) typingStreakDisplay.textContent = `${typingStreak}x`;

                if (defenseResultMsg) {
                    defenseResultMsg.innerHTML = `<span style="color: #34d399;"><i class="fa-solid fa-bolt"></i> ANCAMAN DIHANCURKAN! +100 Poin</span>`;
                }

                nextTypingWord();
            }
        });
    }

    // === 4. ACTIVE SCROLLSPY FOR ARCADE NAV ===
    const sections = document.querySelectorAll('.game-section, .arcade-hero');
    const navLinks = document.querySelectorAll('.arcade-nav-link');

    window.addEventListener('scroll', () => {
        let currentSecId = '';
        const scrollPos = window.scrollY + 120;

        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
                currentSecId = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSecId}`) {
                link.classList.add('active');
            }
        });
    }, { passive: true });

});
