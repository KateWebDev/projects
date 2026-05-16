import { useState, useEffect } from "react";
import Rating from "./Rating";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

const KEY = "***";

export default function MovieDetails({ selectedFilm, addWatchedMovie, setSelectedFilm, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [useRating, setUseRating] = useState(null);

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
  } = movie;

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedFilm.imdbID);
  const watchedUserRating = watched.find((item) => item.imdbID === selectedFilm.imdbID)?.userRating;

  function closeMovie() {
    setMovie({});
    setSelectedFilm({});
  }

  useEffect(() => {
    async function getDataDetails() {
      setError(null);
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedFilm.imdbID}`);

        if (!response.ok) {
          throw new Error("Error Fetch Data");
        }
        const data = await response.json();

        if (data.Response === "False") {
          throw new Error("Movie Not Found");
        }
        setMovie(data);
        setError(null);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getDataDetails();
  }, [selectedFilm]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movies | ${title}`;

    return () => {
      document.title = "usePopcorn";
    };
  }, [title]);

  useEffect(() => {
    function closeKey(evt) {
      if (evt.key === "Escape") {
        closeMovie();
      }
    }

    document.addEventListener("keyup", closeKey);

    return () => {
      document.removeEventListener("keyup", closeKey);
    };
  }, [closeMovie]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div className="details">
      <header>
        <button className="btn-back" onClick={closeMovie}>
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
                    closeMovie();
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
