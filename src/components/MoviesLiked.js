import React from "react";
import { observer } from "mobx-react";
import { movieStore } from "../store/MovieStore";
import { useEffect } from "react";

const MoviesLiked = observer(() => {
  useEffect(() => {
    movieStore.getMovies();
  }, []);

  let likedMovies = movieStore.movies.filter((m) => m.liked);

  return (
    <>
      {movieStore.isLoading && <h2>Loading movies...</h2>}

      {!movieStore.isLoading && (
        <>
          <div className="movies-container">
            {likedMovies.length > 0 &&
              likedMovies.map((movie, index) => {
                return (
                  <div key={index} className="movie-card">
                    <img
                      className="movie-poster"
                      src={movie.poster}
                      alt={movie.title}
                    />
                  </div>
                );
              })}

            {!likedMovies.length && (
              <div className="no-liked-movies-found-text">
                Like movies for them to appear here
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
});

export default MoviesLiked;
