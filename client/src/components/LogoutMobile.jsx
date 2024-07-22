import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";
import logoutIcon from "../assets/images/logout-icon.png";
import "../styles/LogoLogoutMobile.css";

function LogoutMobile() {
  const { auth, logout } = useContext(CurrentUserContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <article>
      {auth?.id && (
        <Link to="/home" onClick={handleLogout}>
          <img
            src={logoutIcon}
            alt="logo pour la déconnexion"
            className="logout-icon"
          />
        </Link>
      )}
    </article>
  );
}

export default LogoutMobile;
