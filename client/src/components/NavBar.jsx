import { BsPersonCircle, BsGeoAlt, BsTrophy } from "react-icons/bs";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar-mobile">
        <ul className="navbar-list-mobile">
          <li className="navbar-item">
            <NavLink to="/position">
              <BsGeoAlt className="navbar-link-mobile" />
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/trophy">
              <BsTrophy className="navbar-link-mobile" />
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/profile">
              <BsPersonCircle className="navbar-link-mobile" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="navbar-desktop">
        <img
          className="logo"
          src="../src/assets/images/LOGO PH.jpg"
          alt="logo pixhunter"
        />
        <ul className="navbar-list-desktop">
          <li className="navbar-item">
            <NavLink className="navbar-link-desktop" to="/position">
              Page d'accueil
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="navbar-link-desktop" to="/trophy">
              Classement
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink className="navbar-link-desktop" to="/profile">
              Page d'instruction
            </NavLink>
          </li>
          <li className="navbar-item">Se connecter</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
