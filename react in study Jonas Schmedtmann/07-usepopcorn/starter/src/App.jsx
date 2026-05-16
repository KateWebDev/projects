import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Box from "./components/Box";
import ListMovies from "./components/ListMovies";
import Summary from "./components/Summary";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDetails from "./components/MovieDetails";

const KEY = "***";

export default function App() {
  const [movies, setMovies] = useState([
    {
      Title: "Beta Test",
      Year: "2016",
      imdbID: "tt4244162",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjhlM2ZhMzUtMzU4ZC00ZjAyLWIxZmYtOWY4N2RlMWEzYTcwXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Johnny Test",
      Year: "2005–2014",
      imdbID: "tt0454349",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcyYTIwOWMtYTFjNS00NTA1LWE5ODItMmY4MjEwMTYxYjg5XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "The Copenhagen Test",
      Year: "2025",
      imdbID: "tt31314791",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDZkNTE0OWMtNWYwZS00NTJmLTlmMDMtOTc3MWE5NDUxNzEyXkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    },
    {
      Title: "The Beta Test",
      Year: "2021",
      imdbID: "tt11738830",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTBhNjcyMjEtM2NiMi00YzQ3LThlYjEtMjFiNDc3NWJiNGJiXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "The Test: A New Era for Australia's Team&quot;",
      Year: "2020–2024",
      imdbID: "tt11347692",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzc2YWUxMjUtMTVkNC00OGU3LWIwZjYtNmNhM2IxZjM1MWM2XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Test Pilot",
      Year: "1938",
      imdbID: "tt0030848",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjllOWNkMWUtODVmYi00YzdkLWI4OWYtMGYyOTYzYTM4NzdhXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Test",
      Year: "2025",
      imdbID: "tt27477888",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWRmYjAwZjktZGVjMi00OWJjLTllMDktNjYyOGQzNGRjMDU2XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "The Test Case",
      Year: "2018–",
      imdbID: "tt6868278",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjNjOTQzOWItMzk4MC00MmMzLTk4ZjUtMWU4ZWE4ZmU0OWY5XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Test",
      Year: "2013",
      imdbID: "tt2407380",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTQwMDU5NDkxNF5BMl5BanBnXkFtZTcwMjk5OTk4OQ@@._V1_SX300.jpg",
    },
    {
      Title: "Baka and Test",
      Year: "2010–2011",
      imdbID: "tt1655610",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGRmOTAwNDQtYzQ5NS00YmZjLThkMDItNzYyMmVlYjIxZmZjXkEyXkFqcGc@._V1_SX300.jpg",
    },
  ]);
  const [watched, setWatched] = useState([]);
  const [searchFilm, setSearchFilm] = useState("test");
  const [selectedFilm, setSelectedFilm] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function showSelectedFilm(imdbID) {
    setSelectedFilm(movies.find((item) => item.imdbID === imdbID));
  }

  function showSelectedWatchedFilm(imdbID) {
    setSelectedFilm(watched.find((item) => item.imdbID === imdbID));
  }

  function addWatchedMovie(newWatchedMovie) {
    setWatched((prev) => {
      return [...prev, newWatchedMovie];
    });
  }

  function delWatchedFilm(idMovie) {
    setWatched(watched.filter((item) => item.imdbID !== idMovie));
  }

  useEffect(() => {
    const controller = new AbortController();
    async function getData() {
      setError(null);
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${searchFilm}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("Error fetch data");
        }
        const data = await response.json();
        if (data.Response === "False") {
          throw new Error("Movie Not Found");
        }
        setMovies(data.Search);
      } catch (error) {
        if (!error.name === "AbortError") {
          setError(error.message);
          setIsLoading(false);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (searchFilm.length < 3) {
      setMovies([]);
      setError(null);
      return;
    }

    getData();

    return () => {
      controller.abort();
    };
  }, [searchFilm]);

  return (
    <>
      <Navbar>
        <Logo />
        <Search searchFilm={searchFilm} setSearchFilm={setSearchFilm} />
        <p className="num-results">
          Found <strong>{movies?.length ?? 0}</strong> results
        </p>
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {error && <ErrorMessage error={error} />}
          {!isLoading && !error && <ListMovies movies={movies} showSelectedFilm={showSelectedFilm} />}
        </Box>
        <Box>
          {Object.keys(selectedFilm).length > 0 ? (
            <MovieDetails
              selectedFilm={selectedFilm}
              addWatchedMovie={addWatchedMovie}
              setSelectedFilm={setSelectedFilm}
              watched={watched}
            />
          ) : (
            <>
              <Summary watched={watched} />
              {watched && (
                <ListMovies
                  movies={watched}
                  watched={true}
                  showSelectedFilm={showSelectedWatchedFilm}
                  delWatchedFilm={delWatchedFilm}
                  setSelectedFilm={setSelectedFilm}
                />
              )}
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
