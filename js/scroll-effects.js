// scroll-effects.js - Header scroll effects for all pages

function initScrollEffects() {
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    function updateHeader() {
        const currentScrollY = window.scrollY;
        
        // Remove all header classes first
        header.classList.remove('scrolled', 'fade-out', 'at-top');
        
        if (currentScrollY === 0) {
            // At the very top
            header.classList.add('at-top');
        } else if (currentScrollY > 100) {
            // Scrolled down - show scrolled state
            header.classList.add('scrolled');
            
            // Add fade-out effect when scrolling down
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                header.classList.add('fade-out');
            }
        }
         
        lastScrollY = currentScrollY;
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

// Initialize scroll effects when DOM is loaded
document.addEventListener('DOMContentLoaded', initScrollEffects);