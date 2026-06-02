import styles from "./CityList.module.css";

import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";

export default function CityList({ cities, isLoading, error }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!cities.length) {
    return <Message message="You haven't marked any cities yet" />;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} {...city} />
      ))}
    </ul>
  );
}
