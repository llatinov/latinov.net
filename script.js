// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update header color based on current section
function updateHeaderColor() {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 150; // Offset for header height

    // Remove all section classes
    header.classList.remove('section-home', 'section-about', 'section-skills', 'section-contact');

    let currentSection = 'home'; // Default

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSection = section.id;
        }
    });

    header.classList.add(`section-${currentSection}`);
}

window.addEventListener('scroll', updateHeaderColor);
window.addEventListener('load', updateHeaderColor);