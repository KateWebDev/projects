import { useState } from "react";
import { tempMovieData, tempWatchedData } from "./data";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Box from "./components/Box";
import ListMovies from "./components/ListMovies";
import Summary from "./components/Summary";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <Logo />
        <Search />
        <p className="num-results">
          Found <strong>{movies.length}</strong> results
        </p>
      </Navbar>
      <Main>
        <Box>{<ListMovies movies={movies}></ListMovies>}</Box>
        <Box>
          <Summary watched={watched} />
          <ListMovies movies={watched} watched={true} />
        </Box>
      </Main>
    </>
  );
}
