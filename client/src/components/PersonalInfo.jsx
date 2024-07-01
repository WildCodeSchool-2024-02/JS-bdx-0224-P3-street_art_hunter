// import { useLoaderData } from "react-router-dom";

// import { useState } from "react";
import "../styles/Profile.css"

function PersonalInfo() {
  // const userInfo = useLoaderData();

  return (
    <section>
      <h2 className="profile-information-title">Mes informations</h2>
      <article>
      <p>Pseudo</p>
      {/* <p></p> */}
      <p>Ville</p>
      {/* <p></p> */}
      <p>E-mail</p>
      {/* <p></p> */}
      </article>
      <button
        type="button"
        aria-label="Modifier les informations"
        className="profile-information-edit-button"
      >
        Modifier
      </button>
    </section>
  );
}

export default PersonalInfo;
