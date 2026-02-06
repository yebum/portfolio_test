// Page Navigation
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const targetPage = link.getAttribute('data-page');
        
        // Remove active class from all pages and nav links
        pages.forEach(page => page.classList.remove('active'));
        navLinks.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked page and nav link
        document.getElementById(targetPage).classList.add('active');
        link.classList.add('active');

        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';