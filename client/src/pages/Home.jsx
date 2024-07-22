import { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useLoaderData, useLocation } from "react-router-dom";
import { Icon, control } from "leaflet";
import { createPortal } from "react-dom";
import { CurrentUserContext } from "../contexts/CurrentUserProvider";

import LeafletGeocoder from "../components/LeafletGeocoder";
import ModalContent from "../components/ModalContent";
import ArtDetails from "../components/ArtDetails";

import "leaflet/dist/leaflet.css";
import "../styles/Home.css";
import "../styles/ModalContent.css";

import decodeTokenAndExtractRole from "../services/decodeToken";

import "../styles/Geocoder.css";
import yellowMarker from "../assets/images/location_yellow.svg";
import pinkMarker from "../assets/images/location_pink.svg";

// Composant pour ajouter le contrôle de zoom à la droite
function ZoomControl() {
  const map = useMap();

  useEffect(() => {
    const zoomControl = control.zoom({
      position: "bottomleft",
    });
    map.addControl(zoomControl);

    return () => {
      map.removeControl(zoomControl);
    };
  }, [map]);

  return null;
}

function Home() {
  const { setAuth } = useContext(CurrentUserContext);
  const artUrl = import.meta.env.VITE_API_URL;

  const [position, setPosition] = useState([
    44.831271602173324, -0.5722962522737938,
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedArt, setSelectedArt] = useState(null);
  const artData = useLoaderData();

  const artIcon = new Icon({
    iconUrl: yellowMarker,
    iconSize: [38, 38],
  });

  const geolocationIcon = new Icon({
    iconUrl: pinkMarker,
    iconSize: [38, 38],
  });

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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userData = decodeTokenAndExtractRole(token);
      setAuth(userData);
    }
  }, [setAuth]);

  const [showModal, setShowModal] = useState(false);
  const modalContent = document.getElementById("modal-content");
  const location = useLocation();

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("isFirstVisit") === null;
    if (isFirstVisit) {
      setShowModal(true);
      localStorage.setItem("isFirstVisit", "false");
    }
  }, []);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
    return undefined;
  }, [showModal]);

  const isHomepage = location.pathname === "/";

  return (
    <>
      {showModal &&
        modalContent &&
        isHomepage &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          modalContent
        )}
      <MapContainer
        center={position}
        zoom={13}
        className="leaflet-container"
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ZoomControl />
        <Marker position={position} icon={geolocationIcon}>
          <Popup>Vous êtes ici</Popup>
        </Marker>
        {artData.map((art) => (
          <Marker
            key={art.id}
            position={[art.latitude, art.longitude]}
            icon={artIcon}
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
