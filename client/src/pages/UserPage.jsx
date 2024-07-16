import { useOutletContext } from "react-router-dom";
import UserList from "../components/UserList";
import "../styles/UserPage.css";

function UserPage() {
  const users = useOutletContext();
  return (
      <UserList users={users} />
  );
}

export default UserPage;
