import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import useCitiesContext from "../hooks/useCitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function CityItem({ id, cityName, emoji, date, position }) {
  const { currentCity, delCityAPI } = useCitiesContext();

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${id === currentCity?.id ? styles["cityItem--active"] : ""}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}  `}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={date}>{formatDate(date)}</time>
        <button
          className={styles.deleteBtn}
          type="button"
          onClick={(evt) => {
            evt.preventDefault();
            delCityAPI(id);
          }}
        >
          &times;
        </button>
      </Link>
    </li>
  );
}
