document.addEventListener('DOMContentLoaded', function() {
    // Get the review form
    const reviewForm = document.getElementById('reviewForm');

// Get the review count display element 
const reviewCountDisplay = document.getElementById('reviewCount');

//initialize review count from localStorage or set to 0 if it does not exist
let reviewCount = localStorage.getItem('reviewCount')
    ? parseInt(localStorage.getItem('reviewCount'))
    : 0;

// Display initial review count
reviewCountDisplay.textContent = reviewCount;

// Add submit event listener to the form
reviewForm.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Increment review count
    reviewCount++;

    // Store the updated count in localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Update the display
    reviewCountDisplay.textContent = reviewCount;

    // submit the form
    this.submit();
  });
});  

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();






