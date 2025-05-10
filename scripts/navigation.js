document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector("header");
    const toggleButton = document.querySelector('.nav-toggleBtn');
    const navMenu = document.querySelector('nav');

    toggleButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        toggleButton.classList.toggle('open');
    });
    
    function hideHeader() {
        // Hide header on scroll down, show on scroll up
        let lastScroll = 0;
        const scrollThreshold = 100; // How far to scroll before hiding
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            // Don't hide if mobile menu is open
            if (navMenu.classList.contains('active')) return;
            
            if (currentScroll <= 0) {
                // At top of page
                header.classList.remove(':hide');
                navMenu.classList.remove(':hide');
                return;
            }
            
            if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
                // Scrolling down
                header.classList.add('hide');
                navMenu.classList.add('hide');
            } else if (currentScroll < lastScroll) {
                // Scrolling up
                header.classList.remove('hide');
                navMenu.classList.remove('hide');
            }
            
            lastScroll = currentScroll;
        });
    }
    hideHeader();
    
    function closeNavMenu() {
        // Close menu when clicking outside (for mobile)
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || toggleButton.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                toggleButton.classList.remove('open');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a link (for mobile)
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    toggleButton.classList.remove('open');
                    navMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
    }
    closeNavMenu()
});
