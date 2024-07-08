import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ProfileInfo from "../components/ProfileInfo";
import ProfilePoints from "../components/ProfilePoints";
import ProfileDelete from "../components/ProfileDelete";
import "../styles/Profile.css";
import ProfileContributions from "../components/ProfileContributions";

function Profile() {

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
    <>
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
      {isOpen && (
        <ProfileDelete user={userData} onClose={handleCloseModal} />
      )}
      <ProfilePoints userData={userData} />
      <ProfileContributions pictureData={pictureData} />
    </>
  );
}

export default Profile;
