import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);

  return (
    <nav>
      <div className="container">
        <Link href="/" passHref>
          Skate Shop
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/products" passHref>
              Products
            </Link>
          </li>
          <li>
            <button
              className="submenu-toggle"
              onClick={() => setSubmenuOpen(!isSubmenuOpen)}
            >
              Categories
            </button>
            {isSubmenuOpen && (
              <ul className="submenu">
                <li>
                  <Link href="/category/skateboards" passHref>
                    Skateboards
                  </Link>
                </li>
                <li>
                  <Link href="/category/accessories" passHref>
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="/category/clothing" passHref>
                    Clothing
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/contact" passHref>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        nav {
          background-color: #333;
          color: white;
          padding: 10px 0;
        }
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
        }
        .submenu {
          display: block;
          background-color: #444;
          position: absolute;
          top: 100%;
          left: 0;
          list-style: none;
          padding: 0;
          margin: 0;
          border: 1px solid #666;
        }
        .submenu li {
          padding: 10px;
        }
        .submenu li a {
          color: white;
        }
        .submenu-toggle {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .nav-links {
            flex-direction: column;
            display: none;
          }
          .nav-links.active {
            display: flex;
          }
          .submenu {
            position: relative;
          }
        }
      `}</style>
    </nav>
  );
}
