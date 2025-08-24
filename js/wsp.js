
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.getElementById('main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('is-open');
        });

        // Optional: Close the menu when a link is clicked
        const navLinks = mainNav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                mainNav.classList.remove('is-open');
            });
        });
    }
});

// This is an example of how JS could handle a more complex hover state.
document.addEventListener('DOMContentLoaded', () => {
    const goldButton = document.querySelector('.cta-gold');

    if (goldButton) {
        goldButton.addEventListener('mouseenter', () => {
            goldButton.style.color = 'var(--maroon)';
            goldButton.style.backgroundColor = 'var(--gold)';
        });

        goldButton.addEventListener('mouseleave', () => {
            goldButton.style.color = 'var(--black)';
            goldButton.style.backgroundColor = 'var(--gold)';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {

    const eventDates = [
        new Date('October 25, 2025 10:00:00').getTime(),
        new Date('November 10, 2025 10:00:00').getTime(),
        new Date('December 5, 2025 10:00:00').getTime()
    ];

    const timers = [
        document.getElementById('timer-1'),
        document.getElementById('timer-2'),
        document.getElementById('timer-3')
    ];

    function updateTimers() {
        const now = new Date().getTime();

        eventDates.forEach((eventDate, index) => {
            const distance = eventDate - now;

            if (distance < 0) {
                timers[index].innerHTML = "Event in Progress";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timers[index].innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        });
    }

    setInterval(updateTimers, 1000);
    updateTimers(); // Initial call to display immediately
});


//About section

// This is a placeholder for any future JavaScript functionality.
// For now, the responsive design and animations are handled by CSS.
// Example: Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});