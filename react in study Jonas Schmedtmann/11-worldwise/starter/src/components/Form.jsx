// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import useCitiesContext from "../hooks/useCitiesContext";
import Spinner from "./Spinner";

import styles from "./Form.module.css";

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeo, setIsLoadingGeo] = useState(false);
  const [error, setError] = useState(null);

  const { position, addCityAPI } = useCitiesContext();

  const navigate = useNavigate();

  useEffect(() => {
    async function getDataCity() {
      setIsLoadingGeo(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position?.lat}&longitude=${position?.lng}`,
        );
        const data = await response.json();

        if (!data.countryCode) throw new Error("select different location");
        setCountry(data);
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName || "");
        setCountryCode(data.countryCode || "");
      } catch (error) {
        setError(error.message);
        setIsLoadingGeo(false);
      } finally {
        setIsLoadingGeo(false);
      }
    }
    getDataCity();
  }, [position]);

  if (isLoadingGeo) {
    return <Spinner />;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <form
      className={`${styles.form} ${isLoadingGeo ? styles.loading : ""}`}
      onSubmit={async (evt) => {
        evt.preventDefault();

        const newCity = {
          cityName: cityName,
          country: country,
          emoji: countryCode,
          date: date.toISOString(),
          notes: notes,
          position: {
            lat: `${position.lat}`,
            lng: `${position.lng}`,
          },
          id: Date.now().toString(),
        };

        await addCityAPI(newCity);
        navigate("/app/cities");
      }}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input id="cityName" onChange={(e) => setCityName(e.target.value)} value={cityName} />
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker id="date" selected={date} onChange={(date) => setDate(date)} dateFormat="dd.MM.yyyy" />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea id="notes" onChange={(e) => setNotes(e.target.value)} value={notes} />
      </div>

      <div className={styles.buttons}>
        <button type="submit">Add</button>
        <button
          onClick={(evt) => {
            evt.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </button>
      </div>
    </form>
  );
}

export default Form;

/*
  {
    "cityName": "Lisbon",
    "country": "Portugal",
    "emoji": "🇵🇹",
    "date": "2027-10-31T15:59:59.138Z",
    "notes": "My favorite city so far!",
    "position": {
      "lat": 38.727881642324164,
      "lng": -9.140900099907554
    },
    "id": "73930385"
  },
  */
