document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the current year and set it in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;

    // 2. Increment and store the number of reviews in local storage
    function incrementReviewCount() {
        // Retrieve the current count from localStorage
        let reviewCount = localStorage.getItem('reviewCount');
        reviewCount = reviewCount ? parseInt(reviewCount, 10) : 0;

        // Increment the count and store it back in localStorage
        reviewCount += 1;
        localStorage.setItem('reviewCount', reviewCount);
    }

    // 3. Display the current review count in the console (optional, for debugging)
    function displayReviewCount() {
        const reviewCount = localStorage.getItem('reviewCount') || 0;
        console.log(`Total reviews submitted: ${reviewCount}`);
    }

    // Increment the review count on page load
    incrementReviewCount();

    // Optional: Display the review count in the console
    displayReviewCount();
});
