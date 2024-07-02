import "../styles/ArtDetails.css";
import { PropTypes } from "prop-types";

function ArtDetails({ art, onClose }) {
  return (
    <section className="modal-artDetails">
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
        <picture className="modal-picture-artDetails">
          <img src={art.image} alt={art.title} />
        </picture>
        <h2>
          {art.title ? art.title.toUpperCase() : "TITRE - "}
          {art.title && art.artist && " - "}
          {art.artist ? art.artist : "Artiste"}
        </h2>
        <p>
          {art.description
            ? art.description
            : "Aucune description n'est disponible pour le moment."}
        </p>
      </article>
    </section>
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
    image: '',
    title: '',
    artist: '',
    description: '',
  },
};

export default ArtDetails;
