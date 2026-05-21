import { useState, useEffect } from "react";

const KEY = "339979f0";

export function useMovies(searchFilm, type) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function getData() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&${type}=${searchFilm}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("Error fetch data");
        }
        const data = await response.json();

        if (data.Response === "False") {
          throw new Error("Movie Not Found");
        }
        setData(data.Search || data || []);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    if (typeof searchFilm !== "string" || searchFilm.length < 3) {
      setData([]);
      setError(null);
      setIsLoading(false);
      return;
    }

    getData();

    return () => {
      controller.abort();
    };
  }, [searchFilm, type]);

  return { data, isLoading, error };
}
