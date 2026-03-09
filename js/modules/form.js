// ==========================================
// FORM MODULE - Contact Form Handling (Web3Forms)
// ==========================================

export function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const button = contactForm.querySelector('.btn-submit');
            const originalText = button.textContent;
            
            // Show loading state
            button.textContent = 'Đang gửi...';
            button.disabled = true;

            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            try {
                // Send via Web3Forms API
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                });
                
                const result = await response.json();

                if (response.status == 200) {
                    button.textContent = '✓ Tin nhắn đã được gửi!';
                    button.style.background = 'conic-gradient(from 0deg, #3a86ff, #8338ec, #ff006e, #3a86ff)';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.style.background = '';
                        button.disabled = false;
                    }, 3000);
                } else {
                    console.log(response);
                    button.textContent = '✗ Gửi thất bại. Thử lại!';
                    button.disabled = false;
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                    }, 2000);
                }
            } catch (error) {
                console.error('Form error:', error);
                button.textContent = '✗ Có lỗi mạng kết nối. Thử lại!';
                button.disabled = false;
                
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            }
        });
    }
}
