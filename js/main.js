// main.js - Rare Sheep Studios Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initMobileMenu();
    initScrollEffects();
    initSmoothScrolling();
    initNewsletterForm();
    initAnimations();
    initMerchInteractions();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = mobileToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (mobileToggle.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });

        // Close menu when clicking on a link
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileToggle.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !mobileToggle.contains(e.target)) {
                nav.classList.remove('active');
                mobileToggle.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                });
            }
        });
    }
}

// Scroll Effects
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

// Smooth Scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
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

// Newsletter Form
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value.trim();
            const button = this.querySelector('button');
            const originalText = button.textContent;
            
            // Enhanced email validation
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Check if email already exists
            if (isEmailAlreadySubscribed(email)) {
                showNotification('This email is already subscribed!', 'info');
                return;
            }
            
            // Show loading state
            button.textContent = 'Subscribing...';
            button.disabled = true;
            
            // Store email locally (you can export this data later)
            storeNewsletterEmail(email);
            
            // Simulate API call delay
            setTimeout(() => {
                showNotification('Thanks for subscribing! You\'ll hear from us soon. 🐑', 'success');
                this.reset();
                button.textContent = originalText;
                button.disabled = false;
                
                // Optional: Log to console for easy access
                console.log('New newsletter subscriber:', email);
                console.log('All subscribers:', getAllSubscribers());
            }, 1500);
        });
    }
}

// Store newsletter email in localStorage
function storeNewsletterEmail(email) {
    try {
        const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
        const subscriberData = {
            email: email,
            subscribedAt: new Date().toISOString(),
            source: 'website'
        };
        
        // Check if email already exists
        const exists = subscribers.some(sub => sub.email === email);
        if (!exists) {
            subscribers.push(subscriberData);
            localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));
        }
    } catch (error) {
        console.error('Error storing newsletter email:', error);
    }
}

// Check if email is already subscribed
function isEmailAlreadySubscribed(email) {
    try {
        const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
        return subscribers.some(sub => sub.email === email);
    } catch (error) {
        console.error('Error checking email subscription:', error);
        return false;
    }
}

// Get all subscribers (for export)
function getAllSubscribers() {
    try {
        return JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
    } catch (error) {
        console.error('Error getting subscribers:', error);
        return [];
    }
}

// Export subscribers as CSV (for easy import to email services)
function exportSubscribers() {
    const subscribers = getAllSubscribers();
    if (subscribers.length === 0) {
        console.log('No subscribers to export');
        return;
    }
    
    const csvContent = [
        'Email,Subscribed Date,Source',
        ...subscribers.map(sub => `${sub.email},${sub.subscribedAt},${sub.source}`)
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `newsletter-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    console.log('Subscribers exported as CSV!');
}

// Make export function available globally for easy access
window.exportNewsletterSubscribers = exportSubscribers;

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        color: '#fff',
        fontWeight: '600',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
    });
    
    // Set background color based on type
    const colors = {
        success: '#00ff88',
        error: '#ff4444',
        info: '#0088ff'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Intersection Observer for animations
function initAnimations() {
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
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-card, .merch-item, .stat');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Merch interactions
function initMerchInteractions() {
    const merchItems = document.querySelectorAll('.merch-item');
    
    merchItems.forEach(item => {
        const button = item.querySelector('button');
        
        if (button && !button.disabled) {
            button.addEventListener('click', function() {
                const productName = item.querySelector('h4').textContent;
                showNotification(`${productName} added to cart! 🛒`, 'success');
                
                // Add a subtle animation
                item.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    item.style.transform = '';
                }, 200);
            });
        }
        
        // Add hover effects for disabled buttons
        if (button && button.disabled) {
            button.addEventListener('mouseenter', function() {
                this.style.opacity = '0.7';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.opacity = '0.5';
            });
        }
    });
}

// Utility function to debounce events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .project-card, .merch-item, .stat {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .project-card.animate-in, .merch-item.animate-in, .stat.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @media (max-width: 768px) {
        .notification {
            right: 10px !important;
            left: 10px !important;
            max-width: none !important;
        }
    }
`;
document.head.appendChild(style);
