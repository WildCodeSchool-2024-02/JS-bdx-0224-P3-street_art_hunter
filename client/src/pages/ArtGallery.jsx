import "../styles/ArtGallery.css";

function ArtGallery() {
  return (
    <>
      <h2 className="title-artgallery">
        Oeuvres ajoutées par les utilisateurs
      </h2>
      <ul className="gallery-list">
        <li className="img1">
          <img
            className="image1"
            src="./src/assets/images/artgallery 2.jpg"
            alt="oeuvre d'art 1"
          />
        </li>
        <li className="img2">
          <img
            className="image2"
            src="./src/assets/images/artgallery1.jpg"
            alt="oeuvre d'art 2"
          />
        </li>
        <li className="img3">
          <img
            className="image3"
            src="./src/assets/images/artgallery5.jpg"
            alt="oeuvre d'art 3"
          />
        </li>
        <li className="img4">
          <img
            className="image4"
            src="./src/assets/images/artgallery4.jpg"
            alt="oeuvre d'art 4"
          />
        </li>
        <li className="img5">
          <img
            className="image5"
            src="./src/assets/images/artgallery7.jpg"
            alt="oeuvre d'art 5"
          />
        </li>
        <li className="img6">
          <img
            className="image6"
            src="./src/assets/images/artgallery6.jpg"
            alt="oeuvre d'art 6"
          />
        </li>
        <li className="img7">
          <img
            className="image7"
            src="./src/assets/images/artgallery3.jpg"
            alt="oeuvre d'art 7"
          />
        </li>
        <li className="img8">
          <img
            className="image8"
            src="./src/assets/images/artgallery9.jpg"
            alt="oeuvre d'art 8"
          />
        </li>
        <li className="img9">
          <img
            className="image9"
            src="./src/assets/images/artgallery10.jpg"
            alt="oeuvre d'art 9"
          />
        </li>
        <li className="img10">
          <img
            className="image10"
            src="./src/assets/images/artgallery8.jpg"
            alt="oeuvre d'art 10"
          />
        </li>
      </ul>
    </>
  );
}

export default ArtGallery;
