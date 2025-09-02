document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Log the form data to the console (for demonstration)
        console.log({
            name,
            email,
            subject,
            message
        });

        // Here you would typically send this data to a server using fetch() or an AJAX call.
        // Example using fetch:
        /*
        fetch('/submit-form-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message }),
        })
        .then(response => response.json())
        .then(data => {
            alert('Thank you for your message! We will get back to you shortly.');
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again later.');
        });
        */

        // For this example, we'll just show an alert and reset the form.
        alert('Thank you for your message! We will get back to you shortly.');
        contactForm.reset();
    });
});