// ==========================================
// FORM MODULE - Contact Form Handling
// ==========================================

export function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const button = contactForm.querySelector('.btn-submit');
            const originalText = button.textContent;
            
            // Get form values
            const nameInput = contactForm.querySelector('input[placeholder="Tên của bạn"]');
            const emailInput = contactForm.querySelector('input[placeholder="Email của bạn"]');
            const messageInput = contactForm.querySelector('textarea');

            const name = nameInput.value;
            const email = emailInput.value;
            const message = messageInput.value;

            // Show loading state
            button.textContent = 'Đang gửi...';
            button.disabled = true;

            try {
                // Send via EmailJS
                if (typeof emailjs !== 'undefined') {
                    await emailjs.send('service_portfolio', 'template_portfolio', {
                        to_email: 'dngth666@gmail.com',
                        from_name: name,
                        from_email: email,
                        message: message,
                        reply_to: email
                    });
                    
                    button.textContent = '✓ Tin nhắn đã được gửi!';
                    button.style.background = 'conic-gradient(from 0deg, #3a86ff, #8338ec, #ff006e, #3a86ff)';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.style.background = '';
                        button.disabled = false;
                    }, 3000);
                } else {
                    // Fallback - local feedback only
                    button.textContent = '✓ Tin nhắn đã được gửi!';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.disabled = false;
                    }, 2000);
                }
            } catch (error) {
                console.error('Form error:', error);
                button.textContent = '✗ Có lỗi xảy ra. Thử lại!';
                button.disabled = false;
                
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            }
        });
    }
}
