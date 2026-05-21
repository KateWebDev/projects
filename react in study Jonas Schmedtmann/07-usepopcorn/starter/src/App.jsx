import { useState } from "react";

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
import { useMovies } from "./useMovies";
import { useLocalStorageState } from "./useLocalStorageState";

export default function App() {
  const [searchFilm, setSearchFilm] = useState("");
  const [selectedFilm, setSelectedFilm] = useState({});

  const { data, isLoading, error } = useMovies(searchFilm, "s");
  const [watched, setWatched] = useLocalStorageState([], "watchedMovies");

  function showSelectedFilm(imdbID) {
    setSelectedFilm(data.find((item) => item.imdbID === imdbID));
  }

  function showSelectedWatchedFilm(imdbID) {
    setSelectedFilm(watched.find((item) => item.imdbID === imdbID));
  }

  function addWatchedMovie(newWatchedMovie) {
    setWatched((prev) => [...prev, newWatchedMovie]);
  }

  function delWatchedFilm(idMovie) {
    setWatched(watched.filter((item) => item.imdbID !== idMovie));
  }

  return (
    <>
      <Navbar>
        <Logo />
        <Search searchFilm={searchFilm} setSearchFilm={setSearchFilm} />
        <p className="num-results">
          Found <strong>{data?.length ?? 0}</strong> results
        </p>
      </Navbar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {error && <ErrorMessage error={error} />}
          {!isLoading && !error && <ListMovies movies={data} showSelectedFilm={showSelectedFilm} />}
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
