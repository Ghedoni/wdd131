// Footer copyright and last modified date setup
function updateFooterDates() {
    const yearSpan = document.getElementById('year');
    const modifiedSpan = document.getElementById('last-modified');
    
    // Get the current year
    const currentYear = new Date().getFullYear();
    
    // Get the last modified date of the document
    const lastModified = document.lastModified;

    // Update footer elements
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
    if (modifiedSpan) {
        modifiedSpan.textContent = lastModified;
    }
}

// Toggle hamburger menu
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    // Add event listener for the hamburger click
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        
        // Toggle between menu icon and 'X' symbol
        if (hamburger.textContent === '✖') {
            hamburger.textContent = '☰'; // Menu icon
        } else {
            hamburger.textContent = '✖'; // Close icon
        }
    });
}

// Initialize functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    updateFooterDates();  // Update footer with year and last modified date
    toggleMenu();         // Initialize hamburger menu toggle
});
