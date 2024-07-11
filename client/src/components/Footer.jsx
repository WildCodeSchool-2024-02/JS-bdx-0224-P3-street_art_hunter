import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h2>PixHunt</h2>
      <ul>
        <Link to="/contact" className="link-inline-item">
          <li className="inline-item">Contact</li>
        </Link>
        <Link to="/credits" className="link-inline-item">
          <li className="inline-item">Credits</li>
        </Link>
        <li className="date">@2024</li>
      </ul>
    </footer>
  );
}

export default Footer;
