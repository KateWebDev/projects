import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function CityItem({ id, cityName, emoji, date, position }) {
  return (
    <li>
      <Link className={styles.cityItem} to={`${id}`}>
        {/* ?lat=${position.lat}&lng=${position.lng} */}
        <p>ID = {id}</p>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} type="button">
          &times;
        </button>
      </Link>
    </li>
  );
}
