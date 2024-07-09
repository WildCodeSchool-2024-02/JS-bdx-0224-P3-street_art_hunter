import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import homeIcon from "../assets/images/home.svg";
import profileIcon from "../assets/images/profile.svg";
import trophyIcon from "../assets/images/trophy.svg";

import menuBurgerIcon from "../assets/images/menuBurger.svg";

defineElement(lottie.loadAnimation);

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleCameraClick = () => {
    navigate("/camera");
  };

  const handleClickMenuBurger = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

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
            onClick={handleCameraClick}
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
          <button
            type="button"
            className="btnMenuBurger"
            onClick={handleClickMenuBurger}
          >
            <img
              src={menuBurgerIcon}
              alt="Menu dirigeant vers d'autres pages"
              className="menuBurger"
            />
          </button>
        </li>
      </ul>
      {isOpen ? (
        <article className="articleBurger">
          <ul>
            <li>
              <NavLink className="navLink" to="/">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="navLink" to="/register">
                Crédits
              </NavLink>
            </li>
          </ul>
        </article>
      ) : null}
    </nav>
  );
}

export default NavBar;
