// import { useLoaderData } from "react-router-dom";
import { PropTypes } from "prop-types";
import "../styles/Profile.css";

function PersonalInfo({ user }) {
  // const userInfo = useLoaderData();
  // const selectedUser = userInfo à comparer avec l'id de connexion et ne garder que ce user

  return (
    <section className="profile-information-section">
      <h2 className="profile-information-title">Mes informations</h2>
      <article className="profile-information-article">
        <p>Pseudo</p>
        <p>{user.username}</p>
        <p>Ville</p>
        <p>{user.city}</p>
        {/* Penser à mettre le nom récupérer de la BDD */}
        <p>E-mail</p>
        <p>{user.email}</p>
        {/* Penser à mettre le nom récupérer de la BDD */}
      </article>
    </section>
  );
}

PersonalInfo.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonalInfo;
