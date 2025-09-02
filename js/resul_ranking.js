document.addEventListener('DOMContentLoaded', () => {

    const resultsList = document.querySelector('.results-list');
    const rankingsTableBody = document.querySelector('.rankings-table tbody');

    // Simulate data from an API or database
    const resultsData = [
        { 
            event: 'Mountain Rush Championship', 
            date: 'September 15, 2025', 
            location: 'Whispering Peaks Trail', 
            winner: 'Alex "The Ace" Carter' 
        },
        { 
            event: 'Urban Bike Gauntlet', 
            date: 'August 28, 2025', 
            location: 'Central City Park', 
            winner: 'Jamie "Flash" Reynolds' 
        },
        { 
            event: 'Desert Dust Rally', 
            date: 'August 10, 2025', 
            location: 'Mojave Dunes', 
            winner: 'Sam "Sandstorm" Rodriguez' 
        }
    ];

    const rankingsData = [
        { rank: 1, rider: 'Alex "The Ace" Carter', team: 'Velocity Riders', points: 3450 },
        { rank: 2, rider: 'Jamie "Flash" Reynolds', team: 'Rapid Wheels', points: 3200 },
        { rank: 3, rider: 'Sam "Sandstorm" Rodriguez', team: 'Desert Foxes', points: 2980 },
        { rank: 4, rider: 'Maya "Phoenix" Lee', team: 'Trail Blazers', points: 2850 },
        { rank: 5, rider: 'Chris "Rocket" Davis', team: 'Urban Cruisers', points: 2710 },
        { rank: 6, rider: 'Emily "Spectre" Chen', team: 'Ghost Riders', points: 2540 },
        { rank: 7, rider: 'David "Dynamo" Jones', team: 'Power Pedals', points: 2390 },
        { rank: 8, rider: 'Liam "Lightning" White', team: 'Thunderbolts', points: 2120 }
    ];

    // Function to render event results
    function renderResults() {
        resultsData.forEach(result => {
            const card = document.createElement('div');
            card.classList.add('result-card');
            card.innerHTML = `
                <h3>${result.event}</h3>
                <p><strong>Date:</strong> ${result.date}</p>
                <p><strong>Location:</strong> ${result.location}</p>
                <p><strong>Winner:</strong> ${result.winner}</p>
            `;
            resultsList.appendChild(card);
        });
    }

    // Function to render rankings table
    function renderRankings() {
        rankingsData.forEach(ranking => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><span class="${ranking.rank <= 3 ? 'highlight' : ''}">${ranking.rank}</span></td>
                <td>${ranking.rider}</td>
                <td>${ranking.team}</td>
                <td>${ranking.points}</td>
            `;
            rankingsTableBody.appendChild(row);
        });
    }

    // Initial rendering
    renderResults();
    renderRankings();
});