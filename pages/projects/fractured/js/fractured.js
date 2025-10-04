// fractured.js - Fractured Project Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
    initScrollEffects();
    initSmoothScrolling();
    initGlitchEffects();
});

// Carousel Functionality
function initCarousel() {
    const track = document.getElementById('carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (!track || slides.length === 0) return;
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function updateCarousel() {
        const translateX = -currentSlide * 100;
        track.style.transform = `translateX(${translateX}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        if (currentSlide >= totalSlides) currentSlide = 0;
        if (currentSlide < 0) currentSlide = totalSlides - 1;
        updateCarousel();
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
        else if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    });
    
    // Touch/swipe support
    let startX = 0;
    let isDragging = false;
    
    track.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });
    
    track.addEventListener('touchend', e => {
        if (!isDragging) return;
        
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;
        
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) goToSlide(currentSlide + 1);
            else goToSlide(currentSlide - 1);
        }
        
        isDragging = false;
    });
}

// Scroll Effects
function initScrollEffects() {
    const header = document.getElementById('header');
    const gameInfo = document.getElementById('game-info');
    const showcaseItems = document.querySelectorAll('.showcase-item');
    
    window.addEventListener('scroll', function() {
        // Header effect
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Game info sidebar
        if (gameInfo) {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            if (scrollY > windowHeight * 0.5 && scrollY < documentHeight - windowHeight - 200) {
                gameInfo.style.opacity = '1';
                gameInfo.style.visibility = 'visible';
            } else {
                gameInfo.style.opacity = '0';
                gameInfo.style.visibility = 'hidden';
            }
        }
        
        // Showcase items parallax
        showcaseItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
                item.style.transform = `translateY(${scrollPercent * 20}px)`;
            }
        });
    });
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Glitch Effects
function initGlitchEffects() {
    const heroTitle = document.querySelector('.hero-title');
    
    if (!heroTitle) return;
    
    function createGlitchEffect() {
        const glitchDuration = Math.random() * 100 + 50;
        const glitchInterval = Math.random() * 3000 + 2000;
        
        heroTitle.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
        heroTitle.style.textShadow = `
            ${Math.random() * 4 - 2}px 0 rgba(255,0,0,0.5),
            ${Math.random() * -4 + 2}px 0 rgba(0,255,255,0.5)
        `;
        
        setTimeout(() => {
            heroTitle.style.transform = 'translate(0)';
            heroTitle.style.textShadow = 'none';
        }, glitchDuration);
        
        setTimeout(createGlitchEffect, glitchInterval);
    }
    
    createGlitchEffect();
}

// Initialize Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

document.querySelectorAll('.showcase-item, .support-card, .info-card').forEach(el => {
    observer.observe(el);
});
