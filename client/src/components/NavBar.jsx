import { Link, NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import PropTypes from "prop-types";
import menuIcon from "../assets/images/menu.svg";
import homeIcon from "../assets/images/home.svg";
import profileIcon from "../assets/images/profile.svg";
import trophyIcon from "../assets/images/trophy.svg";

defineElement(lottie.loadAnimation);

function NavBar({ handleTakePhoto }) {
  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src="./src/assets/images/new-logo-pixhunt-Photoroom.webp"
          alt="logo pixhunter"
          className="logo"
        />
      </Link>
      <ul className="navLists">
        <li className="navList">
          <NavLink className="navlink" to="/">
            <img
              src={homeIcon}
              alt="Retour à l'accueil"
              className="icon-navbar"
            />
            <span>Accueil</span>
          </NavLink>
        </li>
        <li className="navList">
          <NavLink className="navlink" to="/trophy">
            <img
              src={trophyIcon}
              alt="Page de classement"
              className="icon-navbar"
            />
            <span>Classement</span>
          </NavLink>
        </li>
        <li className="navList">
          <button
            type="button"
            aria-labelledby="button-camera"
            className=" active camera-icon"
            onClick={handleTakePhoto}
          >
            <lord-icon
              className="icon"
              src="https://cdn.lordicon.com/vczwnict.json"
              trigger="loop"
              delay="2500"
              stroke="bold"
              colors="primary:#F165D2,secondary:#F165D2"
              style={{ width: "3.75rem", height: "3.75rem" }}
            />
          </button>
        </li>
        <li className="navList">
          <NavLink className="loginNav" to="/login">
            Se connecter
          </NavLink>
        </li>
        <li className="navList">
          <NavLink className="navlink" to="/register">
            <img
              src={profileIcon}
              alt="Page de profil"
              className="icon-navbar"
            />
            <span className="spanInscription">Inscription</span>
          </NavLink>
        </li>
        <li className="navList">
          <NavLink className="navlink" to="/contact">
            <img src={menuIcon} alt="Menu" className="icon-navbar" />
          </NavLink>
        </li>
      </ul>

      {/* <span className="menu_border">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="menu"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path
              d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"
            />
          </clipPath>
        </svg>
      </span> */}
    </nav>
  );
}

NavBar.propTypes = {
  handleTakePhoto: PropTypes.func.isRequired,
};

export default NavBar;
