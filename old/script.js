// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        mobileMenu.classList.add('hidden');
    });
});


// Project Filtering 
function filterProjects(category) {
    const projects = document.querySelectorAll('#project-grid article');
    const buttons = document.querySelectorAll('[role="toolbar"] button');
    buttons.forEach(btn => btn.setAttribute('aria-pressed', btn.textContent === category ? 'true' : 'false'));
    projects.forEach(project => {
        project.style.display = category === 'all' || project.dataset.category === category ? 'block' : 'none';
    });
}