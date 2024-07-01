import { PropTypes } from "prop-types";

function DeleteProfile({ user, onClose }) {

  return (
    <section className="modal-deleteProfile">
      <header>
        <button
          type="button"
          aria-label="Fermer la fenêtre"
          onClick={onClose}
          className="close-deleteProfile"
        >
          X
        </button>
      </header>
      <article className="modal-content-deleteProfile">
        <p>Voulez-vous vraiment supprimer votre profil ? {user.username}</p>
        {/* rajouter un autre p si l'utilisateur est administrateur : "Voulez-vous vraiment supprimer le profil de ... ?" */}
        <button
          type="button"
          aria-label="Fermer la fenêtre"
          onClick={onClose}
          //   créer une logique de déconnexion, suppression du compte en back-end et renvoi vers la page d'accueil
          className="delete-deleteProfile"
        >
          Supprimer
        </button>
        <button
          type="button"
          aria-label="Fermer la fenêtre"
          onClick={onClose}
          className="cancel-deleteProfile"
        >
          Annuler
        </button>
      </article>
    </section>
  );
}

DeleteProfile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DeleteProfile;
