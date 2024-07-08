import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import PropTypes from 'prop-types';

function ProfileContributions({ pictureData }) {
  const pictureUrl = import.meta.env.VITE_API_URL;

  return (
    <section className="profile-contributions-section">
      <h2 className="profile-main-titles">Mes contributions</h2>
      <Splide
        options={{
          type: "slide", // Type de transition
          perPage: 10, // Nombre d'images par page par défaut
          breakpoints: {
            768: {
              perPage: 3, // 1 image par page pour les écrans > 768px
            },
          },
          gap: 8,
          pagination: false, 
        }}
      >
        {pictureData.map((picture) => (
          <SplideSlide key={picture}>
            <img src={`${pictureUrl}${picture.image}`} alt={`added by ${picture.user_id}`} className="profile-added-image" />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

ProfileContributions.propTypes = {
  pictureData: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default ProfileContributions;
