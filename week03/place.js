// place.js
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    const yearSpan = document.getElementById('year');
    yearSpan.textContent = new Date().getFullYear();

    // Set last modified date
    const lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = `Last Modified: ${document.lastModified}`;

    // Wind Chill Calculation (if needed)
    const temperature = 29; // from HTML
    const windSpeed = 10; // from HTML
    const windChillSpan = document.getElementById('windChill');
    
    // Simple wind chill calculation
    if (temperature <= 50 && windSpeed > 3) {
        const windChill = 35.74 + (0.6215 * temperature) - 
                          (35.75 * Math.pow(windSpeed, 0.16)) + 
                          (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        windChillSpan.textContent = `${Math.round(windChill)}°C`;
    } else {
        windChillSpan.textContent = 'Not Applicable';
    }
});