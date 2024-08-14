export default function Cart({ items }) {
    const removeFromCart = (index) => {
      // Lógica para eliminar el producto del carrito
    };
  
    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        {items.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => { /* Lógica para vaciar el carrito */ }}>Clear Cart</button>
  
        <style jsx>{`
          .cart {
            border: 1px solid #ddd;
            padding: 20px;
            max-width: 400px;
            margin: 20px auto;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
          }
          button {
            background-color: #f00;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
          }
          button:hover {
            background-color: #d00;
          }
        `}</style>
      </div>
    );
  }
