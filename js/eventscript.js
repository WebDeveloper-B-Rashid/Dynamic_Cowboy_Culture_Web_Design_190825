document.addEventListener('DOMContentLoaded', () => {

    // --- Dynamic Event Data (can be fetched from an API) ---
    const events = [
        {
            id: 1,
            name: "Summer Beginner Rodeo",
            date: "2025-08-15",
            location: "California State Fairgrounds, Sacramento, CA",
            type: "Beginner",
            detailsUrl: "event-details.html?id=1"
        },
        {
            id: 2,
            name: "Texas Open Championships",
            date: "2025-09-22",
            location: "Moulana Vashani Stadium, Dhaka,  Bangladesh, TX",
            type: "Open",
            detailsUrl: "event-details.html?id=2"
        },
        {
            id: 3,
            name: "National Finals Rodeo",
            date: "2025-10-10",
            location: "Las Vegas Convention Center, Las Vegas, NV",
            type: "Finals",
            detailsUrl: "event-details.html?id=3"
        }
    ];

    // --- Calendar View Logic ---
    const calendarGrid = document.querySelector('.calendar-grid');
    const currentMonthYearEl = document.getElementById('current-month-year');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();

    const renderCalendar = (month, year) => {
        calendarGrid.innerHTML = `
            <div class="calendar-day-name">Sun</div>
            <div class="calendar-day-name">Mon</div>
            <div class="calendar-day-name">Tue</div>
            <div class="calendar-day-name">Wed</div>
            <div class="calendar-day-name">Thu</div>
            <div class="calendar-day-name">Fri</div>
            <div class="calendar-day-name">Sat</div>
        `;
        
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        currentMonthYearEl.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });

        // Add blank days for the start of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            const dayEl = document.createElement('div');
            dayEl.classList.add('calendar-day', 'inactive');
            calendarGrid.appendChild(dayEl);
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayEl = document.createElement('div');
            dayEl.classList.add('calendar-day');
            dayEl.textContent = day;

            // Highlight current month with maroon
            if (month === new Date().getMonth() && year === new Date().getFullYear()) {
                dayEl.classList.add('current-month-highlight');
                if (day === new Date().getDate()) {
                    dayEl.classList.add('today');
                }
            }

            calendarGrid.appendChild(dayEl);
        }
    };

    prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });

    nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });

    // --- Event Listings Logic ---
    const eventListingsSection = document.querySelector('.event-listings');
    const filterState = document.getElementById('state-filter');
    const filterType = document.getElementById('type-filter');
    const filterDateStart = document.getElementById('date-range-filter-start');
    const filterDateEnd = document.getElementById('date-range-filter-end');

    const renderEvents = (filteredEvents) => {
        eventListingsSection.innerHTML = ''; // Clear previous events
        if (filteredEvents.length === 0) {
            eventListingsSection.innerHTML = '<p style="color:white; text-align:center;">No events found for the selected filters.</p>';
            return;
        }

        filteredEvents.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            eventCard.innerHTML = `
                <h3 class="event-name">${event.name}</h3>
                <p class="event-info"><i class="fas fa-calendar-alt"></i> ${new Date(event.date).toDateString()}</p>
                <p class="event-info"><i class="fas fa-map-marker-alt"></i> ${event.location}</p>
                <a href="${event.detailsUrl}" class="details-btn">View Details</a>
            `;
            eventListingsSection.appendChild(eventCard);
        });
    };

    const applyFilters = () => {
        const selectedState = filterState.value;
        const selectedType = filterType.value;
        const startDate = filterDateStart.value ? new Date(filterDateStart.value) : null;
        const endDate = filterDateEnd.value ? new Date(filterDateEnd.value) : null;

        const filtered = events.filter(event => {
            const eventDate = new Date(event.date);
            const eventState = event.location.split(', ').pop(); // Simple state extraction

            // State filter
            const stateMatch = !selectedState || eventState.toUpperCase() === selectedState.toUpperCase();

            // Type filter
            const typeMatch = !selectedType || event.type === selectedType;

            // Date Range filter
            const dateMatch = (!startDate || eventDate >= startDate) && (!endDate || eventDate <= endDate);

            return stateMatch && typeMatch && dateMatch;
        });
        
        renderEvents(filtered);
    };

    // Add event listeners for filters
    filterState.addEventListener('change', applyFilters);
    filterType.addEventListener('change', applyFilters);
    filterDateStart.addEventListener('change', applyFilters);
    filterDateEnd.addEventListener('change', applyFilters);

    // Initial render
    renderCalendar(currentMonth, currentYear);
    renderEvents(events);
});