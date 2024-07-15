import { useState, useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "../styles/NavBar.css";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import homeIcon from "../assets/images/home.svg";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";
import profileIcon from "../assets/images/profile.svg";
import trophyIcon from "../assets/images/trophy.svg";
import logoIcon from "../assets/images/logo.png";
import menuBurger from "../assets/images/menuBurger.svg";
import menuCross from "../assets/images/menuCross.svg";

defineElement(lottie.loadAnimation);

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuBurgerIcon, setMenuBurgerIcon] = useState(menuBurger);

  const { auth, logout } = useContext(CurrentUserContext);

  const location = useLocation();
  const selectedPage = location.pathname;

  const navigate = useNavigate();

  const handleCameraClick = () => {
    navigate("/camera");
  };

  const handleClickMenuBurger = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    if (isOpen === false) {
      setMenuBurgerIcon(menuCross);
    } else if (isOpen === true) {
      setMenuBurgerIcon(menuBurger);
    }
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
            <figure className={selectedPage === "/" && "figure-navbar-active"}>
              <img src={homeIcon} alt="Accueil" className="icon-navbar" />
              <figcaption
                className={
                  selectedPage === "/"
                    ? "figcaption-navbar-active"
                    : "figcaption-navbar-normal"
                }
              >
                Accueil
              </figcaption>
            </figure>
          </NavLink>
        </li>
        <li className="navList">
          <NavLink className="navlink" to="/score">
            <figure
              className={selectedPage === "/score" && "figure-navbar-active"}
            >
              <img
                src={trophyIcon}
                alt="Page de classement"
                className="icon-navbar"
              />
              <figcaption
                className={
                  selectedPage === "/score"
                    ? "figcaption-navbar-active"
                    : "figcaption-navbar-normal"
                }
              >
                Classement
              </figcaption>
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
        <li className="navList">
          <NavLink
            className="navlink"
            to={auth?.id ? `/profile/${auth?.id}` : "/login"}
          >
            <figure
              className={
                (selectedPage === `/profile/${auth?.id}` ||
                  selectedPage === `/profile/${auth?.id}/edit` ||
                  selectedPage === "/login" ||
                  selectedPage === "/admin") &&
                "figure-navbar-active"
              }
            >
              <img
                src={profileIcon}
                alt="Page de profil"
                className="icon-navbar"
              />
              <figcaption
                className={
                  selectedPage === `/profile/${auth?.id}` ||
                  selectedPage === `/profile/${auth?.id}/edit` ||
                  selectedPage === "/login" ||
                  selectedPage === "/admin"
                    ? "figcaption-navbar-active"
                    : "figcaption-navbar-normal"
                }
              >
                {auth?.id ? "Mon profil" : "Se connecter"}
              </figcaption>
            </figure>
          </NavLink>
        </li>
        {!auth?.id && (
          <li className="navList nav-inscription">
            <NavLink className="navlink" to="/register">
              Inscription
            </NavLink>
          </li>
        )}
        {auth?.id && (
          <li className="navList loginNav-disconnect">
            <NavLink
              to="/"
              onClick={handleLogout}
              className="figcaption-navbar-active"
            >
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
              <NavLink className="navLink" to="/contact">
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
