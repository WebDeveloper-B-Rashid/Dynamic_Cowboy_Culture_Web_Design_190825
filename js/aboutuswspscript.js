document.addEventListener('DOMContentLoaded', function() {

    // Intersection Observer for fade-in animations
    const fadeElems = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Attach the observer to each of the elements
    fadeElems.forEach(elem => {
        observer.observe(elem);
    });

});