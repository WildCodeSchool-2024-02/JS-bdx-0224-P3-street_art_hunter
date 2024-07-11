import { useLoaderData, useNavigate } from "react-router-dom";
import EditPersonalInfo from "../components/ProfileForm";
import "../styles/Profile.css";

function EditProfile() {
  const user = useLoaderData();

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(`/profile/${user.id}`);
  };

  return <EditPersonalInfo user={user} handleCancel={handleCancel} />;
}

export default EditProfile;
