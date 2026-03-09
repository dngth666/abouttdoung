// ==========================================
// CANVAS MODULE - Starfield & Shooting Stars
// ==========================================

class Star {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 1.2;
        this.opacity = Math.random() * 0.3 + 0.2;
        this.twinkleSpeed = Math.random() * 0.006 + 0.003;
        this.direction = Math.random() > 0.5 ? 1 : -1;
    }

    draw(ctx) {
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
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = Math.random() * 4 + 2;
        this.vy = Math.random() * 3 + 2;
        this.length = Math.random() * 50 + 30;
        this.opacity = Math.random() * 0.4 + 0.1;
        this.angle = Math.atan2(this.vy, this.vx);
        this.life = 0;
        this.maxLife = Math.random() * 300 + 200;
    }

    draw(ctx) {
        ctx.save();
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

export function initializeStarfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const stars = [];
    const shootingStars = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    for (let i = 0; i < 500; i++) {
        stars.push(new Star(canvas));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw and update stars
        stars.forEach(star => {
            star.update();
            star.draw(ctx);
        });

        // Create random shooting stars
        if (Math.random() < 0.012) {
            shootingStars.push(new ShootingStar(canvas));
        }

        // Draw and update shooting stars
        shootingStars.forEach((star, index) => {
            star.update();
            star.draw(ctx);

            if (!star.isAlive()) {
                shootingStars.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
}
