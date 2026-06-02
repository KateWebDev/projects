import { useParams } from "react-router-dom";
import styles from "./City.module.css";

function City({ cities }) {
  const paramsURL = useParams();

  const city = cities.find((item) => item.id === paramsURL.id);

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{city?.emoji}</span> {city?.cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {city?.cityName} on</h6>
        {/* <p>{formatDate(date || null)}</p> */}
        <p>{city?.date}</p>
      </div>

      {city?.notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{city?.notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a href={`https://en.wikipedia.org/wiki/${city?.cityName}`} target="_blank" rel="noreferrer">
          Check out {city?.cityName} on Wikipedia &rarr;
        </a>
      </div>
    </div>
  );
}

export default City;
