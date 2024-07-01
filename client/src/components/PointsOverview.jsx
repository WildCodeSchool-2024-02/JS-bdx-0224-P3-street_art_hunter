// import { useLoaderData } from "react-router-dom";

// import { useState } from "react";
import "../styles/Profile.css";

function PersonalInfo() {
  // const userInfo = useLoaderData();

  return (
    <section>
      <article>
        <h2 className="profile-points-title">Mes points</h2>
        <p>Nombre de points :</p>
        <p>37</p>
        {/* penser à inclure les points depuis la BDD */}
        <p>Classement :</p>
        <p>3/12</p>
        {/* penser à inclure le classement */}
      </article>
    </section>
  );
}

export default PersonalInfo;
