import React from "react";
import { observer } from "mobx-react";
import { movieStore } from "../store/MovieStore";
import { useEffect } from "react";

const MoviesList = observer(() => {
  useEffect(() => {
    movieStore.getMovies();
  }, []);

  return (
    <>
      {movieStore.isLoading && <h2>Loading movies...</h2>}

      {!movieStore.isLoading && (
        <>
          <h1>Movies List</h1>
          <div className="movies-container">
            {movieStore.movies.map((movie, index) => {
              return (
                <div key={index} className="movie-card">
                  <img
                    className="movie-poster"
                    src={movie.poster}
                    alt={movie.title}
                    onClick={() => {
                      movieStore.toggleLike(movie.id);
                    }}
                  />
                </div>
              );
            })}
          </div>
          <h5>Movies count: {movieStore.movies.length}</h5>
        </>
      )}
    </>
  );
});

export default MoviesList;
