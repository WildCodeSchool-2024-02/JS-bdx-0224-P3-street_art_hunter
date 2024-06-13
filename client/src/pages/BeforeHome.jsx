import "../styles/BeforeHome.css";
import { NavLink } from "react-router-dom";
// import {BsArrowRight} from "react-icons/bs"

function BeforeHome() {
  return (
    <>
      {/* <p>Page d'accueil</p> */}

      <img
        className="gorille-art"
        src="../src/assets/images/gorille-art-bdx-2.jpg"
        alt="gorille-art"
      />
      <h1 className="title-site">PixHunt</h1>
      <p className="welcome-sentence">
        La chasse au <span className="street-art">Street Art</span> peut
        commencer !
      </p>
      {/* <BsArrowRight className="bs-arrow-right"/> */}
      <NavLink to="/mappage">
        <button className="formButton" type="submit">
          Enter
        </button>
      </NavLink>
    </>
  );
}

export default BeforeHome;
