// import { useLoaderData } from "react-router-dom";

// import { useState } from "react";
import "../styles/Profile.css";
import { PropTypes } from "prop-types";

function PersonalInfo({ user }) {
  // const userInfo = useLoaderData();

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
      <button
        type="button"
        aria-label="Modifier les informations"
        className="profile-information-edit-button"
      >
        Modifier
      </button>
      <button
        type="button"
        aria-label="Supprimer le profil"
        className="profile-delete-button"
      >
        Supprimer mon profil
      </button>
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
