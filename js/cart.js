// Load cart from storage
var cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add product to cart
function addToCart(productId) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id === productId) {
      cart.push(products[i]);
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  displayCart();
  openCart();
}

// Remove item
function removeFromCart(index) {
  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();
  displayCart();
}

// Open cart
function openCart() {
  document.getElementById("cart-sidebar").classList.add("active");
}

// Close cart
function closeCart() {
  document.getElementById("cart-sidebar").classList.remove("active");
}

// Show items inside cart
function displayCart() {
  var cartItems = document.getElementById("cart-items");

  if (!cartItems) return;

  cartItems.innerHTML = "";

  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];

    total += item.price;

    cartItems.innerHTML +=
      "<div>" +
      "<p>" +
      item.name +
      " - $" +
      item.price +
      "</p>" +
      '<button onclick="removeFromCart(' +
      i +
      ')">Remove</button>' +
      "</div>";
  }

  document.getElementById("total-price").innerText = "Total: $" + total;
}

// Update number in cart button
function updateCartCount() {
  var cartCount = document.getElementById("cart-count");

  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}

// Run when page loads
updateCartCount();
displayCart();
