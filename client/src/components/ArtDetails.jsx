import "../styles/ArtDetails.css";
import { PropTypes } from "prop-types";

function ArtDetails({ art, onClose }) {
  const artUrl = import.meta.env.VITE_API_URL;
  const imagePath = `${artUrl}/assets/images/upload/${art.image}`;
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
          src={imagePath}
          alt={art.title}
          className="modal-picture-artDetails"
        />
        <h2>
          {art.title}
          {art.title && art.artist && " - "}
          {art.artist}
        </h2>
        <p className={art.information && "modal-artDetails-description"}>
          {art.information}
        </p>
      </article>
    </dialog>
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
