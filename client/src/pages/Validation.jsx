import { Link, useLoaderData } from "react-router-dom";
import BtnGoBack from "../components/BtnGoBack";
import DesktopBar from "../components/DesktopBar";
import "../styles/Validation.css";

function Validation() {
  const { countUsers, countArts } = useLoaderData();

  return (
    <section className="validation-section-wrapper">
      <article className="validation-article">
        <BtnGoBack />
        <DesktopBar countUsers={countUsers} countArts={countArts} />
        <h2 className="validation-main-titles">Ajouts à valider</h2>
        <Link to="/admin/validation/details">
          <img src="../src/assets/images/gorille-art-bdx-2.jpg" alt="" />
        </Link>
      </article>
    </section>
  );
}

export default Validation;
