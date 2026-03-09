// ==========================================
// PORTFOLIO COSMOS - JavaScript Functions
// ==========================================

// 1. MOBILE MENU TOGGLE
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
}

// 1.5 PLANET FADE OUT ON SCROLL
const planetContainer = document.getElementById('planet');
if (planetContainer) {
    window.addEventListener('scroll', () => {
        // Tính toán độ mờ dần dựa trên vị trí scroll
        // Khi scrollY > 200px, bắt đầu mờ dần
        const scrollProgress = Math.min(window.scrollY / 2000, 1);
        planetContainer.style.opacity = Math.max(1 - scrollProgress, 0);
        
        // Thêm class fade-out khi hoàn toàn mờ
        if (scrollProgress >= 1) {
            planetContainer.classList.add('fade-out');
        } else {
            planetContainer.classList.remove('fade-out');
        }
    });
}

// 2. SMOOTH SCROLLING
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

// 3. UPDATE ACTIVE NAV LINK ON SCROLL
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
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

// 4. STARFIELD / SHOOTING STARS ANIMATION
const canvas = document.getElementById('starfield');
if (canvas) {
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star particles
    const stars = [];
    const shootingStars = [];

    // Star particles class
    class Star {
        constructor() {
            this.x = Math.random() * canvas.width;
            // Rải rác sao khắp nơi trên toàn bộ màn hình, kể cả khu vực tối
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 1.2;
            this.opacity = Math.random() * 0.3 + 0.2;
            // Nhấp nháy chậm hơn, nhẹ nhàng hơn
            this.twinkleSpeed = Math.random() * 0.006 + 0.003;
            this.direction = Math.random() > 0.5 ? 1 : -1;
        }

        draw() {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }

        update() {
            this.opacity += this.twinkleSpeed * this.direction;
            if (this.opacity >= 0.9 || this.opacity <= 0.1) {
                this.direction *= -1;
            }
        }
    }

    class ShootingStar {
        constructor() {
            this.x = Math.random() * canvas.width;
            // Rải rác sao băng khắp nơi, không chỉ khu vực trên
            this.y = Math.random() * canvas.height;
            this.vx = Math.random() * 4 + 2;
            this.vy = Math.random() * 3 + 2;
            this.length = Math.random() * 50 + 30;
            this.opacity = Math.random() * 0.4 + 0.1;
            this.angle = Math.atan2(this.vy, this.vx);
            this.life = 0;
            this.maxLife = Math.random() * 300 + 200;
        }

        draw() {
            ctx.save();
            // Sao băng màu trắng tinh khiết thay vì màu đỏ
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';

            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(
                this.x - Math.cos(this.angle) * this.length,
                this.y - Math.sin(this.angle) * this.length
            );
            ctx.stroke();

            // Glow effect cho sao băng trắng
            ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity * 0.3})`;
            ctx.lineWidth = 4;
            ctx.stroke();

            ctx.restore();
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.life++;
            this.opacity = 0.35 - (this.life / this.maxLife);
        }

        isAlive() {
            return this.life < this.maxLife;
        }
    }

    // Initialize stars - Tăng số lượng sao để tạo cảm giác bao la
    for (let i = 0; i < 500; i++) {
        stars.push(new Star());
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw and update stars
        stars.forEach(star => {
            star.update();
            star.draw();
        });

        // Create random shooting stars - Xuất hiện ít thường xuyên hơn để tinh tế
        if (Math.random() < 0.012) {
            shootingStars.push(new ShootingStar());
        }

        // Draw and update shooting stars
        shootingStars.forEach((star, index) => {
            star.update();
            star.draw();

            if (!star.isAlive()) {
                shootingStars.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// 5. OBSERVE ELEMENTS FOR ANIMATION
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

// 6. CONTACT FORM HANDLING
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const inputs = contactForm.querySelectorAll('input, textarea');
        const formData = new FormData();
        
        inputs.forEach(input => {
            formData.append(input.name || input.placeholder, input.value);
        });

        // Simulate form submission
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // Show feedback
        const button = contactForm.querySelector('.btn-submit');
        const originalText = button.textContent;
        button.textContent = 'Tin nhắn đã được gửi!';
        button.style.background = 'conic-gradient(from 0deg, #3a86ff, #8338ec, #ff006e, #3a86ff)';
        
        // Reset form
        contactForm.reset();
        
        // Restore button after 2 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 2000);
    });
}

// 7. PARALLAX EFFECT (Optional enhancement)
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// 8. KEYBOARD NAVIGATION
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

console.log('🌌 Portfolio Cosmos - All systems initialized!');
