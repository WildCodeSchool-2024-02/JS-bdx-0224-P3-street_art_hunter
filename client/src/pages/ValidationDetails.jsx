import BtnGoBack from "../components/BtnGoBack";
// import DesktopBar from "../components/DesktopBar";
import "../styles/Validation.css";

function ValidationDetails() {
  return (
    <section className="validation-section-wrapper">
      <article className="validation-article">
        <BtnGoBack />
        {/* <DesktopBar /> */}
        <h2 className="profile-main-titles">Proposition</h2>
        <h2 className="profile-main-titles">Original</h2>
      </article>
    </section>
  );
}

export default ValidationDetails;
