import "../styles/ThankYouPage.css";

function ThankYouPage() {
  return (
    <>
      <h1 className="thankyou-main-title">Remerciements !</h1>
      <section className="thankyou-page">
        <h2 className="thankyou-title">
          Nous voulons remercier tous nos amis utilisateurs qui comme nous adorent
          l'art de rue.
        </h2>
        <p className="p-thankyou">
          PixHunt est fier de vous offrir les oeuvres d'art de rue de Bordeaux. Grâce à vos
          contributions, nous pouvons intégrer les nouvelles oeuvres créées les plus récentes.
        </p>
        <h2 className="thankyou-title">Un grand merci à Leaflet et OpenStreetMap !</h2>
        <p className="p-thankyou">
          Sans votre aide, nous n'aurions pas pu vous offrir ce site. Hugs and
          kisses aux employés de Leaflet et OpenStreetMap.
        </p>
        <p className="p-thankyou">Les données sont disponibles sous la Licence Open Database.</p>
        <h2 className="thankyou-title">Avis des droits d’auteur de OpenStreetMap et de Thunderforest.</h2>
        <p className="p-thankyou">
          En ce qui concerne les droits d’auteurs (copyright: 19 février 2020),
          nous avons constitué la carte avec la courtoisie de Open Street Map et
          Thunderforest.
        </p>
        <h2 className="thankyou-title">Nous remercions chaleureusement Street-Artwork</h2>
        <p className="p-thankyou">
          Nous avons pu utiliser et vous proposer les oeuvres de rue de         l'agglomération de Bordeaux grâce à Street-Artwork.
        </p>
        <a
          href="https://www.street-artwork.com/fr"
          aria-label="Lien vers le site street-artwork"
        >
          Lien
        </a>
        <h2 className="thankyou-title">Et enfin, un grand remerciement à Adrien, Alice, Chris and Kévin de la Wild Code School pour avoir réalisé ce projet.</h2>
      </section>
      <article className="article-thankyou">
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
