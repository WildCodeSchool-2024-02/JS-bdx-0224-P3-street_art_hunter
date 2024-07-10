import { Link, useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";
import ProfileInfo from "../components/ProfileInfo";
import ProfilePoints from "../components/ProfilePoints";
import ProfileDelete from "../components/ProfileDelete";
import "../styles/Profile.css";
import ProfileContributions from "../components/ProfileContributions";

function Profile() {
  const { auth } = useContext(CurrentUserContext);
  const loaderData = useLoaderData();
  const { userData, pictureData } = loaderData;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="profile-section-wrapper">
      <section className="profile-section">
        <article className="link-adminPage-article">
          {auth?.role === 1 && (
            <Link to="/admin" className="link-adminPage">
              Page d'administration
            </Link>
          )}
        </article>
        <ProfileInfo user={userData} />
        <article className="profile-delete-button-wrapper">
          <button
            type="submit"
            aria-label="Supprimer le profil"
            className="profile-delete-button"
            onClick={handleOpenModal}
          >
            Supprimer mon profil
          </button>
        </article>
        {isOpen && <ProfileDelete user={userData} onClose={handleCloseModal} />}
        <ProfilePoints userData={userData} />
        <ProfileContributions pictureData={pictureData} />
      </section>
    </section>
  );
}

export default Profile;
