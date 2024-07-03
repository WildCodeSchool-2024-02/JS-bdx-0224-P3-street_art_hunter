import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import PointsOverview from "../components/PointsOverview";
import DeleteProfile from "../components/DeleteProfile";
import "../styles/Profile.css";

function Profile() {
  const userData = useLoaderData();

  const selectedUser = userData;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* {(connectedUserData.role === "admin") && (
        <Link to="/admin">Page d'administration</Link>
    ) */}
      <>
        <PersonalInfo user={selectedUser} />
        <button
          type="button"
          aria-label="Supprimer le profil"
          className="profile-delete-button"
          onClick={handleOpenModal}
        >
          Supprimer mon profil
        </button>
      </>
      {isOpen && (
        <DeleteProfile user={selectedUser} onClose={handleCloseModal} />
      )}
      {/* mettre le bon objet en fonction de ce qui est créé par le user */}
      <PointsOverview userData={userData} />
    </>
  );
}

export default Profile;
