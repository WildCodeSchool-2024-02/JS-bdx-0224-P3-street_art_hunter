import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/Map.css";

function Map({ isCameraOpen }) {
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
    !isCameraOpen && (
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
        <Marker position={position}>
          <Popup>Place de la Victoire</Popup>
        </Marker>
        <ZoomControl position="topright" />
      </MapContainer>
    )
  );
}
Map.propTypes = {
  isCameraOpen: PropTypes.bool.isRequired,
};

export default Map;
