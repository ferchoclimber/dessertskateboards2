// components/Footer.js
import React from 'react';

const Footer = () => (
  <footer>
    <div className="container2">
      <div className="logo2">
        <img src="/imagenes/skeleton-sitting-desert-death-valley-california-usa-skeleton-desert-environment-pollution-causing-end-297488646.webp" width="200" height="200" alt="Logo" />
      </div>
      <div className="columnas">
        <div className="columna">
          <h4>COLABORACIONES</h4>
          <ul>
            <li><a href="#">4ta Skateshop</a></li>
            <li><a href="#">Imperio</a></li>
            <li><a href="#">Medusa Skate shop</a></li>
          </ul>
        </div>
        <div className="columna">
          <h4>GRUPOS SOCIALES</h4>
          <ul>
            <li><a href="#">Patina Chihuahua</a></li>
            <li><a href="#">Papi Gang</a></li>
            <li><a href="#">Criaz</a></li>
          </ul>
        </div>
        <div className="columna">
          <h4>MARCAS PRINCIPALES</h4>
          <ul>
            <li><a href="#">Primitive</a></li>
            <li><a href="#">Almost</a></li>
            <li><a href="#">Spitfire</a></li>
            <li><a href="#">Tenzor</a></li>
            <li><a href="#">April Skateboards</a></li>
          </ul>
        </div>
      </div>
      <div className="redes-sociales">
        <a href="#"><i className='bx bxl-facebook-circle'></i></a>
        <a href="#"><i className='bx bxl-instagram-alt'></i></a>
        <a href="#"><i className='bx bxl-twitter'></i></a>
        <a href="#"><i className='bx bxl-youtube'></i></a>
      </div>
    </div>
  </footer>
);

export default Footer;
