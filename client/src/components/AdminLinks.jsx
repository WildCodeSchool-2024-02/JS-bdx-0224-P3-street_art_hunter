import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AdminLinks({ classNameBody, classNameNav }) {
  return (
    <nav
      className={classNameNav}
      aria-label="Lien vers les pages réservées aux administrateurs"
    >
      <Link to="/admin" className={classNameBody}>
        Statistiques
      </Link>
      <Link to="/admin/users" className={classNameBody}>
        Liste des utilisateurs
      </Link>
      <Link to="/admin/artlist" className={classNameBody}>
        Aperçu des oeuvres
      </Link>

      <Link to="/validation" className="admin-links-link">
        Validation des ajouts
      </Link>
    </nav>
  );
}

AdminLinks.propTypes = {
  classNameBody: PropTypes.string.isRequired,
  classNameNav: PropTypes.string.isRequired,
};

export default AdminLinks;
