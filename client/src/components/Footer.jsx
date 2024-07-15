import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h2>PixHunt</h2>
      <ul>
        <li className="inline-item">
          {" "}
          <Link to="/contact" className="link-inline-item">
            Contact
          </Link>
        </li>
        <li className="inline-item">
          <Link to="/credits" className="link-inline-item">
            Credits{" "}
          </Link>
        </li>
        <li className="date">@2024</li>
      </ul>
    </footer>
  );
}

export default Footer;
