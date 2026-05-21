import { useState } from "react";
import Rating from "./Rating";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { useMovies } from "../useMovies";
import { useTitle } from "../useTitle";
import useKey from "../useKey";

export default function MovieDetails({ selectedFilm, addWatchedMovie, setSelectedFilm, watched }) {
  const [useRating, setUseRating] = useState(null);
  const { data, isLoading, error } = useMovies(selectedFilm?.imdbID, "i");

  const {
    imdbID,
    Title: title,
    Poster: poster,
    Released: released,
    Runtime: runtime,
    Genre: genre,
    imdbRating: imdbRating,
    Plot: plot,
    Actors: actors,
    Director: director,
  } = data;

  const isWatched = watched?.map((movie) => movie.imdbID).includes(selectedFilm.imdbID);
  const watchedUserRating = watched?.find((item) => item.imdbID === selectedFilm.imdbID)?.userRating;

  useTitle(title);
  useKey("escape", () => setSelectedFilm({}));

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={() => setSelectedFilm({})}>
          &larr;
        </button>
        <img src={poster} alt={title} />
        <div className="details-overview">
          <h2>{title}</h2>
          <p>
            {released} &bull; {runtime}
          </p>
          <p>{genre}</p>
          <p> ⭐ {imdbRating} IMDb rating</p>
        </div>
      </header>
      <section>
        <div className="rating">
          <Rating
            numStars={10}
            sizeStar="24px"
            colorStroke="#ffff00"
            colorFill="#fff000"
            setUseRating={setUseRating}
            key={imdbID}
            defaultRating={watchedUserRating}
          />
          {!isWatched ? (
            <>
              {useRating > 0 && (
                <button
                  className="btn-add"
                  onClick={() => {
                    addWatchedMovie({
                      imdbID,
                      Poster: poster,
                      Title: title,
                      imdbRating: Number(imdbRating),
                      runtime: parseInt(runtime, 10),
                      userRating: Number(useRating),
                    });
                    setSelectedFilm({});
                  }}
                >
                  💗
                </button>
              )}
            </>
          ) : (
            <p>You have already rated this movie.</p>
          )}
        </div>
        <em>{plot}</em>
        <p>Directed by &bull; {director}</p>
        <p>Starring &bull; {actors}</p>
      </section>
    </div>
  );
}
