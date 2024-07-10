import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";
import logoutIcon from "../assets/images/logout-icon.png";
import "../styles/LogoLogoutMobile.css";

function LogoutMobile() {
  const { logout } = useContext(CurrentUserContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Link to="/" onClick={handleLogout}>
      <img
        src={logoutIcon}
        alt="logo pour la déconnexion"
        className="logout-icon"
      />
    </Link>
  );
}

export default LogoutMobile;
