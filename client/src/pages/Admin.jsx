import { useLoaderData } from "react-router-dom";
import "../styles/Admin.css";
import AdminLinks from "../components/AdminLinks";
import AdminStats from "../components/AdminStats";
import DesktopBar from "../components/DesktopBar";

function Admin() {
  const { countUsers, countArts } = useLoaderData();

  return (
    <>
      <DesktopBar countUsers={countUsers} countArts={countArts} />
      <section className="admin-section-wrapper">
        <section className="admin-section">
          <h2 className="admin-main-title">Administration</h2>
          <AdminStats countUsers={countUsers} countArts={countArts} />
          <AdminLinks />
        </section>
      </section>
    </>
  );
}

export default Admin;