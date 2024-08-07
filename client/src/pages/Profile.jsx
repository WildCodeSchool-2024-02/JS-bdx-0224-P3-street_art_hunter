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
  const { sortedUsers, userData, pictureData } = useLoaderData();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="profile-section-wrapper">
      <article className="profile-article">
        <section className="link-admin-section">
          {auth?.role === 1 && (
            <Link to="/admin" className="link-admin">
              Page d'administration
            </Link>
          )}
        </section>
        <section className="profile-desktop-wrapper">
          <article className="profile-info-wrapper">
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
          </article>
          <ProfilePoints user={userData} sortedUsers={sortedUsers} />
        </section>
        {isOpen && <ProfileDelete user={userData} onClose={handleCloseModal} />}

        <ProfileContributions pictureData={pictureData} />
      </article>
    </section>
  );
}

export default Profile;
