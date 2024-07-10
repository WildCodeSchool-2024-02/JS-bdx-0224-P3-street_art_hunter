import { Link } from "react-router-dom";

function UserLinks() {
  return (
    <section className="user-links-section">
      {/* modifier le link pour qu'il pointe bien vers l'id de l'auth */}
      <Link to="/profile/:id" className="user-links-link">
        Informations personnelles
      </Link>
    </section>
  );
}

export default UserLinks;
