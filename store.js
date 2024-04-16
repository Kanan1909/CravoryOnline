function addToCart(product, price, quantity) {
    const productDetails = {
      name: product,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };
  
    // Save the productDetails object in session storage
    sessionStorage.setItem(product, JSON.stringify(productDetails));
  }