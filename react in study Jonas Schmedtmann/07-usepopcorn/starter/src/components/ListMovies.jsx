import Movie from "./Movie";

export default function ListMovies({ movies, watched }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} watched={watched} />
      ))}
    </ul>
  );
}
