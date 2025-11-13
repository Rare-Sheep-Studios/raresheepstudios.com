// profile-modal.js - Team Member Profile Modal System

class ProfileModal {
    constructor() {
        this.modal = null;
        this.overlay = null;
        this.init();
    }

    init() {
        // Create modal HTML structure
        this.createModal();
        
        // Attach event listeners to all team member cards
        this.attachCardListeners();
        
        // Handle overlay and close button clicks
        this.attachModalControls();
    }

    createModal() {
        // Create overlay
        this.overlay = document.createElement('div');
        this.overlay.id = 'profile-overlay';
        this.overlay.className = 'profile-overlay';
        this.overlay.setAttribute('aria-hidden', 'true');
        document.body.appendChild(this.overlay);

        // Create modal container
        this.modal = document.createElement('div');
        this.modal.id = 'profile-modal';
        this.modal.className = 'profile-modal';
        this.modal.setAttribute('role', 'dialog');
        this.modal.setAttribute('aria-modal', 'true');
        this.modal.setAttribute('aria-labelledby', 'profile-name');
        
        this.modal.innerHTML = `
            <div class="profile-modal-content">
                <!-- Close button -->
                <button class="profile-close-btn" aria-label="Close profile" title="Close (Esc)">
                    <span aria-hidden="true">&times;</span>
                </button>

                <!-- Banner image -->
                <div class="profile-banner">
                    <img id="profile-banner-img" src="" alt="Profile banner" class="banner-image">
                </div>

                <!-- Profile header with picture and basic info -->
                <div class="profile-header">
                    <div class="profile-picture-container">
                        <img id="profile-picture" src="" alt="Profile picture" class="profile-picture">
                    </div>
                    
                    <div class="profile-info-header">
                        <h2 id="profile-name" class="profile-name"></h2>
                        <p class="profile-title"></p>
                    </div>
                </div>

                <!-- Bio section -->
                <div class="profile-section">
                    <p id="profile-bio" class="profile-bio"></p>
                </div>

                <!-- Projects/Tags section -->
                <div class="profile-section">
                    <h3 class="profile-section-title">Projects</h3>
                    <div id="profile-tags" class="profile-tags"></div>
                </div>

                <!-- Social links section -->
                <div class="profile-section">
                    <h3 class="profile-section-title">Connect</h3>
                    <div id="profile-links" class="profile-links"></div>
                </div>
            </div>
        `;

        document.body.appendChild(this.modal);
    }

    attachCardListeners() {
        // Get all team member cards (li elements with data-bio-id)
        const cards = document.querySelectorAll('[data-bio-id]');
        
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Prevent event propagation if clicking on search input
                if (e.target.type === 'search') return;
                
                const bioId = card.getAttribute('data-bio-id');
                this.openProfile(card, bioId);
            });

            // Make cards keyboard accessible
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const bioId = card.getAttribute('data-bio-id');
                    this.openProfile(card, bioId);
                }
            });
        });
    }

    attachModalControls() {
        // Close button
        const closeBtn = this.modal.querySelector('.profile-close-btn');
        closeBtn.addEventListener('click', () => this.closeProfile());

        // Overlay click (outside modal)
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.closeProfile();
            }
        });

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeProfile();
            }
        });
    }

    openProfile(cardElement, bioId) {
        // Get data from the card
        const personDiv = cardElement.querySelector('.person');
        const personImage = personDiv.querySelector('.person-image');
        const personName = personDiv.querySelector('.person-name').textContent;
        const personTitle = personDiv.querySelector('.person-title').textContent;
        const personTags = personDiv.querySelectorAll('.project-tag');
        const bioDivElement = cardElement.querySelector(`#${bioId}`);
        const bioText = bioDivElement ? bioDivElement.textContent.trim() : '';

        // Update modal content
        document.getElementById('profile-picture').src = personImage.src;
        document.getElementById('profile-picture').alt = personName;
        
        // Use a placeholder banner or generate one (you can add data attributes later)
        const bannerSrc = cardElement.getAttribute('data-banner') || '../../../../content/mainsite/assets/image/placeholder.png';
        document.getElementById('profile-banner-img').src = bannerSrc;
        
        document.getElementById('profile-name').textContent = personName;
        document.querySelector('.profile-title').textContent = personTitle;
        document.getElementById('profile-bio').textContent = bioText;

        // Update tags
        const tagsContainer = document.getElementById('profile-tags');
        tagsContainer.innerHTML = '';
        personTags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'profile-tag';
            tagSpan.textContent = tag.textContent;
            tagsContainer.appendChild(tagSpan);
        });

        // Update social links (if data attributes exist)
        this.updateSocialLinks(cardElement);

        // Show modal with animation
        this.modal.classList.add('active');
        this.overlay.classList.add('active');
        
        // Focus the close button for accessibility
        document.querySelector('.profile-close-btn').focus();
    }

    updateSocialLinks(cardElement) {
        const linksContainer = document.getElementById('profile-links');
        linksContainer.innerHTML = '';

        // Check for social link data attributes
        const socialLinks = [
            { key: 'data-github', icon: '🐙', label: 'GitHub' },
            { key: 'data-twitter', icon: '𝕏', label: 'Twitter' },
            { key: 'data-discord', icon: '💬', label: 'Discord' },
            { key: 'data-roblox', icon: '🎮', label: 'Roblox' },
            { key: 'data-youtube', icon: '📺', label: 'YouTube' },
            { key: 'data-website', icon: '🌐', label: 'Website' },
        ];

        socialLinks.forEach(social => {
            const url = cardElement.getAttribute(social.key);
            if (url) {
                const link = document.createElement('a');
                link.href = url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                link.className = 'profile-link';
                link.title = social.label;
                link.setAttribute('aria-label', `Visit ${social.label}`);
                link.innerHTML = `<span class="profile-link-icon">${social.icon}</span>`;
                linksContainer.appendChild(link);
            }
        });

        // If no links found, show a message
        if (linksContainer.children.length === 0) {
            linksContainer.innerHTML = '<p class="no-links">No social links available</p>';
        }
    }

    closeProfile() {
        this.modal.classList.remove('active');
        this.overlay.classList.remove('active');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    new ProfileModal();
});
