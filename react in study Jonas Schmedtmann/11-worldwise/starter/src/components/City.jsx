import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useCitiesContext from "../hooks/useCitiesContext";
import Spinner from "./Spinner";

import styles from "./City.module.css";

export default function City() {
  const paramsURL = useParams();
  const navigate = useNavigate();
  const { currentCity, isLoading, editCurrentCity } = useCitiesContext();

  useEffect(() => {
    editCurrentCity(paramsURL.id);
  }, [paramsURL.id]);

  if (isLoading) return <Spinner />;
  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{currentCity?.emoji}</span> {currentCity?.cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {currentCity?.cityName} on</h6>
        {/* <p>{formatDate(date || null)}</p> */}
        <p>{currentCity?.date}</p>
      </div>

      {currentCity?.notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{currentCity?.notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a href={`https://en.wikipedia.org/wiki/${currentCity?.cityName}`} target="_blank" rel="noreferrer">
          Check out {currentCity?.cityName} on Wikipedia &rarr;
        </a>
      </div>

      <button
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
    </div>
  );
}
