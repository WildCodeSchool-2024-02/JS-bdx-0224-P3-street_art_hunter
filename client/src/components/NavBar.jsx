import { BsPersonCircle, BsGeoAlt, BsTrophy } from "react-icons/bs";
import { PropTypes } from "prop-types";
import { Link, NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function Navbar({ id }) {
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
          <NavLink className="link-navIcon" to={`/profile/${id}`}>
            <BsPersonCircle className="navIcon" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Navbar;
