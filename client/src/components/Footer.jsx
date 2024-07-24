import "../styles/Footer.css";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const selectedPage = location.pathname;

  return (
    <footer
      className={
        selectedPage === "/home"
          ? "footer-position-fixed"
          : "footer-normal-position"
      }
    >
      <h2>PixHunt</h2>
      <ul>
        <li className="inline-item">
          <Link to="/contact" className="link-inline-item">
            Contact
          </Link>
        </li>
        <li className="inline-item">
          <Link to="/credits" className="link-inline-item">
            Crédits
          </Link>
        </li>
        <li className="date">2024</li>
      </ul>
    </footer>
  );
}

export default Footer;
