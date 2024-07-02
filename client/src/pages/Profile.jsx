import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import PointsOverview from "../components/PointsOverview";
import DeleteProfile from "../components/DeleteProfile";
import EditPersonalInfo from "../components/EditPersonalInfo";
import "../styles/Profile.css";

function Profile() {
  const userData = useLoaderData();

  const selectedUser = userData;

  const [isEditing, setIsEditing] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleModify = () => {
    setIsEditing(!isEditing);
  };

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
      {isEditing ? (
        <EditPersonalInfo user={selectedUser} handleModify={handleModify} />
      ) : (
        <>
          <PersonalInfo user={selectedUser} handleModify={handleModify}/>
          <button
            type="button"
            aria-label="Supprimer le profil"
            className="profile-delete-button"
            onClick={handleOpenModal}
          >
            Supprimer mon profil
          </button>
        </>
      )}

      {isOpen && (
        <DeleteProfile user={selectedUser} onClose={handleCloseModal} />
      )}
      {/* mettre le bon objet en fonction de ce qui est créé par le user */}
      <PointsOverview userData={userData} />
    </>
  );
}

export default Profile;
