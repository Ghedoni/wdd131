const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
  document.addEventListener("DOMContentLoaded", () => {
    // Array of product objects
    const products = [
        { id: "product1", name: "Product 1" },
        { id: "product2", name: "Product 2" },
        { id: "product3", name: "Product 3" },
        { id: "product4", name: "Product 4" }
    ];

    // Get the product dropdown
    const productSelect = document.getElementById("productName");

    // Populate the dropdown with products from the array
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Review submission counter using localStorage
    const reviewCounterKey = "reviewCounter";

    // Check if review.html is loaded and update review count
    if (window.location.pathname.includes("review.html")) {
        let reviewCount = localStorage.getItem(reviewCounterKey);
        reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
        localStorage.setItem(reviewCounterKey, reviewCount);

        // Display review count
        document.body.innerHTML = `<h1>Thank you for your review!</h1><p>You've submitted ${reviewCount} reviews.</p>`;
    }
});
