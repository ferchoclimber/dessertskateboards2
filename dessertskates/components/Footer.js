import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Skate Shop. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <Link href="/privacy" passHref>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" passHref>
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/contact" passHref>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <style jsx>{`
        footer {
          background-color: #333;
          color: white;
          padding: 20px 0;
          text-align: center;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 10px 0;
        }
        .footer-links li {
          display: inline;
          margin: 0 10px;
        }
        .footer-links a {
          color: white;
          text-decoration: none;
        }
        @media (max-width: 768px) {
          .footer-links {
            display: block;
          }
          .footer-links li {
            display: block;
            margin: 5px 0;
          }
        }
      `}</style>
    </footer>
  );
}
