document.addEventListener('DOMContentLoaded', () => {

    let currentStep = 1;
    const formSteps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-step');

    const eventSelect = document.getElementById('eventSelect');
    const stallsInput = document.getElementById('stalls');
    const rvSpotsInput = document.getElementById('rvSpots');
    const eventSummary = document.getElementById('eventSummary');
    const addOnsSummary = document.getElementById('addOnsSummary');
    const totalPriceElement = document.getElementById('totalPrice');
    
    const eventPrices = {
        mtn_rush: 150.00,
        urban_gauntlet: 120.00,
        desert_rally: 135.00
    };
    const stallPrice = 50.00;
    const rvPrice = 75.00;

    function updateProgressBar(step) {
        progressSteps.forEach((indicator, index) => {
            if (index + 1 === step) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function showStep(step) {
        formSteps.forEach(s => s.classList.remove('active'));
        document.getElementById(`step${step}`).classList.add('active');
        updateProgressBar(step);
        currentStep = step;
        if (step === 3) {
            updateSummary();
        }
    }

    function updateSummary() {
        const selectedEvent = eventSelect.options[eventSelect.selectedIndex].text;
        const selectedEventValue = eventSelect.value;
        const stallsCount = parseInt(stallsInput.value) || 0;
        const rvCount = parseInt(rvSpotsInput.value) || 0;
        
        let subtotal = 0;
        if (eventPrices[selectedEventValue]) {
            subtotal += eventPrices[selectedEventValue];
        }
        subtotal += (stallsCount * stallPrice);
        subtotal += (rvCount * rvPrice);

        eventSummary.textContent = `Event: ${selectedEvent} ($${eventPrices[selectedEventValue].toFixed(2)})`;
        addOnsSummary.textContent = `Add-ons: ${stallsCount} Stalls ($${(stallsCount * stallPrice).toFixed(2)}) & ${rvCount} RV Spots ($${(rvCount * rvPrice).toFixed(2)})`;
        totalPriceElement.textContent = `$${subtotal.toFixed(2)}`;
    }

    // Expose functions to the global scope for onclick attributes
    window.nextStep = (step) => {
        if (step === 2 && !eventSelect.value) {
            alert('Please select an event to continue.');
            return;
        }
        showStep(step);
    };

    window.prevStep = (step) => {
        showStep(step);
    };

    // Handle form submission (for the final step)
    document.getElementById('regForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Registration Complete! Thank you for your payment.');
        // Here you would integrate with a secure payment gateway (e.g., Stripe, PayPal)
        // and send the form data to your server.
        // For demonstration, we'll just show an alert.
        console.log('Form submitted. Simulating payment processing...');
    });
});
