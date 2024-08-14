// components/ProductList.js
import React from 'react';
import styles from '../styles/ProductList.module.css'; // Asegúrate de que la ruta sea correcta

const products = [
  { id: 1, image: '/imagenes/tabla1.webp', name: 'Producto 1', description: 'Descripción breve del producto.', price: '$19.99' },
  { id: 2, image: '/imagenes/tabla2.jpg', name: 'Producto 2', description: 'Descripción breve del producto.', price: '$29.99' },
  { id: 3, image: '/imagenes/tabla3.jpg', name: 'Producto 3', description: 'Descripción breve del producto.', price: '$29.99' },
  { id: 4, image: '/imagenes/tabla4.webp', name: 'Producto 4', description: 'Descripción breve del producto.', price: '$29.99' },
  { id: 5, image: '/imagenes/tabla5.webp', name: 'Producto 5', description: 'Descripción breve del producto.', price: '$29.99' },
  { id: 6, image: '/imagenes/tabla6.webp', name: 'Producto 6', description: 'Descripción breve del producto.', price: '$29.99' },
  { id: 7, image: '/imagenes/tabla7.webp', name: 'Producto 7', description: 'Descripción breve del producto.', price: '$29.99' },
  { id: 8, image: '/imagenes/tabla8.webp', name: 'Producto 8', description: 'Descripción breve del producto.', price: '$29.99' },
  { id: 9, image: '/imagenes/tabla9.jpg', name: 'Producto 9', description: 'Descripción breve del producto.', price: '$29.99' },
  { id: 10, image: '/imagenes/tabla10.jpg', name: 'Producto 10', description: 'Descripción breve del producto.', price: '$29.99' },
  { id: 11, image: '/imagenes/tabla11.jpg', name: 'Producto 11', description: 'Descripción breve del producto.', price: '$29.99' },
  { id: 12, image: '/imagenes/tabla12.webp', name: 'Producto 12', description: 'Descripción breve del producto.', price: '$29.99' },
  { id: 13, image: '/imagenes/tabla13.webp', name: 'Producto 13', description: 'Descripción breve del producto.', price: '$29.99' },
  { id: 14, image: '/imagenes/ruedas-skate-oj-wheels.avif', name: 'Ruedas Skate', description: 'Descripción breve del producto.', price: '$29.99' }
];

const ProductList = () => {
  const addToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  return (
    <section className={styles.products}>
      <h2>Productos Destacados</h2>
      <div className={styles.productList}>
        {products.map((product) => (
          <article key={product.id} className={styles.productItem}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className={styles.price}>{product.price}</p>
            <button onClick={() => addToCart(product.name)}>Add to Cart</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
