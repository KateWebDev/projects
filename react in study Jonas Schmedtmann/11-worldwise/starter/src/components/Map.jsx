import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
  //const [location, setLocation] = useSearchParams();
  const navigate = useNavigate();

  //const lat = location.get("lat");
  //const lng = location.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <p>MAP</p>
    </div>
  );
}
