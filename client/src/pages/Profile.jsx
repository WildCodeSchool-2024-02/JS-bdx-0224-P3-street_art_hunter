import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import PointsOverview from "../components/PointsOverview";
import DeleteProfile from "../components/DeleteProfile";
import EditPersonalInfo from "../components/EditPersonalInfo";
import "../styles/Profile.css";

function Profile() {
  const userData = useLoaderData();

  const { id } = useParams();
  const selectedUser = userData[id - 1];

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
        <>
          <EditPersonalInfo />
          <button
            type="button"
            aria-label="Modifier les informations"
            className="profile-information-edit-button"
            onClick={handleModify}
          >
            Enregistrer
          </button>
          <button
            type="button"
            aria-label="Modifier les informations"
            className="profile-information-edit-button"
            onClick={handleModify}
          >
            Annuler
          </button>
        </>
      ) : (
        <>
          <PersonalInfo user={selectedUser} />
          <button
            type="button"
            aria-label="Modifier les informations"
            className="profile-information-edit-button"
            onClick={handleModify}
          >
            Modifier
          </button>
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
