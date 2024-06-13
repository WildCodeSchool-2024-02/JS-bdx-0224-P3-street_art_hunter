import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../style/Home.css";

import "../styles/Home.css";
import { NavLink } from "react-router-dom";
// import {BsArrowRight} from "react-icons/bs"

function Home() {
  const [position, setPosition] = useState([
    44.831271602173324, -0.5722962522737938,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((geoPosition) => {
      const { latitude, longitude } = geoPosition.coords;
      setPosition([latitude, longitude]);
    });
  }, []);

  return (
    <MapContainer center={position} zoom={13} className="leaflet-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Place de la Victoire</Popup>
      </Marker>
      ))
    </MapContainer>
  );
    return (
        <>
        {/* <p>Page d'accueil</p> */}
        
        <img className="gorille-art" src="../src/assets/images/gorille-art-bdx-2.jpg" alt="gorille-art" />
        <h1 className="title-site">PixHunt</h1>
        <p className="welcome-sentence">La chasse au <span className="street-art">Street Art</span> peut commencer !</p>
        {/* <BsArrowRight className="bs-arrow-right"/> */}
        <NavLink to="/mappage" ><button className="formButton" type="submit">
            Enter
          </button></NavLink>
          
        </>
    )
}

export default Home;
