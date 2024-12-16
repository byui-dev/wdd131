document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the current year and set it in the footer
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = currentYear;

    // 2. Get the last modified date and set it in the footer
    const lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = "Last Modified: " + document.lastModified;

    // 3. Define an array of game reserves with their IDs, names, and average ratings
    const reserves = [
        { id: "dg-2007", name: "Dinokeng Game Reserve", averagerating: 4.5 },
        { id: "tt-2020", name: "Thula Thula Private Game Reserve", averagerating: 4.7 },
        { id: "sp-1990", name: "Shamwari Private Game Reserve", averagerating: 3.5 },
        { id: "kg-2005", name: "Kariega Game Reserve", averagerating: 3.9 },
        { id: "ag-1910", name: "Amakhala Game Reserve", averagerating: 5.0 },
        { id: "kl-1989", name: "Kololo Game Reserve", averagerating: 5.0 },
        { id: "ig-1919", name: "Imfolozi Game Reserve", averagerating: 5.0 },
        { id: "pg-1979", name: "Pilanesberg National Park", averagerating: 5.0 },
        { id: "mg-1985", name: "Madikwe Game Reserve", averagerating: 5.0 }
    ];

    // 4. Function to populate the game reserve dropdown
    function populateReserveDropdown() {
        // Get the select element for game reserves
        const reserveSelect = document.querySelector('select[name="reserve"]');
        reserveSelect.setAttribute('aria-label', 'Select a Game Reserve');

        // Ensure reserves array is not empty
        if (reserves.length === 0) {
            console.warn("No game reserves available.");
            return;
        }

        // Iterate through the reserves array
        reserves.forEach(reserve => {
            const option = document.createElement('option');
            option.value = reserve.id; // Set the reserve's ID as the option value
            option.textContent = `${reserve.name} (Avg. Rating: ${reserve.averagerating})`;
            reserveSelect.appendChild(option);
        });
    }

    // 5. Call the function to populate the dropdown
    populateReserveDropdown();
});
