import "../styles/ArtDetails.css";
import { PropTypes } from "prop-types";

function ArtDetails({ art, onClose }) {
  const artUrl = import.meta.env.VITE_API_URL;
  const imagePath = `${artUrl}${art.image}`;

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
        {art.image ? (
          <picture className="modal-picture-artDetails">
            <img src={imagePath} alt={art.title} />
          </picture>
        ) : (
          <p>Aucune image disponible</p>
        )}
        <h2>
          {art.title ? art.title.toUpperCase() : "TITRE - "}
          {art.title && art.artist && " - "}
          {art.artist ? ` - ${art.artist}` : null}
        </h2>
        <p>
          {art.information
            ? art.information
            : "Aucune description n'est disponible pour le moment."}
        </p>
      </article>
    </section>
  );
}

ArtDetails.propTypes = {
  art: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    artist: PropTypes.string,
    information: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

ArtDetails.defaultProps = {
  art: {
    image: "",
    title: "",
    artist: "",
    information: "",
  },
};

export default ArtDetails;
