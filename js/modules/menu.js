// ==========================================
// MENU MODULE - Mobile Menu Toggle
// ==========================================

export function initializeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // ESC key to close menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}
