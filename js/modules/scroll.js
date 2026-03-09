// ==========================================
// SCROLL MODULE - Planet Fade, Nav Updates
// ==========================================

export function initializeScrollEffects() {
    const planetContainer = document.getElementById('planet');
    const navLinks = document.querySelectorAll('.nav-link');

    // Planet Fade Out on Scroll
    if (planetContainer) {
        window.addEventListener('scroll', () => {
            const scrollProgress = Math.min(window.scrollY / 2000, 1);
            planetContainer.style.opacity = Math.max(1 - scrollProgress, 0);
            
            if (scrollProgress >= 1) {
                planetContainer.classList.add('fade-out');
            } else {
                planetContainer.classList.remove('fade-out');
            }
        });
    }

    // Update Active Nav Link on Scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });

        // Update navbar blur effect on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(0, 0, 0, 0.3)';
        }
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
