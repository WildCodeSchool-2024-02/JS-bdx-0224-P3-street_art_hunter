import { Link } from "react-router-dom";
import "../styles/LogoLogoutMobile.css";
import logoImg from "../assets/images/logo.png";

function LogoMobile() {
  return (
    <Link to="/">
      <img
        src={logoImg}
        alt="Logo pour retourner à l'accueil"
        className="logo-mobile"
      />
    </Link>
  );
}

export default LogoMobile;
