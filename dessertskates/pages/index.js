import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

export default function Home() {
  // Define el estado para los elementos del carrito
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Ejemplo de producto
  const sampleProduct = {
    name: 'Skateboard X',
    price: 99.99
  };

  // Función para agregar productos al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      <Navbar />
      <header>
        <h1>Skate Shop</h1>
        <button onClick={() => setCartOpen(!cartOpen)}>
          {cartOpen ? 'Close Cart' : 'Open Cart'}
        </button>
      </header>

      <main>
        <h2>Our Skateboards</h2>
        <div className="product">
          <h3>{sampleProduct.name}</h3>
          <p>${sampleProduct.price}</p>
          <button onClick={() => addToCart(sampleProduct)}>Add to Cart</button>
        </div>
        {cartOpen && (
          <Cart items={cartItems} onClear={clearCart} />
        )}
      </main>

      <Footer />

      <style jsx>{`
        header {
          padding: 20px;
          background-color: #333;
          color: white;
          text-align: center;
        }
        .product {
          padding: 20px;
          border: 1px solid #ddd;
          margin: 20px;
          text-align: center;
        }
        button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
}
