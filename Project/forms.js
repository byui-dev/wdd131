// Initial reserves data
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


// Helper function to populate drop-down menu
function populateReserveDropdown() {
    const dropdown = document.getElementById('reserve');

    // Clear existing options
    dropdown.innerHTML = '<option value="" disabled selected>Select a Game Reserve</option>';

    // Add reserves to the dropdown
    reserves.forEach(reserve => {
        const option = document.createElement('option');
        option.value = reserve.reserveName;
        option.textContent = reserve.reserveName;
        dropdown.appendChild(option);
    });
}

// Function to add a new reserve
function addNewReserve(event) {
    event.preventDefault();

    const newReserve = {
        reserveName: document.getElementById('newReserveName').value,
        location: document.getElementById('newLocation').value,
        opened: document.getElementById('newOpened').value,
        area: parseInt(document.getElementById('newArea').value, 10),
        imageUrl: document.getElementById('newImageUrl').value,
        category: document.getElementById('newCategory').value
    };

    // Validate inputs
    if (!newReserve.reserveName || !newReserve.location || !newReserve.opened || !newReserve.area || !newReserve.imageUrl || !newReserve.category) {
        alert('Please fill out all fields.');
        return;
    }

    reserves.push(newReserve);

    // Update the dropdown
    populateReserveDropdown();

    // Reset the form
    document.getElementById('reserveForm').reset();

    alert('New reserve added successfully!');
}

// Function to set current year in the footer
function setCurrentYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Function to set the last modified date
function setLastModifiedDate() {
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Updated: ${document.lastModified}`;
    }
}

// Initialize the page
function initializePage() {
    // Populate the dropdown menu
    populateReserveDropdown();

    // Set current year and last modified date
    setCurrentYear();
    setLastModifiedDate();

    // Attach event listener to add reserve form
    const reserveForm = document.getElementById('reserveForm');
    if (reserveForm) {
        reserveForm.addEventListener('submit', addNewReserve);
    }
}

// Run initialization on DOMContentLoaded
document.addEventListener('DOMContentLoaded', initializePage);
