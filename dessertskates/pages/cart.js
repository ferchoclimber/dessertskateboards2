// pages/cart.js
import { useCart } from '../context/CartContext';
import Link from 'next/link';
import styles from '../styles/Cart.module.css'; // Asegúrate de tener este archivo para estilos

export default function Cart() {
  const { cartItems, clearCart } = useCart();

  return (
    <div className={styles.container}>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className={styles.cartList}>
            {cartItems.map((item, index) => (
              <li key={index} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.cartItemImage} />
                <div className={styles.cartItemDetails}>
                  <h2>{item.name}</h2>
                  <p>${item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className={styles.clearCartButton} onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
      <Link href="/">
        <a className={styles.backToShopButton}>Back to Shop</a>
      </Link>
    </div>
  );
}
