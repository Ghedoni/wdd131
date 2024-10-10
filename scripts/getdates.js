// JavaScript for Temple Album (temples.js)

// Function to dynamically set the footer copyright year and last modified date
function updateFooterDates() {
    const yearElement = document.getElementById('year');
    const lastModifiedElement = document.getElementById('last-modified');

    // Set the current year
    yearElement.textContent = new Date().getFullYear();

    // Set the last modification date (formatted)
    const lastModified = document.lastModified;
    lastModifiedElement.textContent = lastModified;
}

// Function to toggle the hamburger menu
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');

    // Toggle the visibility of the navbar
    navbar.classList.toggle('show');

    // Change the button symbol between ☰ and ✖
    if (navbar.classList.contains('show')) {
        hamburger.textContent = '✖'; // Change to 'X' when menu is open
    } else {
        hamburger.textContent = '☰'; // Change back to '☰' when menu is closed
    }
}

// Event listeners for dynamic updates
window.onload = () => {
    updateFooterDates(); // Update footer on page load

    // Add click event listener to the hamburger menu button
    const hamburger = document.getElementById('hamburger');
    hamburger.addEventListener('click', toggleMenu);
};
