// people.js - Team Members Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initTeamPage();
});

function initTeamPage() {
    initBioToggles();
    initHeaderEffects();
    initSearchAnimation();
}

function initBioToggles() {
    document.querySelectorAll('[data-bio-id]').forEach(element => {
        element.addEventListener('click', function() {
            const bioId = this.getAttribute('data-bio-id');
            toggleBio(bioId);
        });
    });
}

function initHeaderEffects() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        // Add/remove scrolled class
        header.classList.toggle('scrolled', currentScroll > 100);
        
        // Add/remove fade-out class based on scroll direction
        if (currentScroll > lastScroll && currentScroll > 200) {
            header.classList.add('fade-out');
        } else {
            header.classList.remove('fade-out');
        }
        
        // Add/remove at-top class
        header.classList.toggle('at-top', currentScroll === 0);
        
        lastScroll = currentScroll;
    });
}

function initSearchAnimation() {
    const searchInput = document.getElementById('search-input');
    const cursor = document.createElement('div');
    cursor.classList.add('search-cursor');
    
    searchInput.addEventListener('focus', () => {
        searchInput.parentElement.classList.add('focused');
    });
    
    searchInput.addEventListener('blur', () => {
        searchInput.parentElement.classList.remove('focused');
    });
        // Add input event listener to trigger search when user types
    searchInput.addEventListener('input', () => {
        searchPeople();
    });
}

function toggleBio(id) {
    const bio = document.getElementById(id);
    const allBios = document.querySelectorAll('.bio');
    
    // Close other open bios with animation
    allBios.forEach(b => {
        if (b.id !== id && b.classList.contains('show')) {
            b.style.opacity = '0';
            setTimeout(() => {
                b.classList.remove('show');
            }, 300);
        }
    });

    // Toggle the clicked bio with animation
    if (!bio.classList.contains('show')) {
        bio.classList.add('show');
        setTimeout(() => {
            bio.style.opacity = '1';
        }, 10);
    } else {
        bio.style.opacity = '0';
        setTimeout(() => {
            bio.classList.remove('show');
        }, 300);
    }
}

function searchPeople() {
    const filter = document.getElementById('search-input').value.toLowerCase();
    const people = document.querySelectorAll('.category li');
    const categories = document.querySelectorAll('.category');
    
    // Track visible items per category
    const visibleCount = new Map();
    categories.forEach(cat => visibleCount.set(cat, 0));
    
    // Check each person
    people.forEach(person => {
        const name = person.querySelector('.person-name').textContent.toLowerCase();
        const title = person.querySelector('.person-title').textContent.toLowerCase();
        const bio = person.querySelector('.bio').textContent.toLowerCase();
        const tags = Array.from(person.querySelectorAll('.project-tag')).map(tag => tag.textContent.toLowerCase());
        
        // Check if person matches any search criteria
        const matchName = name.includes(filter);
        const matchTitle = title.includes(filter);
        const matchBio = bio.includes(filter);
        const matchTags = tags.some(tag => tag.includes(filter));
        
        const match = matchName || matchTitle || matchBio || matchTags;
        const category = person.closest('.category');
        
        // Animate the visibility change
        if (match) {
            if (person.style.display === 'none') {
                person.style.display = '';
                person.style.opacity = '0';
                person.style.transform = 'translateY(-10px)';
                setTimeout(() => {
                    person.style.opacity = '1';
                    person.style.transform = 'translateY(0)';
                }, 10);
            }
            visibleCount.set(category, visibleCount.get(category) + 1);
        } else {
            person.style.opacity = '0';
            person.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                person.style.display = 'none';
            }, 300);
        }
    });
    
    // Update category visibility with smooth animations
    categories.forEach(category => {
        const hasVisibleItems = visibleCount.get(category) > 0;
        if (hasVisibleItems) {
            if (category.style.display === 'none') {
                category.style.display = '';
                category.style.opacity = '0';
                setTimeout(() => {
                    category.style.opacity = '1';
                }, 10);
            }
        } else {
            category.style.opacity = '0';
            setTimeout(() => {
                category.style.display = 'none';
            }, 300);
        }
    });
}



