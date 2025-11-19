// Senior AI Guide Custom JavaScript
// This file can be used to add interactive functionality to the website.

document.addEventListener('DOMContentLoaded', function () {
    console.log('Website loaded and ready.');

    // Back to Top Button functionality
    const backToTopButton = document.getElementById('backToTopBtn');

    if (backToTopButton) {
        // Show or hide the button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) { // Show button after scrolling 300px
                backToTopButton.style.display = 'block';
            } else {
                backToTopButton.style.display = 'none';
            }
        });

        // Scroll to top when button is clicked
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scroll
            });
        });
    }
});
