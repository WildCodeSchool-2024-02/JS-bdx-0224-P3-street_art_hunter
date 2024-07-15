import PropTypes from "prop-types";
import StreetArtList from "../components/StreetArtList";

function AdminStreetArtPage() {
  const images = [
    { id: 1, src: "../src/assets/images/artgallery_2.webp" },
    { id: 2, src: "../src/assets/images/artgallery11.webp" },
    { id: 3, src: "../src/assets/images/artgallery5.webp" },
    { id: 4, src: "../src/assets/images/artgallery4.webp" },
    { id: 5, src: "../src/assets/images/artgallery7.webp" },
    { id: 6, src: "../src/assets/images/artgallery6.webp" },
    { id: 7, src: "../src/assets/images/artgallery3.webp" },
    { id: 8, src: "../src/assets/images/artgallery9.webp" },
    { id: 9, src: "../src/assets/images/artgallery10.webp" },
    { id: 10, src: "../src/assets/images/artgallery8.webp" },
  ];
  const limitedImages = images.slice(0, 12); 

  return (
    <section className="Admin-Street-Art">
      <StreetArtList images={limitedImages} />
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

export default AdminStreetArtPage;
