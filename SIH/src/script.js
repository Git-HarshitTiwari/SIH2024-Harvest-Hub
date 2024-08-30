document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.menu a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to Top Button functionality
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
            backToTopBtn.classList.remove('hide');
        } else {
            backToTopBtn.classList.add('hide');
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Scroll reveal for elements
    const revealElements = document.querySelectorAll('.service-item, .card, .about, .footer');
    
    const revealOnScroll = () => {
        const viewportHeight = window.innerHeight;
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < viewportHeight - 100) {
                element.classList.add('visible');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});
