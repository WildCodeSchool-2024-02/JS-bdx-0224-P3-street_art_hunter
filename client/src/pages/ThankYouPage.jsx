import "../styles/ThankYouPage.css";

function ThankYouPage() {
  return (
    <>
      <h1>Remerciements !</h1>
      <section className="thankyou-page">
        <h2>
          Nous voulons remercier tous nos amis utilisateurs qui comme nous adore
          l'art de rue.
        </h2>
        <p>
          Toute l'équipe, Adrien, Alice, Christophe et Kevin sont fiers de vous
          offrir les oeuvres d'art de rues de Bordeaux. Grâce à vos
          contributions, nous pouvons intégrer les nouvelles oeuvres créées les
          plus récentes.
        </p>
        <h2>Un grand merci à Leaflet et OpenStreetMap !</h2>
        <p>
          Sans votre aide, nous n'aurions pas pu vous offrir ce site. Hugs and
          kisses aux employés de Leaflet et OpenStreetMap.
        </p>
        <p>Les données sont disponibles sous la Licence Open Database.</p>
        <h2>Avis des droits d’auteur de OpenStreetMap et de Thunderforest.</h2>
        <p>
          En ce qui concerne les droits d’auteurs (copyright: 19 février 2020),
          nous avons constitué la carte avec la courtoisie de Open Street Map et
          Thunderforest.
        </p>
        <h2>Nous remercions chaleureusement Open Street Art</h2>
        <p>
          Nous avons pu utiliser et vous proposer les oeuvres de rue de
          l'agglomération de Bordeaux grâce à Open Street Art.
        </p>
        <a
          href="https://www.street-artwork.com/fr"
          aria-label="Lien vers le site street-artwork"
        >
          Lien
        </a>
      </section>
      <article>
        <img
          src="../src//assets/images/logo.png"
          alt="Logo pixhunt"
          className="logot"
        />
      </article>
    </>
  );
}

export default ThankYouPage;
