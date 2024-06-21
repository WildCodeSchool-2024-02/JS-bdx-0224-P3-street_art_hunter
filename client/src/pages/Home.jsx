import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLoaderData } from "react-router-dom";
import { Icon } from "leaflet";
import LeafletGeocoder from "../components/LeafletGeocoder";
import "leaflet/dist/leaflet.css";
import "../style/Home.css";

function Home() {
  const [position, setPosition] = useState([
    44.831271602173324, -0.5722962522737938,
  ]);

  const artData = useLoaderData();

  const artUrl = import.meta.env.VITE_API_URL;

  const artIcon = (url) =>
    new Icon({
      iconUrl: url,
      iconSize: [38, 38],
    });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((geoPosition) => {
      const { latitude, longitude } = geoPosition.coords;
      setPosition([latitude, longitude]);
    });
  }, []);

  return (
    <section>
      <MapContainer center={position} zoom={13} className="leaflet-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Place de la Victoire</Popup>
        </Marker>
        {artData.map((art) => (
          <Marker
            key={art.id}
            position={[art.latitude, art.longitude]}
            icon={artIcon(`${artUrl}${art.image}`)}
          />
        ))}
        <LeafletGeocoder />
      </MapContainer>
    </section>
  );
}

export default Home;
