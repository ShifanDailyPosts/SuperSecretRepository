/**
 * Shifan Games Arcade Hub Logic
 * Strict CSP Compliant (No inline JS)
 * Version 3.0
 */

document.addEventListener('DOMContentLoaded', () => {

    // === 1. MODAL DIALOG HANDLER (GAME 1) ===
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

    // === 2. SCROLLSPY ACTIVE NAV LINK ===
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.arcade-nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, { passive: true });

});
