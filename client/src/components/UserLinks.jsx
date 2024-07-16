import { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

function UserLinks() {
  const { auth } = useContext(CurrentUserContext);
  return (
    <section className="user-links-section">
      <Link to={`/profile/${auth.id}`} className="user-links-link">
        Informations personnelles
      </Link>
    </section>
  );
}

export default UserLinks;
