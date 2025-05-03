let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const scrollThreshold = 50; // Minimum scroll amount before hiding navbar
let isScrolling = false;

window.addEventListener('scroll', () => {
    if (isScrolling) return;
    
    isScrolling = true;
    requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
            // Scrolling down
            navbar.classList.add('hide');
        } else {
            // Scrolling up
            navbar.classList.remove('hide');
        }
        
        lastScrollTop = scrollTop;
        isScrolling = false;
    });
}); 