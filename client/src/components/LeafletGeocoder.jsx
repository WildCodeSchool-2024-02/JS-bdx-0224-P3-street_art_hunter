import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";

export default function LeafletGeocoder() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const geocoder = L.Control.Geocoder.nominatim();
    const control = L.Control.geocoder({
      geocoder,
      defaultMarkGeocode: false,
    }).addTo(map);

    control.on("markgeocode", (e) => {
      const latLng = e.geocode.center;
      L.marker(latLng).addTo(map).bindPopup(e.geocode.name).openPopup();
      map.fitBounds(e.geocode.bbox);
    });
    map.removeControl(control);
  }, [map]);

  return null;
}
