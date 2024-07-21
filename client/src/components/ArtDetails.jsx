import "../styles/ArtDetails.css";
import { PropTypes } from "prop-types";

function ArtDetails({ art, onClose }) {
  return (
    <dialog className="modal-artDetails" open>
      <header>
        <button
          type="button"
          aria-label="Fermer la fenêtre"
          onClick={onClose}
          className="close-artDetails"
        >
          X
        </button>
      </header>
      <article className="modal-content-artDetails">
        <img
          src={art.image}
          alt={art.title}
          className="modal-picture-artDetails"
        />

        <h2>
          {art.title}
          {art.title && art.artist && " - "}
          {art.artist}
        </h2>
        <p className={art.description && "modal-artDetails-description"}>
          {art.description}
        </p>
      </article>
    </dialog>
  );
}

ArtDetails.propTypes = {
  art: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    artist: PropTypes.string,
    description: PropTypes,
  }),
  onClose: PropTypes.func.isRequired,
};

ArtDetails.defaultProps = {
  art: {
    image: "",
    title: "",
    artist: "",
    description: "",
  },
};

export default ArtDetails;
