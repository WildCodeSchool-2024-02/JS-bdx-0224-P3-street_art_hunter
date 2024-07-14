import PropTypes from "prop-types";
import "../styles/Profile.css";

function ProfilePoints({ sortedUsers, user }) {
  const userRank =
    1 + sortedUsers.findIndex((sortedUser) => sortedUser.id === user.id);

  return (
    <section className="profile-points-section">
      <h2 className="profile-points-title">Mes points</h2>
      <article className="profile-points-article">
        <p>Nombre de points :</p>
        <p>{user.point_number}</p>
        <p>Classement :</p>
        <p>
          {userRank}/{sortedUsers.length}
        </p>
      </article>
    </section>
  );
}

ProfilePoints.propTypes = {
  sortedUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      point_number: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
    })
  ).isRequired,
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    point_number: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProfilePoints;
