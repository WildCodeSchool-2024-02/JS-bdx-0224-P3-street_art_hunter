import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import "../styles/Profile.css";

function PersonalInfo({ user, handleModify }) {
  return (
    <section className="profile-information-section">
      <h2 className="profile-information-title">Mes informations</h2>
      <article className="profile-information-article">
        <p>Pseudo</p>
        <p>{user.username}</p>
        <p>Ville</p>
        <p>{user.city}</p>
        <p>E-mail</p>
        <p>{user.email}</p>
      </article>
      <Link
        to={`/profile/${user.id}/edit`}
        aria-label="Informations"
        className="profile-information-edit-button"
        onClick={handleModify}
      >
        Modifier
      </Link>
    </section>
  );
}

PersonalInfo.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
  handleModify: PropTypes.func.isRequired,
};

PersonalInfo.defaultProps = {
  user: {
    id: 0,
    username: '',
    city: '',
    email: '',
  },
};

export default PersonalInfo;
