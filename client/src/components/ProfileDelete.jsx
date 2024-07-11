import { PropTypes } from "prop-types";
import { TfiHandStop } from "react-icons/tfi";

function ProfileDelete({ onClose }) {
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
        <TfiHandStop className="hand-icon-deleteProfile" />
        <p>Êtes-vous sûr de vouloir supprimer votre profil ?</p>
        <p>
          Cette action est irréversible et entraînera la perte de toutes vos
          données.
        </p>
        <button
          type="submit"
          aria-label="Fermer la fenêtre"
          className="confirm-deleteProfile"
        >
          Confirmer
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

ProfileDelete.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProfileDelete;
