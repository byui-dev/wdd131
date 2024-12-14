const reserves = [
    {
        reserveName: "Dinokeng Game Reserve",
        location: "Gauteng Province, South Africa",
        opened: "2011, September, 22",
        area: 20000,
        hotels: 9,
        imageUrl: ""
    },
    {
        reserveName: "Thula Thula Private Game Reserve",
        location: "KwaZulu Natal Province, South Africa",
        opened: "1911",
        area: 4500,
        hotels: 2,
        imageUrl: ""
    },
    {
        reserveName: "Shamwari Private Game Reserve",
        location: "Eastern Cape Province, South Africa",
        opened: "1992",
        area: 250,
        hotels: 7,
        imageUrl: ""
    },
    {
        reserveName: "Kariega Game Reserve",
        location: "Eastern Cape Province, South Africa",
        opened: "1989",
        area: 10000,
        hotels: 5,
        imageUrl: ""
    },
    {
        reserveName: "Amakhala Game Reserve",
        location: "Eastern Cape Province, South Africa",
        opened: "1999, October, 29",
        area: 7400,
        hotels: 8,
        imageUrl: ""
    },
    {
        reserveName: "Kololo Game Reserve",
        location: "Limpopo Province, South Africa",
        opened: "1980",
        area: 3000,
        hotels: 2,
        imageUrl: ""
    },
    {
        reserveName: "Imfolozi Game Reserve",
        location: "KwaZulu Natal Province, South Africa",
        opened: "1895",
        area: 96000,
        hotels: 6,
        imageUrl: ""
    },
    {
        reserveName: "Pilanesberg National Park",
        location: "North West Province, South Africa",
        opened: "1979",
        area: 57250,
        hotels: 45,
        imageUrl: ""
    },
    {
        reserveName: "Madikwe Game Reserve",
        location: "North West Province, South Africa",
        opened: "1994",
        area: 80000,
        hotels: 20,
        imageUrl: ""
    },
];

// Function to create reserve cards
function createReserveCards(reserveList) {
    // Get the container where cards will be displayed
    const cardContainer = document.getElementById('cardContainer');

    // Clear existing cards
    cardContainer.innerHTML = '';

    // Loop through the array of reserves and create cards
    reserveList.forEach(reserve => {
        const card = document.createElement('div');
        card.className = 'reserve-card';

        // Add the reserve's information
        card.innerHTML = `
            <img src="${reserve.imageUrl}" alt="${reserve.reserveName} Reserve" loading="lazy">
            <div class="reserve-info">
                <h3>${reserve.reserveName} Reserve</h3>
                <p><strong>Location:</strong> ${reserve.location}</p>
                <p><strong>Dedicated:</strong> ${reserve.dedicated}</p>
                <p><strong>Size:</strong> ${reserve.area.toLocaleString()} sq ft</p>
            </div>
        `;

        // Append the card to the container
        cardContainer.appendChild(card);
    });
}

// Function to filter reserves
function filterReserves(category) {
    let filteredReserves;

    switch (category) {
        case 'old':
            filteredReserves = reserves.filter(reserve => new Date(reserve.opened).getFullYear() < 2000);
            break;
        case 'new':
            filteredReserves = reserves.filter(reserve => new Date(reserve.opened).getFullYear() >= 2000);
            break;
        case 'large':
            filteredReserves = reserves.filter(reserve => reserve.area > 10000);
            break;
        case 'small':
            filteredReserves = reserves.filter(reserve => reserve.area < 9500);
            break;
        default:
            filteredReserves = reserves;
    }

    createReserveCards(filteredReserves);
}

// Add event listeners to navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links
        document.querySelectorAll('nav ul li a').forEach(l => l.classList.remove('active'));

        // Add active class to clicked link
        e.target.classList.add('active');

        // Get filter category from data attribute
        const category = e.target.getAttribute('data-filter');

        // Filter reserves
        filterReserves(category);
    });
});

// Initial page load - create all reserve cards
document.addEventListener('DOMContentLoaded', () => {
    // Create initial reserve cards
    createTempleCards(reserves);

    // Set current year
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Updated: ${lastModifiedDate}`;
});