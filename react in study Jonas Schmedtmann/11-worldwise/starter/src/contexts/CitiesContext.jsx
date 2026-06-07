import { useState, useEffect, createContext } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentCity, setCurrentCity] = useState({});
  const [position, setPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    async function getData() {
      setError(null);
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:9000/cities");

        if (!response.ok) {
          throw new Error("Error Fetch Data");
        }
        const data = await response.json();

        if (data.Response === "False") {
          throw new Error("Movie Not Found");
        }
        setCities(data);
      } catch (error) {
        if (!error.name === "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  function editCurrentCity(id) {
    setCurrentCity(cities.find((item) => item.id === id));
  }

  // добавление локация в API
  async function addCityAPI(city) {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:9000/cities", {
        method: "POST",
        body: JSON.stringify(city),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (cities.some((item) => item.cityName === city.cityName && item.date === city.date)) {
        alert("This location is already on your list with the date and name entered.");
      } else {
        setCities((prev) => [...prev, city]);
      }
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  // добавление локация в API
  async function delCityAPI(id) {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:9000/cities/${id}`, {
        method: "DELETE",
      });
      setCities(cities.filter((city) => city.id !== id));
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const value = {
    cities,
    isLoading,
    error,
    currentCity,
    editCurrentCity,
    position,
    setPosition,
    addCityAPI,
    delCityAPI,
  };

  return <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>;
}

export { CitiesContext, CitiesProvider };
