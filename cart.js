function getCartItems() {
  const cartItems = {};
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (key.startsWith('product-')) {
      cartItems[key] = JSON.parse(sessionStorage.getItem(key));
    }
  }
  return cartItems;
}

function displayCart() {
  const cartItems = getCartItems();
  const cartTable = document.getElementById('cart-table');
  let totalPrice = 0;

  // Clear existing rows
  cartTable.innerHTML = '';

  // Add new rows
  for (const key in cartItems) {
    const item = cartItems[key];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${item.quantity}</td>
      <td>${item.price * item.quantity}</td>
    `;
    totalPrice += item.price * item.quantity;
    cartTable.appendChild(row);
  }

  // Display total price
  document.getElementById('total-price').innerText = `Total: ${totalPrice}`;
}

// Call displayCart() function on page load
document.addEventListener('DOMContentLoaded', () => {
  displayCart();
});