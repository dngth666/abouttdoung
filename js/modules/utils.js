// ==========================================
// UTILS MODULE - Helper Functions
// ==========================================

export function observeElementsForAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and sections
    document.querySelectorAll('.project-card, .skill-group, .glass-card').forEach(element => {
        element.style.opacity = '0';
        observer.observe(element);
    });
}

export function initializeParallaxEffect() {
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollPosition = window.scrollY;
            hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        }
    });
}

export function logInitialization() {
    console.log('🌌 Portfolio Cosmos - All systems initialized!');
}
