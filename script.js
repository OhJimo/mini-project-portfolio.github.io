// Smooth scrolling for navigation links
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

// Active navigation highlight for mobile, tablet, and desktop
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const mobileNavLinks = document.querySelectorAll('.navbar .nav-link');
    const tabletNavLinks = document.querySelectorAll('.tablet-nav-link');
    const sideNavLinks = document.querySelectorAll('.side-nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    // Update mobile nav
    mobileNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // Update tablet nav
    tabletNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // Update side nav
    sideNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact form handling (optional enhancement)
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (name && email && message) {
                // Here you would typically send the data to a server
                alert('메시지가 전송되었습니다! (실제 서버 연결 시 이 부분을 수정해주세요)');
                
                // Reset form
                contactForm.reset();
            } else {
                alert('모든 필드를 입력해주세요.');
            }
        });
    }
});

// Typing animation for hero section
document.addEventListener('DOMContentLoaded', function() {
    const typedElement = document.querySelector('.typed-text');
    
    if (typedElement) {
        const texts = ['풀스택 개발자', '1인 창업가'];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeAnimation() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            // Typing speed
            let typeSpeed = isDeleting ? 100 : 150;
            
            // If word is complete
            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }
            
            setTimeout(typeAnimation, typeSpeed);
        }
        
        // Start typing animation
        setTimeout(typeAnimation, 1000);
    }
});

// Skill progress bar animation on scroll
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        
        if (isVisible && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 200);
        }
    });
}

// Trigger progress bar animation on scroll
window.addEventListener('scroll', animateProgressBars);

// Trigger on load as well
window.addEventListener('load', animateProgressBars);