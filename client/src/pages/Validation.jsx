import { Link, useLoaderData } from "react-router-dom";
import BtnGoBack from "../components/BtnGoBack";
import DesktopBar from "../components/DesktopBar";
import "../styles/Validation.css";

function Validation() {
  const comparedArts = useLoaderData();

  const pendingArts = comparedArts.filter((art) => art.status === "pending");

  const artUrl = import.meta.env.VITE_API_URL;

  const styleDesktopBarContent = "admin-links-bar";
  const styleDesktopBarSection = "admin-links-bar-nav";

  return (
    <section className="validation-section-wrapper">
      <article className="validation-article">
        <BtnGoBack />
        <DesktopBar
          classNameBody={styleDesktopBarContent}
          classNameNav={styleDesktopBarSection}
        />
        <section className="validation-section">
          <h2 className="validation-main-titles">Ajouts à valider</h2>
          <figure>
            {pendingArts.map((art) => (
              <Link to={`/admin/validation/${art.id}`} key={art.id}>
                <img
                  src={`${artUrl}/assets/images/upload/${art.image}`}
                  alt="oeuvre en attente de validation"
                />
              </Link>
            ))}
          </figure>
        </section>
      </article>
    </section>
  );
}

export default Validation;
