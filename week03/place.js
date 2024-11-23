document.addEventListener('DOMContentLoaded', function () {
    // Set current year
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Updated: ${lastModifiedDate}`;
});