import { useLoaderData } from "react-router-dom";
import ProfileForm from "../components/ProfileForm";
import "../styles/Profile.css";

function EditProfile() {
  const userData = useLoaderData();
  return <ProfileForm user={userData} />;
}

export default EditProfile;
