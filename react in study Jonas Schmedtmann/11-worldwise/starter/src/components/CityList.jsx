import styles from "./CityList.module.css";

import CityItem from "./CityItem";
import Spinner from "./Spinner";
import Message from "./Message";
import useCitiesContext from "../hooks/useCitiesContext";

export default function CityList() {
  const { isLoading, error, cities } = useCitiesContext();

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
    <>
      <ul className={styles.cityList}>
        {cities.map((city) => (
          <CityItem key={city.id} {...city} />
        ))}
      </ul>
    </>
  );
}
