// Example JavaScript for some functionality like Buy Now buttons
document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Your item has been added to the cart!');
    });
});

// Read more button toggle functionality
document.querySelector('.read-more-btn').addEventListener('click', function () {
    const aboutText = document.querySelector('#about p');
    if (aboutText.style.display === 'none') {
        aboutText.style.display = 'block';
        this.textContent = 'Read Less';
    } else {
        aboutText.style.display = 'none';
        this.textContent = 'Read More';
    }
});
