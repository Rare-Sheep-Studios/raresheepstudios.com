// jobs.js - Job listings search and filter functionality

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const jobSections = document.querySelectorAll('.job-section');

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        jobSections.forEach(section => {
            const jobTitle = section.querySelector('h3').textContent.toLowerCase();
            const jobDescription = section.querySelector('p').textContent.toLowerCase();
            const jobRequirements = Array.from(section.querySelectorAll('li'))
                .map(li => li.textContent.toLowerCase())
                .join(' ');

            const jobContent = `${jobTitle} ${jobDescription} ${jobRequirements}`;

            if (jobContent.includes(searchTerm)) {
                section.style.display = '';
                section.style.opacity = '1';
            } else {
                section.style.display = 'none';
                section.style.opacity = '0';
            }
        });
    });

    // Animation on scroll
    const observeElements = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        jobSections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(section);
        });
    };

    observeElements();
});