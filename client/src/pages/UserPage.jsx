import{ useLoaderData } from "react-router-dom";
import UserList from "../components/UserList";
import PointsOverview from "../components/PointsOverview";

import "../styles/UserPage.css";

function UserPage() {

    const userData = useLoaderData();

  return (
    <>
    {/* {isAdmin && (
        <p>Page d'administration</p>
    ) */} 
    <UserList user={userData[0]}/>
    console.log(userData);
    {/* mettre le bon objet en fonction de ce qui est créé par le user */}
    <PointsOverview userData={userData}/>
    </>
  )
}

export default UserPage;
