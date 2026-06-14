import { useCallback } from "react";
import { useEffect, createContext, useReducer } from "react";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  error: null,
  currentCity: {},
  position: {
    lat: 0,
    lng: 0,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: action.payload.loading,
      };
    case "error":
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload.cities,
      };
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload.newCity],
        currentCity: action.payload.newCity,
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload.idCity),
        currentCity: {},
      };
    case "city/currentCity":
      return {
        ...state,
        currentCity: state.cities.find((item) => item.id === action.payload.id),
      };
    case "position/created":
      return {
        ...state,
        position: { lat: action.payload.lat, lng: action.payload.lng },
      };
    default:
      throw new Error("There is no such action type");
  }
}

function CitiesProvider({ children }) {
  const [state, dispath] = useReducer(reducer, initialState);
  const { cities, isLoading, error, currentCity, position } = state;

  useEffect(() => {
    async function getData() {
      dispath({ type: "error", payload: { error: null } });
      dispath({ type: "loading", payload: { loading: true } });
      try {
        const response = await fetch("http://localhost:9000/cities");

        if (!response.ok) {
          throw new Error("Error Fetch Data");
        }
        const data = await response.json();

        if (data.Response === "False") {
          throw new Error("Movie Not Found");
        }
        dispath({ type: "cities/loaded", payload: { cities: data } });
      } catch (error) {
        if (!error.name === "AbortError") {
          dispath({ type: "error", payload: { error: error.message } });
        }
      }
    }

    getData();
  }, []);

  const editCurrentCity = useCallback((id) => {
    dispath({ type: "city/currentCity", payload: { id: id } });
  }, []);

  // добавление локация в API
  async function addCityAPI(city) {
    dispath({ type: "loading", payload: { loading: true } });
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
        dispath({ type: "city/created", payload: { newCity: city } });
      }
    } catch (error) {
      dispath({ type: "loading", payload: { loading: false } });
      dispath({ type: "error", payload: { error: error.message } });
    }
  }

  // добавление локация в API
  async function delCityAPI(id) {
    dispath({ type: "loading", payload: { loading: true } });
    try {
      const response = await fetch(`http://localhost:9000/cities/${id}`, {
        method: "DELETE",
      });

      dispath({ type: "city/deleted", payload: { idCity: id } });
    } catch (error) {
      dispath({ type: "loading", payload: { loading: false } });
      dispath({ type: "error", payload: { error: error.message } });
    } finally {
      dispath({ type: "loading", payload: { loading: false } });
    }
  }

  function setPosition(lat, lng) {
    dispath({ type: "position/created", payload: { lat: lat, lng: lng } });
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
