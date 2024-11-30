document.addEventListener('DOMContentLoaded', function () {
    // Set current year
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Updated: ${lastModifiedDate}`;

    // Wind Chill Calculation
    const temperature = 29; // Replace with actual temperature value if available dynamically
    const windSpeed = 10; // Replace with actual wind speed value if available dynamically

    function calculateWindChill(temp, speed) {
        if (temp <= 10 && speed > 4.8) { // Conditions for wind chill calculation
            return (
                13.12 +
                0.6215 * temp -
                11.37 * Math.pow(speed, 0.16) +
                0.3965 * temp * Math.pow(speed, 0.16)
            ).toFixed(1);
        } else {
            return "N/A";
        }
    }

    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChill !== "N/A" ? `${windChill}°C` : windChill;
});
