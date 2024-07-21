import { PropTypes } from "prop-types";
import { Form } from "react-router-dom";
import { TfiHandStop } from "react-icons/tfi";

function ProfileDelete({ onClose }) {
  return (
    <dialog className="modal-delete-profile" open>
      <header>
        <button
          type="button"
          aria-label="Fermer la fenêtre"
          onClick={onClose}
          className="close-delete-profile"
        >
          X
        </button>
      </header>
      <article className="modal-content-delete-profile">
        <TfiHandStop className="hand-icon-delete-profile" />
        <p>Êtes-vous sûr de vouloir supprimer votre profil ?</p>
        <p>
          Cette action est irréversible et entraînera la perte de toutes vos
          données.
        </p>
        <Form method="delete">
          <button
            type="submit"
            aria-label="Fermer la fenêtre"
            className="confirm-delete-profile"
          >
            Confirmer
          </button>
        </Form>
        <button
          type="button"
          aria-label="Fermer la fenêtre"
          onClick={onClose}
          className="cancel-delete-profile"
        >
          Annuler
        </button>
      </article>
    </dialog>
  );
}

ProfileDelete.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ProfileDelete;
