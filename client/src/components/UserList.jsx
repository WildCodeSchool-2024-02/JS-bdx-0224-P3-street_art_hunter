import { PropTypes } from "prop-types";

function UserList({ user }) {

  return (
    <section className="UserList-info-section">
      <h2 className="UserList-info-title">Liste des utilisateurs</h2>
      <article className="UserList-info-article">
      <p>Pseudo</p>
      <p>{user.username}</p>
      </article>
    </section>
  )
}

UserList.propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  };

export default UserList
