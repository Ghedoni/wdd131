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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Detroit Michigan Temple",
        location: "Michigan, United States",
        dedicated: "1999, October, 23-24",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/detroit-michigan-temple/photographs/#Gallery-13"
      }
      {
        templeName: "Bountiful Utah Temple",
        location: "Bountiful, Utah, U.S.A",
        dedicated: "1995, January, 14",
        area: 9662,
        imageUrl:
        "https://churchofjesuschristtemples.org/bountiful-utah-temple/photographs/#Gallery-37jpg"
      }
      {
        templeName: "Nashville Tennessee Temple",
        location: "Franklin, Tennessee United States",
        dedicated: "2000, May, 21",
        area: 994,
        imageUrl:
        "https://churchofjesuschristtemples.org/nashville-tennessee-temple/photographs/#Gallery-5jpg"
      }
  ];