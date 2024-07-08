import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ProfileInfo from "../components/ProfileInfo";
import PointsOverview from "../components/PointsOverview";
import DeleteProfile from "../components/DeleteProfile";
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
      <button
        type="submit"
        aria-label="Supprimer le profil"
        className="profile-delete-button"
        onClick={handleOpenModal}
      >
        Supprimer mon profil
      </button>
      {isOpen && (
        <DeleteProfile user={userData} onClose={handleCloseModal} />
      )}
      <PointsOverview userData={userData} />
      <ProfileContributions pictureData={pictureData} />
    </>
  );
}

export default Profile;
