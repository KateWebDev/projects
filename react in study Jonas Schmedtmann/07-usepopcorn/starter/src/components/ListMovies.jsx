import Movie from "./Movie";

export default function ListMovies({ movies, watched, showSelectedFilm, delWatchedFilm, setSelectedFilm }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => {
        return (
          <Movie
            movie={movie}
            key={movie.imdbID}
            watched={watched}
            onClick={() => showSelectedFilm(movie?.imdbID)}
            delWatchedFilm={delWatchedFilm}
            setSelectedFilm={setSelectedFilm}
          />
        );
      })}
    </ul>
  );
}
