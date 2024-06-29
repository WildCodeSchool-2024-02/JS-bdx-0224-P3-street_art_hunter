import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";

export default function LeafletGeocoder() {
  const map = useMap();
  const geocoderControlRef = useRef(null);

  useEffect(() => {
    if (!map) return;

    if (!geocoderControlRef.current) {
      const control = L.Control.geocoder({
        defaultMarkGeocode: true,
        placeholder: "Rechercher une localisation !",
      }).addTo(map);

      geocoderControlRef.current = control;

      control.on("markgeocode", (e) => {
        const latLng = e.geocode.center;
        L.marker(latLng).addTo(map).bindPopup(e.geocode.name).openPopup();
        map.fitBounds(e.geocode.bbox);
      });
    }
  }, [map]);

  return null;
}