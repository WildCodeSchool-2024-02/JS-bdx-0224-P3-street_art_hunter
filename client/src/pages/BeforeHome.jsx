import "../styles/BeforeHome.css";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function BeforeHome() {
  return (
    <section className="before-home-container">
      <article>
        <img
          className="gorille-art"
          src="../src/assets/images/gorille-art-bdx-2.webp"
          alt="oeuvre d'art représentant un gorille"
        />
      </article>
      <article className="left-content">
        <img
          className="img-site"
          src="../src/assets/images/new-logo-pixhunt-Photoroom.webp"
          alt="logo du site"
        />

        <p className="welcome-sentence">
          La chasse au
          <span className="street-art"> Street Art </span>
          peut commencer !
        </p>

        <NavLink to="/home" className="nav-link">
          <BsArrowRight className="bs-arrow-right" />
        </NavLink>
      </article>
    </section>
  );
}

export default BeforeHome;
