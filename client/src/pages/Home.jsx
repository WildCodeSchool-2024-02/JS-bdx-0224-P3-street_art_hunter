import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../style/Home.css";

function Home() {
  const [position, setPosition] = useState([
    44.831271602173324, -0.5722962522737938,
  ]);

  const artPins = [
    {
      geocode: [44.833328, -0.56667],
    },
    {
      geocode: [44.837789, -0.57918],
    },
  ];

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
      {artPins.map((artPin) => (
        <Marker key={artPin.geocode} position={artPin.geocode} />
      ))}
    </MapContainer>
  );
}

export default Home;
