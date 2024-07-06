import { useLoaderData, useNavigate } from "react-router-dom";
import EditPersonalInfo from "../components/EditPersonalInfo";
import "../styles/Profile.css";

function EditProfile() {
  const userData = useLoaderData();
  const selectedUser = userData;

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(`/profile/${selectedUser.id}`);
  };

  return <EditPersonalInfo user={selectedUser} handleCancel={handleCancel} />;
}

export default EditProfile;
