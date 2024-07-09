import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLoaderData } from "react-router-dom";
import { Icon } from "leaflet";
import LeafletGeocoder from "../components/LeafletGeocoder";
import ArtDetails from "../components/ArtDetails";

import "leaflet/dist/leaflet.css";
import "../styles/Home.css";

function Home() {
  const [position, setPosition] = useState([
    44.831271602173324, -0.5722962522737938,
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState(null);

  const artData = useLoaderData();

  const artIcon = (url) =>
    new Icon({
      iconUrl: url,
      iconSize: [38, 38],
    });

  const artUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((geoPosition) => {
      const { latitude, longitude } = geoPosition.coords;
      setPosition([latitude, longitude]);
    });
  }, []);

  const handleOpenModal = (art) => {
    setIsOpen(true);
    setSelectedArt({
      ...art,
      image: `${artUrl}${art.image}`,
    });
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <MapContainer center={position} zoom={13} className="leaflet-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Vous êtes ici !</Popup>
        </Marker>
        {artData.map((art) => (
          <Marker
            key={art.id}
            position={[art.latitude, art.longitude]}
            icon={artIcon(`${artUrl}${art.image}`)}
            eventHandlers={{ click: () => handleOpenModal(art) }}
            aria-label="Ouvrir la fenêtre pour plus de détails sur l'oeuvre sélectionnée"
          />
        ))}
        <LeafletGeocoder />
      </MapContainer>

      {isOpen && <ArtDetails art={selectedArt} onClose={handleCloseModal} />}
    </>
  );
}

export default Home;
