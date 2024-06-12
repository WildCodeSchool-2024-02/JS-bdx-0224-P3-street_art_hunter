import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

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
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
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
}

export default Home;
