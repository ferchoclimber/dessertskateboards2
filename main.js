let cartItems = [];

// Función para agregar productos al carrito
function addToCart() {
  const product = {
    name: 'Skateboard X',
    price: 99.99
  };
  cartItems.push(product);
  updateCart();
}

// Función para mostrar/ocultar el carrito
function toggleCart() {
  const cart = document.getElementById('cart');
  if (cart.style.display === 'none' || cart.style.display === '') {
    cart.style.display = 'block';
  } else {
    cart.style.display = 'none';
  }
}

// Función para limpiar el carrito
function clearCart() {
  cartItems = [];
  updateCart();
}

// Función para actualizar la visualización del carrito
function updateCart() {
  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = '';
  if (cartItems.length === 0) {
    cartItemsList.innerHTML = '<p>Your cart is empty</p>';
  } else {
    cartItems.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsList.appendChild(li);
    });
  }
}
