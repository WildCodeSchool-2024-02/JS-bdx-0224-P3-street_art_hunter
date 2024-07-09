import { Link } from "react-router-dom";
import logoutIcon from "../assets/images/logout-icon.png";
import "../styles/LogoLogoutMobile.css";

function LogoutMobile() {
  return (
    <Link to="/">
      <img
        src={logoutIcon}
        alt="logo pour la déconnexion"
        className="logout-icon"
      />
    </Link>
  );
}

export default LogoutMobile;
