// contact.js - Contact Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFAQ();
});

// Contact Form Handling
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    
    if (form && submitBtn) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm()) {
                submitForm();
            }
        });
        
        // Real-time validation
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                clearError(this);
            });
        });
    }
}

// Form Validation
function validateForm() {
    const form = document.getElementById('contactForm');
    const fields = [
        { id: 'name', required: true, minLength: 2 },
        { id: 'email', required: true, type: 'email' },
        { id: 'subject', required: true },
        { id: 'message', required: true, minLength: 10 }
    ];
    
    let isValid = true;
    
    fields.forEach(field => {
        const element = document.getElementById(field.id);
        if (!validateField(element, field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(element, rules = {}) {
    const value = element.value.trim();
    const fieldName = element.name || element.id;
    const isRequired = rules.required || element.hasAttribute('required');
    const minLength = rules.minLength || element.getAttribute('minlength');
    const type = rules.type || element.type;
    
    // Clear previous errors
    clearError(element);
    
    // Required field validation
    if (isRequired && !value) {
        showFieldError(element, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
        return false;
    }
    
    // Email validation
    if (type === 'email' && value && !isValidEmail(value)) {
        showFieldError(element, 'Please enter a valid email address');
        return false;
    }
    
    // Minimum length validation
    if (minLength && value.length < minLength) {
        showFieldError(element, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${minLength} characters long`);
        return false;
    }
    
    return true;
}

function showFieldError(element, message) {
    const formGroup = element.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
        errorElement.textContent = message;
    }
    
    formGroup.classList.add('error');
}

function clearError(element) {
    const formGroup = element.closest('.form-group');
    const errorElement = formGroup.querySelector('.error-message');
    
    if (errorElement) {
        errorElement.textContent = '';
    }
    
    formGroup.classList.remove('error');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Form Submission
function submitForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        showNotification('Message sent successfully! We\'ll get back to you soon. 🐑', 'success');
        
        // Reset button state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
    }, 2000);
}

// FAQ Accordion
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const answer = document.getElementById(this.getAttribute('aria-controls'));
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                if (q !== this) {
                    q.setAttribute('aria-expanded', 'false');
                    const otherAnswer = document.getElementById(q.getAttribute('aria-controls'));
                    otherAnswer.classList.remove('active');
                }
            });
            
            // Toggle current FAQ
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                answer.classList.remove('active');
            } else {
                this.setAttribute('aria-expanded', 'true');
                answer.classList.add('active');
            }
        });
    });
}

// Notification system (reuse from main.js if available, otherwise define here)
function showNotification(message, type = 'info') {
    // Check if notification function exists from main.js
    if (typeof window.showNotification === 'function') {
        window.showNotification(message, type);
        return;
    }
    
    // Fallback notification implementation
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
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
    
    const colors = {
        success: '#00ff88',
        error: '#ff4444',
        info: '#0088ff'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}
