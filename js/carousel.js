// carousel.js - gremlin edition 🐾 + centered slides fix
document.addEventListener('DOMContentLoaded', () => initCarousel());

function initCarousel() {
    const container = document.querySelector('.carousel-container');
    const track = container.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const totalSlides = slides.length;

    let currentIndex = 0;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let isDragging = false;
    let animationID;

    // --- indicators ---
    const indicatorsContainer = document.createElement('div');
    indicatorsContainer.className = 'carousel-indicators';
    const indicators = slides.map((_, i) => {
        const btn = document.createElement('button');
        btn.className = 'carousel-indicator';
        btn.setAttribute('aria-label', `Go to slide ${i + 1}`);
        btn.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(btn);
        return btn;
    });
    container.appendChild(indicatorsContainer);

    // --- navigation (hidden) ---
    const navigation = document.createElement('div');
    navigation.className = 'carousel-navigation';
    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-button prev';
    prevBtn.innerHTML = '←';
    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-button next';
    nextBtn.innerHTML = '→';
    navigation.append(prevBtn, nextBtn);
    container.appendChild(navigation);
    navigation.style.display = 'none'; // hide arrows

    prevBtn.addEventListener('click', () => navigate('prev'));
    nextBtn.addEventListener('click', () => navigate('next'));

    // --- navigation functions ---
    function navigate(direction) {
        currentIndex = direction === 'next'
            ? (currentIndex + 1) % totalSlides
            : (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }

    // --- update carousel with centered slide ---
    function updateCarousel() {
        const containerWidth = container.offsetWidth;
        const trackGap = parseFloat(getComputedStyle(track).gap || 0);

        const activeSlide = slides[currentIndex];
        const slideCenter = activeSlide.offsetLeft + activeSlide.offsetWidth / 2;
        const translate = slideCenter - containerWidth / 2;

        currentTranslate = -translate;
        prevTranslate = currentTranslate;

        track.style.transition = 'transform 0.5s cubic-bezier(0.4,0,0.2,1)';
        track.style.transform = `translateX(${currentTranslate}px)`;

        slides.forEach((s, i) => s.classList.toggle('active', i === currentIndex));
        indicators.forEach((i, idx) => i.classList.toggle('active', idx === currentIndex));
    }

    // --- drag / swipe ---
    track.addEventListener('mousedown', dragStart);
    track.addEventListener('touchstart', dragStart, {passive:true});
    track.addEventListener('mousemove', dragMove);
    track.addEventListener('touchmove', dragMove, {passive:true});
    track.addEventListener('mouseup', dragEnd);
    track.addEventListener('touchend', dragEnd);
    track.addEventListener('mouseleave', dragEnd);

    function dragStart(e) {
        startPos = getX(e);
        isDragging = true;
        track.style.cursor = 'grabbing';
        track.style.transition = 'none';
        animationID = requestAnimationFrame(animation);
    }

    function dragMove(e) {
        if (!isDragging) return;
        const currentPos = getX(e);
        currentTranslate = prevTranslate + currentPos - startPos;
    }

    function dragEnd() {
        cancelAnimationFrame(animationID);
        isDragging = false;
        track.style.cursor = 'grab';
        const movedBy = currentTranslate - prevTranslate;

        if (Math.abs(movedBy) > 100) {
            navigate(movedBy < 0 ? 'next' : 'prev');
        } else {
            track.style.transition = 'transform 0.5s ease';
            track.style.transform = `translateX(${prevTranslate}px)`;
        }
    }

    function animation() {
        track.style.transform = `translateX(${currentTranslate}px)`;
        if (isDragging) requestAnimationFrame(animation);
    }

    function getX(e) {
        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
    }

    // --- autoplay ---
    let autoPlayTimer = setInterval(() => navigate('next'), 5000);
    container.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
    container.addEventListener('mouseleave', () => autoPlayTimer = setInterval(() => navigate('next'), 5000));

    // --- keyboard navigation ---
    container.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') navigate('prev');
        if (e.key === 'ArrowRight') navigate('next');
    });

    // --- resize ---
    window.addEventListener('resize', updateCarousel);

    // --- init ---
    updateCarousel();
}
