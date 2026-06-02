import styles from "./CountryList.module.css";

import CountryItem from "./CountryItem";
import Spinner from "./Spinner";

export default function CountryList({ cities, isLoading, error }) {
  const countries = cities.reduce((country, city) => {
    if (!country.map((item) => item.country).includes(city.country)) {
      return [...country, { country: city.country, emoji: city.emoji }];
    } else {
      return country;
    }
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
