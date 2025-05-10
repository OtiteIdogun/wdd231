// navigation.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.nav-toggle-btn');
    const navMenu = document.querySelector('nav');
    
    // Toggle mobile menu
    toggleBtn.addEventListener('click', function() {
        // toggleBtn.textContent = "";
        navMenu.classList.toggle('active');
        // toggleBtn.classList.toggle('close');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
            navMenu.classList.remove('active');
            toggleBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on link click (mobile)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                toggleBtn.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Hide header on scroll down
    let lastScroll = 0;
    const header = document.querySelector('header');
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('hide');
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > scrollThreshold && !navMenu.classList.contains('active')) {
            header.classList.add('hide');
        } else if (currentScroll < lastScroll) {
            header.classList.remove('hide');
        }
        
        lastScroll = currentScroll;
    });
});
