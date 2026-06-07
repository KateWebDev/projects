import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";

import styles from "./Map.module.css";
import useCitiesContext from "../hooks/useCitiesContext";

export default function Map() {
  const { cities } = useCitiesContext();
  const [mapPosition, setMapPosition] = useState([cities[0]?.position?.lat || 39.55, cities[0]?.position?.lng || 32.5]);
  const [location] = useSearchParams();

  const lat = location.get("lat");
  const lng = location.get("lng");

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer scrollWheelZoom={true} center={mapPosition} zoom={3} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((city, index) => (
          <Marker position={[city?.position?.lat, city?.position?.lng]} key={index}>
            <Popup>You are here! {city.cityName}</Popup>
          </Marker>
        ))}
        <ChangePosition position={mapPosition} />
        <ClickOnTheMap />
      </MapContainer>
    </div>
  );
}

function ChangePosition({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function ClickOnTheMap() {
  const navigate = useNavigate();
  const { setPosition } = useCitiesContext();
  useMapEvents({
    click: (evt) => {
      setPosition({ lat: evt.latlng.lat, lng: evt.latlng.lng });
      navigate("form");
    },
  });
  return null;
}
