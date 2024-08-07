import { useLoaderData } from "react-router-dom";
import "../styles/Admin.css";
import AdminLinks from "../components/AdminLinks";
import AdminStats from "../components/AdminStats";
import DesktopBar from "../components/DesktopBar";

function Admin() {
  const { countUsers, countArts } = useLoaderData();

  const styleLinksBar = "admin-links-bar";
  const styleLinksBody = "admin-links-link";
  const styleLinksNavBar = "admin-links-bar-nav";
  const styleLinksNavBody = "admin-links-nav";

  return (
    <section className="admin-section-wrapper">
      <article>
        <DesktopBar
          classNameBody={styleLinksBar}
          classNameNav={styleLinksNavBar}
        />
      </article>
      <article className="admin-article">
        <h2 className="admin-main-title">Administration</h2>
        <AdminStats countUsers={countUsers} countArts={countArts} />
        <AdminLinks
          classNameBody={styleLinksBody}
          classNameNav={styleLinksNavBody}
        />
      </article>
    </section>
  );
}

export default Admin;
