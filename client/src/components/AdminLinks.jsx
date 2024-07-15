import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AdminLinks({ classNameBody, classNameSection }) {
  return (
    <section className={classNameSection}>
      <Link to="/admin" className={classNameBody}>
        Sommaire
      </Link>
      <Link to="/admin/users" className={classNameBody}>
        Liste des utilisateurs
      </Link>
      <Link to="/admin/artlist" className={classNameBody}>
        Aperçu des oeuvres
      </Link>
      <Link to="/admin/validation" className={classNameBody}>
        Validation des ajouts
      </Link>
    </section>
  );
}

AdminLinks.propTypes = {
  classNameBody: PropTypes.string.isRequired,
  classNameSection: PropTypes.string.isRequired,
};

export default AdminLinks;
