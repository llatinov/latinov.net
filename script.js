// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu functionality
const hamburgerMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-menu');

hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on navigation links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        hamburgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Customer card expand/collapse functionality
document.querySelectorAll('.expand-toggle').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.customer-card');
        const details = card.querySelector('.customer-details');
        const text = this.querySelector('.expand-text');

        // Toggle active state
        this.classList.toggle('active');
        details.classList.toggle('expanded');

        // Update button text
        if (details.classList.contains('expanded')) {
            text.textContent = 'Less Details';
        } else {
            text.textContent = 'More Details';
        }
    });
});