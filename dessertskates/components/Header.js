// components/Header.js
import React from 'react';

const Header = () => (
  <header>
    <div className="container">
      <div className="logo">
        <img src="/imagenes/death.jpg" width="120" height="120" alt="Logo" />
        <a className="luckiest_guy_regular">Death Dessert Skateboards</a>
      </div>

      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a>
            <ul className="submenu">
              <li><a href="#">Trucks</a></li>
              <li><a href="#">Llantas</a></li>
              <li><a href="#">Tablas</a></li>
            </ul>
          </li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>

      <div className="search-icon">
        <input type="text" placeholder="Buscar..." />
        <button>&#128269;</button>
        <button className="cart-btn" onClick={toggleCart}>Cart</button>
      </div>
    </div>
  </header>
);

const toggleCart = () => {
  // Logic to toggle cart visibility
};

export default Header;
