const reserves = [
    {
        reserveName: "Dinokeng Game Reserve",
        location: "Gauteng Province, South Africa",
        opened: "2011-09-22",
        area: 20000,
        imageUrl: "https://i.ibb.co/TWTHcQH/dinokeng-game1.webp",
        category: "new"
    },
    {
        reserveName: "Thula Thula Private Game Reserve",
        location: "KwaZulu Natal Province, South Africa",
        opened: "1911-01-01",
        area: 4500,
        imageUrl: "https://i.ibb.co/FDw0C8W/thula-thula-private1.webp",
        category: "old"
    },
    {
        reserveName: "Shamwari Private Game Reserve",
        location: "Eastern Cape Province, South Africa",
        opened: "1992-01-01",
        area: 250,
        imageUrl: "https://i.ibb.co/FY7Cbmt/shamwari-private1.webp",
        category: "old"
    },
    {
        reserveName: "Kariega Game Reserve",
        location: "Eastern Cape Province, South Africa",
        opened: "1989-01-01",
        area: 10000,
        imageUrl: "https://i.ibb.co/1mk9ZBz/kariega-game1.webp",
        category: "old"
    },
    {
        reserveName: "Amakhala Game Reserve",
        location: "Eastern Cape Province, South Africa",
        opened: "1999-10-29",
        area: 7400,
        imageUrl: "https://i.ibb.co/tYHf1Wc/amakhala-game1.webp",
        category: "old"
    },
    {
        reserveName: "Kololo Game Reserve",
        location: "Limpopo Province, South Africa",
        opened: "1980-01-01",
        area: 3000,
        imageUrl: "https://i.ibb.co/k8T114M/kololo-game1.webp",
        category: "old small"
    },
    {
        reserveName: "Imfolozi Game Reserve",
        location: "KwaZulu Natal Province, South Africa",
        opened: "1895-01-01",
        area: 96000,
        imageUrl: "https://i.ibb.co/qk1hyKC/imfolozi-game1.webp",
        category: "old large"
    },
    {
        reserveName: "Pilanesberg National Park",
        location: "North West Province, South Africa",
        opened: "1979-01-01",
        area: 57250,
        imageUrl: "https://i.ibb.co/zsScy8V/pilanesberg-game1.webp",
        category: "old large"
    },
    {
        reserveName: "Madikwe Game Reserve",
        location: "North West Province, South Africa",
        opened: "1994-01-01",
        area: 80000,
        imageUrl: "https://i.ibb.co/qnNTbYJ/madikwe-game1.webp",
        category: "old large"
    }
];

// Improved URL validation
function isValidUrl(url) {
    try {
        const parsedUrl = new URL(url);
        return parsedUrl.protocol === 'https:';
    } catch {
        console.warn(`Invalid URL: ${url}`);
        return false;
    }
}

// Robust date parsing
function parseYear(dateString) {
    try {
        return new Date(dateString).getFullYear();
    } catch {
        console.warn(`Could not parse date: ${dateString}`);
        return null;
    }
}

// Create reserve cards with enhanced error handling
function createReserveCards(reserveList) {
    const cardContainer = document.getElementById('cardContainers');

    // Clear existing cards
    cardContainer.innerHTML = '';

    // Error handling for empty list
    if (!reserveList || reserveList.length === 0) {
        cardContainer.innerHTML = '<p>No reserves found. Please try another filter.</p>';
        return;
    }

    // Loop through reserves and create cards
    reserveList.forEach(reserve => {
        const card = document.createElement('div');
        card.className = 'reserve-card';

        // Improved image URL handling
        const imageUrl = (isValidUrl(reserve.imageUrl)) 
            ? reserve.imageUrl 
            : 'https://via.placeholder.com/300x200?text=Reserve+Image';

        // Add reserve information with safe fallbacks
        card.innerHTML = `
            <img 
                src="${imageUrl}" 
                alt="${reserve.reserveName} Reserve" 
                loading="lazy"
                onerror="this.src='https://via.placeholder.com/300x200?text=Image+Error'"
            >
            <div class="reserve-info">
                <h3>${reserve.reserveName} Reserve</h3>
                <p><strong>Location:</strong> ${reserve.location || 'Location Not Specified'}</p>
                <p><strong>Dedicated:</strong> ${parseYear(reserve.opened) || 'Year Unknown'}</p>
                <p><strong>Size:</strong> ${reserve.area ? reserve.area.toLocaleString() + ' sq ft' : 'Size Not Available'}</p>
            </div>
        `;

        cardContainer.appendChild(card);
    });
}

// Enhanced reserve filtering
function filterReserves(category) {
    // Handle 'home' category to show all reserves
    if (category === 'home') {
        createReserveCards(reserves);
        return;
    }

    // Filter reserves based on category
    const filteredReserves = reserves.filter(reserve => 
        reserve.category.split(' ').includes(category)
    );

    createReserveCards(filteredReserves);
}

// Add event listeners to navigation links
function initializeNavigation() {
    const navLinks = document.querySelectorAll('nav ul li a[data-filter]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            e.target.classList.add('active');

            // Get filter category
            const category = e.target.getAttribute('data-filter');

            // Filter reserves
            filterReserves(category);
        });
    });
}

// Initialize page on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        // Create initial reserve cards
        createReserveCards(reserves);

        // Initialize navigation
        initializeNavigation();

        // Set current year
        const currentYear = new Date().getFullYear();
        const yearElement = document.getElementById('year');
        if (yearElement) yearElement.textContent = currentYear;

        // Set last modified date
        const lastModifiedElement = document.getElementById('lastModified');
        if (lastModifiedElement) {
            const lastModifiedDate = document.lastModified;
            lastModifiedElement.textContent = `Last Updated: ${lastModifiedDate}`;
        }
    } catch (error) {
        console.error('Page initialization error:', error);
    }
});