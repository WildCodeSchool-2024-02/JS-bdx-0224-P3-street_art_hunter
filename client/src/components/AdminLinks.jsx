import { Link } from "react-router-dom";

function AdminLinks() {
  return (
    <section className="admin-links-section">
      <Link to="/userlist" className="admin-links-link">
        Liste des utilisateurs
      </Link>
      <Link to="/artlist" className="admin-links-link">
        Aperçu des oeuvres
      </Link>
      <Link to="/validation" className="admin-links-link">
        Validation des ajouts
      </Link>
    </section>
  );
}

export default AdminLinks;
