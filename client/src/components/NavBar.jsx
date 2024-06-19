import { BsPersonCircle, BsGeoAlt, BsTrophy } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        className="logo"
        src="./src/assets/images/logo.webp"
        alt="logo pixhunter"
      />
      <ul className="navLists">
        <li className="navList">
          <NavLink className="link-navIcon" to="/position">
            <BsGeoAlt className="navIcon" />
            <p className="navText">Page d'accueil</p>
          </NavLink>
        </li>
        <li className="navList">
          <NavLink className="link-navIcon" to="/trophy">
            <BsTrophy className="navIcon" />
            <p className="navText">Classement</p>
          </NavLink>
        </li>
        <li className="navList">
          <NavLink className="link-navIcon" to="/profile">
            <BsPersonCircle className="navIcon" />
            <p className="navText">Page de profil</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
