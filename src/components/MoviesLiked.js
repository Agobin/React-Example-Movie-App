import React from "react";
import { observer } from "mobx-react";
import { useEffect } from "react";
import { movieStore } from "../store/MovieStore";
import MoviesPoster from "./MoviePoster";

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
                return <MoviesPoster movie={movie} />;
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
