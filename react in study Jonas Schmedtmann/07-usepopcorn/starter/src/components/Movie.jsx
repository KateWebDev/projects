export default function Movie({ movie, watched, onClick, delWatchedFilm, setSelectedFilm }) {
  return (
    <li onClick={onClick}>
      <img src={movie?.Poster} alt={`${movie?.Title} poster`} />
      <h3>{movie?.Title}</h3>
      <div>
        {!watched && (
          <p>
            <span>🗓</span>
            <span>{movie?.Year}</span>
          </p>
        )}
        {watched && (
          <>
            <p>
              <span>⭐️</span>
              <span>{movie?.imdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{movie?.userRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{movie?.runtime} min</span>
            </p>
            <button
              type="button"
              onClick={() => {
                delWatchedFilm(movie?.imdbID);
                setSelectedFilm({});
              }}
            >
              ❌
            </button>
          </>
        )}
      </div>
    </li>
  );
}
