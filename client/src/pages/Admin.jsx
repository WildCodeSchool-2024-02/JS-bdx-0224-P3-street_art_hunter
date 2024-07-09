import { useLoaderData } from "react-router-dom";
import "../styles/Admin.css";
import AdminLinks from "../components/AdminLinks";
import AdminStats from "../components/AdminStats";

function Admin() {
  const { countUsers, countArts } = useLoaderData();

  return (
    <section>
      <h2 className="admin-main-title">Administration</h2>
      <AdminStats countUsers={countUsers} countArts={countArts} />
      <AdminLinks />
    </section>
  );
}

export default Admin;
