import { useState } from "react";
import { Form } from "react-router-dom";
import { PropTypes } from "prop-types";
import "../styles/ArtDetails.css";

function ArtDetails({ art, onClose }) {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(art.title);
  const [artist, setArtist] = useState(art.artist);
  const [description, setDescription] = useState(art.description);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour mettre à jour les informations d'art (title, artist, description)
    // Exemple : updateArt({ title, artist, description });
    toggleEditMode(); // Repasser en mode affichage normal après la modification
  };

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
        {editMode ? (
          <Form method="put" onSubmit={handleSubmit}>
            <label htmlFor="title">Titre</label>{" "}
            <input
              type="text"
              id={title}
              /* peut-être mettre "title" */
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titre de l'œuvre"
            />
            {/* voir si mettre des value dans les input */}
            <input
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="Nom de l'artiste"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description de l'œuvre"
            />
            <button type="submit">Proposer</button>
            <button type="button" onClick={toggleEditMode}>
              Annuler
            </button>
          </Form>
        ) : (
          <>
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
            <button
          type="button"
          aria-label="Modifier les informations"
          onClick={toggleEditMode} // Définissez cette fonction pour gérer le passage en mode édition
          className="edit-artDetails"
        >
          Modifier
        </button>
          </>
        )}
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
    image: "",
    title: "",
    artist: "",
    description: "",
  },
};

export default ArtDetails;
