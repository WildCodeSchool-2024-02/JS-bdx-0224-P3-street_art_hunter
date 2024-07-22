import "../styles/AdminStreetArtPage.css";
import PropTypes from "prop-types";
import BtnGoBack from "./BtnGoBack";

function StreetArtList({ images, pictures }) {
  const artUrl = import.meta.env.VITE_API_URL;

  return (
    <section className="artlist-section-wrapper">
      <article className="artlist-article">
        <BtnGoBack />
        <h2 className="title-artgallery">
          Oeuvres ajoutées par les utilisateurs
        </h2>
        <ul className="gallery-list">
          {pictures.map((picture) => (
            <li key={picture.id} className="img">
              <img
                src={`${artUrl}${picture.image}`}
                alt={`oeuvre d'art ${picture.id}`}
              />
            </li>
          ))}
          {images.map((image, index) => (
            <li key={image.id} className={`img${index + 1}`}>
              <img
                className={`image${index + 1}`}
                src={image.src}
                alt={`oeuvre d'art ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

StreetArtList.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  pictures: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StreetArtList;
