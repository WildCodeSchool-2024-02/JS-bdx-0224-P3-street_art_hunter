import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";
import logoutIcon from "../assets/images/logout-icon.png";
import "../styles/LogoLogoutMobile.css";

function LogoutMobile() {
  const { auth, logout } = useContext(CurrentUserContext);
  const [showModal, setShowModal] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
      window.location.href = "/";
    }, 5000);
  };

  return (
    <article>
      {auth?.id && (
        <Link to="/" onClick={handleLogout}>
          <img
            src={logoutIcon}
            alt="logo pour la déconnexion"
            className="logout-icon"
          />
        </Link>
      )}
      {showModal && (
        <div className="logout-modal-mobile">
          <div className="logout-container-mobile">
            <p className="logout-message-mobile">
              Vous avez bien été déconnecté
            </p>
            <div className="loader-mobile" />
          </div>
        </div>
      )}
    </article>
  );
}

export default LogoutMobile;
