import PropTypes from "prop-types";
import "../styles/Profile.css";

function ProfilePoints({ user }) {
  return (
    <section className="profile-points-section">
      <h2 className="profile-points-title">Mes points</h2>
      <article className="profile-points-article">
        <p>Nombre de points :</p>
        <p>{user.point_number}</p>
        <p>Classement :</p>
        <p>3/12</p>
      </article>
    </section>
  );
}

ProfilePoints.propTypes = {
  user: PropTypes.shape({
    point_number: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProfilePoints;
