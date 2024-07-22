document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll animations
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });

    // Advanced button interaction
    const buttons = document.querySelectorAll('.btn-advanced');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.classList.add('btn-hover');
        });
        button.addEventListener('mouseout', function() {
            this.classList.remove('btn-hover');
        });
        button.addEventListener('click', function() {
            alert('Button clicked!');
            // Add more dynamic actions here if needed
        });
    });
});