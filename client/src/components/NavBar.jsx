import { BsPersonCircle, BsGeoAlt, BsTrophy } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

function Navbar() {
  const { auth, logout } = useContext(CurrentUserContext);

  const handleLogout = () => {
    logout();
  };

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
          <NavLink className="link-navIcon" to="/">
            <BsGeoAlt className="navIcon" />
          </NavLink>
        </li>
        <li className="navList">
          <NavLink className="link-navIcon" to="/trophy">
            <BsTrophy className="navIcon" />
          </NavLink>
        </li>
        <li className="navList">
          <NavLink className="link-navIcon" to="/register">
            <BsPersonCircle className="navIcon" />
          </NavLink>
        </li>
        <li className="navList">
          <NavLink className="link-navIcon" to={`/profile/${auth?.id}`}>
            <BsPersonCircle className="navIcon" />
          </NavLink>
        </li>
        <li className="navList">
          <button type="button" onClick={handleLogout}>
            LogOut
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
