import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import homeIcon from "../assets/images/home.svg";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";
import profileIcon from "../assets/images/profile.svg";
import trophyIcon from "../assets/images/trophy.svg";
import logoIcon from "../assets/images/logo.png";
import menuBurgerIcon from "../assets/images/menuBurger.svg";

defineElement(lottie.loadAnimation);

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const { auth, logout } = useContext(CurrentUserContext);

  const navigate = useNavigate();

  const handleCameraClick = () => {
    navigate("/camera");
  };

  const handleClickMenuBurger = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="navbar">
      <Link to="/">
        <img
          src={logoIcon}
          alt="Logo PixHunt redirigeant vers la page d'accueil"
          className="logo"
        />
      </Link>
      <ul className="navLists">
        <li className="navList">
          <NavLink className="navlink" to="/">
            <figure>
              <img
                src={homeIcon}
                alt="Retour à l'accueil"
                className="icon-navbar"
              />
              <figcaption>Accueil</figcaption>
            </figure>
          </NavLink>
        </li>
        <li className="navList">
          <NavLink className="navlink" to="/score">
            <figure>
              <img
                src={trophyIcon}
                alt="Page de classement"
                className="icon-navbar"
              />
              <figcaption>Classement</figcaption>
            </figure>
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
        <li className="navList loginNav-connect">
          {!auth?.id && (
            <NavLink className="loginNav" to="/login">
              Se connecter
            </NavLink>
          )}
        </li>
        <li className="navList">
          <NavLink
            className="navlink loginNav-inscription-profile"
            to={auth?.id ? `/profile/${auth?.id}` : "/login"}
          >
            <figure>
              <img
                src={profileIcon}
                alt="Page de profil"
                className="icon-navbar"
              />
              <figcaption>{auth?.id ? "Mon profil" : "Inscription"}</figcaption>
            </figure>
          </NavLink>
        </li>
        {auth?.id && (
          <li className="navList loginNav-disconnect">
            <NavLink to="/" onClick={handleLogout} className="navLink">
              Se déconnecter
            </NavLink>
          </li>
        )}
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
      {isOpen && (
        <section className="articleBurger">
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
        </section>
      )}
    </nav>
  );
}

export default NavBar;
