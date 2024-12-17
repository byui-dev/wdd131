// Game Reserves data will be defined here
const reserves = [
    {
        id: 1,
        reserveName: "Dinokeng Game Reserve",
        location: "Gauteng Province, South Africa",
    },
    {
        id: 2,
        reserveName: "Thula Thula Private Game Reserve",
        location: "KwaZulu Natal Province, South Africa",
    },
    {
        id: 3,
        reserveName: "Shamwari Private Game Reserve",
        location: "Eastern Cape Province, South Africa",
    },
    {
        id: 4,
        reserveName: "Kariega Game Reserve",
        location: "Eastern Cape Province, South Africa",
    },
    {
        id: 5,
        reserveName: "Amakhala Game Reserve",
        location: "Eastern Cape Province, South Africa",
    },
    {
        id: 6,
        reserveName: "Kololo Game Reserve",
        location: "Limpopo Province, South Africa",
    },
    {
        id: 7,
        reserveName: "Imfolozi Game Reserve",
        location: "KwaZulu Natal Province, South Africa" ;
    },
    {
        id: 8,
        reserveName: "Pilanesberg National Park",
        located: "North West Province, South Africa"
    },
    {
        id: 9,
        reserveName: "Madikwe Game Reserve",
        located: "North West Province, South Africa",
    },
]

// Populate Reserve Dropdown
function populateReserveDropdown() {
    const reserveSelect = document.getElementById('reserveSelect');

    reserves.forEach(reserve => {
        const option = document.createElement('option');
        option.value = reserve.id;
        option.textContent = `${reserve.reserveName} - ${reserve.location}`;
        reserveSelect.appendChild(option);
    });

    // Form Submission Handler
    function handleBookingSubmission(event) {
        event.preventDefault();
    }

    // Collect form data
    const formData = {
        reserveId: document.getElementById('reserveSelect').value,
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        arrivalDate: document.getElementById('arrivalDate').value,
        departureDate: document.getElementById('departureDate').value,
        guests: document.getElementById('guests').value,
    };

    // Basic validation
    if (!validateBookingForm(formData)) {
        alert('Please fill in all required fields correctly.');
        return;
    }

    // Simulate booking submission 
    console.log('Booking Submitted:', FormData);
    alert('Your booking has been submitted successfully!');

    // Reset form
    event.target.reset();
}

// Form validation
function validateBookingForm(formData) {
    const { reserveId, fullName, email, arrivalDate, departureDate, guests } = formData;
}

// Check if all fields are filled
if (!reserveId || !fullName || !email || !arrivalDate || !departureDate || !guests) {
    return false;
}

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    return false;
}

