import "../styles/AdminStreetArtPage.css";
import PropTypes from "prop-types";

function StreetArtList({ images }) {
  return (
    <section className="artlist-section-wrapper">
      <article className="artlist-article">
        <h2 className="title-artgallery">
          Oeuvres ajoutées par les utilisateurs
        </h2>
        <ul className="gallery-list">
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
};

export default StreetArtList;
