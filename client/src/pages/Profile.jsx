import { useLoaderData } from "react-router-dom";
import PersonalInfo from "../components/PersonalInfo";
import PointsOverview from "../components/PointsOverview";
import "../styles/Profile.css";

function Profile() {

const userData = useLoaderData();

return (
    <>
    {/* {isAdmin && (
        <p>Page d'administration</p>
    ) */} 
    <PersonalInfo user={userData[0]}/>
    {/* mettre le bon objet en fonction de ce qui est créé par le user */}
    <PointsOverview userData={userData}/>
    </>
)
}

export default Profile;