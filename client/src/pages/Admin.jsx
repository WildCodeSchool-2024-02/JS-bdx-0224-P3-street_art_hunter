import { Outlet, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";
import "../styles/Admin.css";
import AdminLinks from "../components/AdminLinks";
import AdminStats from "../components/AdminStats";
import DesktopBar from "../components/DesktopBar";
import ProfileInfo from "../components/ProfileInfo";

function Admin() {
  const { users, countUsers, countArts } = useLoaderData();

  const { auth } = useContext(CurrentUserContext);

  return (
    <section className="admin-main-section">
      <DesktopBar countUsers={countUsers} countArts={countArts} />
      <section className="admin-section-wrapper">
        <section className="admin-section">
          <h2 className="admin-main-title">Administration</h2>
          <AdminStats countUsers={countUsers} countArts={countArts} />
          <AdminLinks />
        </section>
      </section>
      <section className="admin-section-information-desktop">
        <ProfileInfo user={users[auth.id - 1]} />
      </section>
      <Outlet context={users} />
    </section>
  );
}

export default Admin;
