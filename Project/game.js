const reserves = [
    {
        reserveName: "Dinokeng Game Reserve",
        location: "Gauteng Province, South Africa",
        opened: "2011, September, 22",
        area: 20000,
        imageUrl: "https://i.ibb.co/TWTHcQH/dinokeng-game1.webp"
    },
    {
        reserveName: "Thula Thula Private Game Reserve",
        location: "KwaZulu Natal Province, South Africa",
        opened: "1911",
        area: 4500,
        imageUrl: "https://i.ibb.co/FDw0C8W/thula-thula-private1.webp"
    },
    {
        reserveName: "Shamwari Private Game Reserve",
        location: "Eastern Cape Province, South Africa",
        opened: "1992",
        area: 250,
        imageUrl: "https://i.ibb.co/FY7Cbmt/shamwari-private1.webp"
    },
    {
        reserveName: "Kariega Game Reserve",
        location: "Eastern Cape Province, South Africa",
        opened: "1989",
        area: 10000,
        imageUrl: "https://i.ibb.co/1mk9ZBz/kariega-game1.webp"
    },
    {
        reserveName: "Amakhala Game Reserve",
        location: "Eastern Cape Province, South Africa",
        opened: "1999, October, 29",
        area: 7400,
        imageUrl: "https://i.ibb.co/tYHf1Wc/amakhala-game1.webp"
    },
    {
        reserveName: "Kololo Game Reserve",
        location: "Limpopo Province, South Africa",
        opened: "1980",
        area: 3000,
        imageUrl: "https://i.ibb.co/k8T114M/kololo-game1.webp"
    },
    {
        reserveName: "Imfolozi Game Reserve",
        location: "KwaZulu Natal Province, South Africa",
        opened: "1895",
        area: 96000,
        imageUrl: "https://i.ibb.co/qk1hyKC/imfolozi-game1.webp"
    },

    {
        reserveName: "Pilanesberg National Park",
        location: "North West Province, South Africa",
        opened: "1979",
        area: 57250,
        imageUrl: "https://i.ibb.co/zsScy8V/pilanesberg-game1.webp"
    },
    
    {
        reserveName: "Madikwe Game Reserve",
        location: "North West Province, South Africa",
        opened: "1994",
        area: 80000,
        imageUrl: "https://i.ibb.co/qnNTbYJ/madikwe-game1.webp"
    }
];

// Function to validate URLs
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

// Function to create reserve cards
function createReserveCards(reserveList) {
    const cardContainer = document.getElementById('cardContainers');

    // Clear existing cards
    cardContainer.innerHTML = '';

    // Loop through the array of reserves and create cards
    reserveList.forEach(reserve => {
        const card = document.createElement('div');
        card.className = 'reserve-card';

        // Ensure image URL is valid or use a placeholder
        const imageUrl = isValidUrl(reserve.imageUrl) ? reserve.imageUrl : 'https://via.placeholder.com/300x200?text=No+Image';

        // Add the reserve's information
        card.innerHTML = `
            <img src="${imageUrl}" alt="${reserve.reserveName} Reserve" loading="lazy">
            <div class="reserve-info">
                <h3>${reserve.reserveName} Reserve</h3>
                <p><strong>Location:</strong> ${reserve.location}</p>
                <p><strong>Dedicated:</strong> ${reserve.opened}</p>
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
            filteredReserves = reserves.filter(reserve => new Date(reserve.opened).getFullYear() < 1990);
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
    createReserveCards(reserves);

    // Set current year
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Updated: ${lastModifiedDate}`;
});