let cart = [];

function addToCart(itemName, price,quantity) {
  const quantity = parseInt(document.getElementById(`b1`).value);
  const itemTotal = price * quantity;

  let item = {
    name: itemName,
    price: price,
    quantity: quantity,
    total: itemTotal
  };

  // Check if item already exists in cart
  let existingItem = cart.find(i => i.name === itemName);
  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.total += itemTotal;
  } else {
    cart.push(item);
  }

  updateCart();
}

function updateCart() {
  const cartElement = document.getElementById("cart");
  cartElement.innerHTML = "";
  let totalPrice = 0;

  cart.forEach(item => {
    const tr = document.createElement("tr");

    const imgCell = document.createElement("td");
    const img = document.createElement("img");
    img.src = `images/brownie/${item.name.toLowerCase().replace(/ /g, '')}.png`;
    img.alt = item.name;
    img.width = 50;
    imgCell.appendChild(img);
    tr.appendChild(imgCell);

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    tr.appendChild(nameCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = `Rs. ${item.price.toFixed(2)}`;
    tr.appendChild(priceCell);

    const quantityCell = document.createElement("td");
    quantityCell.textContent = item.quantity;
    tr.appendChild(quantityCell);

    const totalCell = document.createElement("td");
    totalCell.textContent = `Rs. ${item.total.toFixed(2)}`;
    tr.appendChild(totalCell);

    cartElement.appendChild(tr);

    totalPrice += item.total;
  });

  // Display total price
  const totalRow = document.createElement("tr");
  const totalLabelCell = document.createElement("td");
  totalLabelCell.colSpan = 4;
  totalLabelCell.textContent = "Total:";
  totalRow.appendChild(totalLabelCell);

  const totalPriceCell = document.createElement("td");
  totalPriceCell.textContent = `Rs. ${totalPrice.toFixed(2)}`;
  totalRow.appendChild(totalPriceCell);

  cartElement.appendChild(totalRow);
}

function checkout() {
  // You can add logic here to handle the checkout process, such as redirecting to a payment page or processing the order.
  alert("Redirecting to checkout page...");
}
