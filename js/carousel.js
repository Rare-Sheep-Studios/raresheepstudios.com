// carousel.js
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
});

function initCarousel() {
    const container = document.querySelector('.carousel-container');
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const totalSlides = slides.length;
    let currentIndex = 0;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let isDragging = false;
    
    // Initialize carousel
    function setupCarousel() {
        // Add indicators
        const indicatorsContainer = document.createElement('div');
        indicatorsContainer.className = 'carousel-indicators';
        
        slides.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = 'carousel-indicator';
            indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
            indicator.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(indicator);
        });
        
        // Add navigation buttons
        const navigation = document.createElement('div');
        navigation.className = 'carousel-navigation';
        
        const prevButton = document.createElement('button');
        prevButton.className = 'carousel-button prev';
        prevButton.innerHTML = '←';
        prevButton.setAttribute('aria-label', 'Previous slide');
        
        const nextButton = document.createElement('button');
        nextButton.className = 'carousel-button next';
        nextButton.innerHTML = '→';
        nextButton.setAttribute('aria-label', 'Next slide');
        
        navigation.appendChild(prevButton);
        navigation.appendChild(nextButton);
        
        // Append controls to container
        container.appendChild(navigation);
        container.appendChild(indicatorsContainer);
        
        // Event listeners for buttons
        prevButton.addEventListener('click', () => navigate('prev'));
        nextButton.addEventListener('click', () => navigate('next'));
        
        // Update indicators
        updateIndicators();
        updateSlideClasses();
    }
    
    function navigate(direction) {
        if (direction === 'next') {
            currentIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
        } else {
            currentIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
        }
        updateCarousel();
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth + 32; // Width + gap
        currentTranslate = -currentIndex * slideWidth;
        track.style.transform = `translateX(${currentTranslate}px)`;
        updateIndicators();
        updateSlideClasses();
    }
    
    function updateIndicators() {
        const indicators = document.querySelectorAll('.carousel-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    function updateSlideClasses() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Touch and mouse events for swipe functionality
    function touchStart(event) {
        startPos = getPositionX(event);
        isDragging = true;
        track.style.cursor = 'grabbing';
        track.style.transition = 'none';
    }
    
    function touchMove(event) {
        if (!isDragging) return;
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
        track.style.transform = `translateX(${currentTranslate}px)`;
    }
    
    function touchEnd() {
        isDragging = false;
        track.style.cursor = 'grab';
        track.style.transition = 'transform 0.5s ease-in-out';
        
        const movedBy = currentTranslate - prevTranslate;
        
        if (Math.abs(movedBy) > 100) {
            if (movedBy < 0) {
                navigate('next');
            } else {
                navigate('prev');
            }
        } else {
            updateCarousel();
        }
        
        prevTranslate = currentTranslate;
    }
    
    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }
    
    // Event listeners
    track.addEventListener('mousedown', touchStart);
    track.addEventListener('touchstart', touchStart);
    track.addEventListener('mousemove', touchMove);
    track.addEventListener('touchmove', touchMove);
    track.addEventListener('mouseup', touchEnd);
    track.addEventListener('touchend', touchEnd);
    track.addEventListener('mouseleave', touchEnd);
    
    // Initialize
    setupCarousel();
    updateCarousel();
    
    // Auto-play (optional)
    const autoPlayInterval = 5000; // 5 seconds
    let autoPlayTimer = setInterval(() => navigate('next'), autoPlayInterval);
    
    // Pause auto-play on hover
    container.addEventListener('mouseenter', () => {
        clearInterval(autoPlayTimer);
    });
    
    container.addEventListener('mouseleave', () => {
        autoPlayTimer = setInterval(() => navigate('next'), autoPlayInterval);
    });
    
    // Handle resize
    window.addEventListener('resize', () => {
        updateCarousel();
    });
}