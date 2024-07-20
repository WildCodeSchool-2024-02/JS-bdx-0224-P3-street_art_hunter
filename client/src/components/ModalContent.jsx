import { PropTypes } from "prop-types";

function ModalContent({ onClose }) {
  return (
    <section className="modal">
      <button
        type="button"
        className="close-button"
        onClick={onClose}
        aria-label="Bouton fermer"
      >
        x
      </button>
      <h2>Bienvenue !</h2>
      <section className="section2">
        <p>Avec PixHunt, partez à la chasse aux œuvres d’art urbaines.</p>
        <p>
          Photographiez de nouvelles œuvres d’art à partir de votre téléphone
          pour gagner des points : cliquez sur l’appareil photo et laissez-vous
          guider.
        </p>
        <p>Explorez, découvrez et amusez-vous!</p>
      </section>
    </section>
  );
}
ModalContent.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalContent;
