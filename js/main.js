// Get the container where products will appear
var productContainer = document.getElementById("product-list");

// Only run if the container exists
if (productContainer) {
  // Go through every product in the list
  for (var i = 0; i < products.length; i++) {
    var product = products[i];

    // Add product card to the page
    productContainer.innerHTML +=
      '<div class="product-card">' +
      "<h3>" +
      product.name +
      "</h3>" +
      "<p>Price: $" +
      product.price +
      "</p>" +
      '<button onclick="addToCart(' +
      product.id +
      ')">Add to Cart</button>' +
      "</div>";
  }
}
