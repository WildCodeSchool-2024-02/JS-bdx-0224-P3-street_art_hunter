import { BsPersonCircle, BsGeoAlt, BsTrophy } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src="./src/assets/images/logo.png"
          alt="Logo PixHunt redirigeant vers la page d'accueil"
          className="logo"
        />
      </Link>
      <ul className="navLists">
        <li className="navList">
          <NavLink className="link-navIcon" to="/position">
            <BsGeoAlt className="navIcon" />
          </NavLink>
        </li>
        <li className="navList">
          <NavLink className="link-navIcon" to="/trophy">
            <BsTrophy className="navIcon" />
          </NavLink>
        </li>
        <li className="navList">
          <NavLink className="link-navIcon" to="/profile">
            <BsPersonCircle className="navIcon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
