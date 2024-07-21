import { useOutletContext } from "react-router-dom";
import UserList from "../components/UserList";
import DesktopBar from "../components/DesktopBar";
import "../styles/UserPage.css";

function UserPage() {
  const [users] = useOutletContext();
  const styleDesktopBarContent = "admin-links-bar";
  const styleDesktopBarSection = "admin-links-bar-nav";

  return (
    <section className="Admin-Street-Art">
      <DesktopBar
        classNameBody={styleDesktopBarContent}
        classNameNav={styleDesktopBarSection}
      />
      <UserList users={users} />
    </section>
  );
}

export default UserPage;
