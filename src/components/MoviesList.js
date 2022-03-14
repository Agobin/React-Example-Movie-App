import React from "react";
import { observer } from "mobx-react";
import { movieStore } from "../store/MovieStore";
import { useEffect } from "react";
import MoviesPoster from "./MoviePoster";

const MoviesList = observer(() => {
  useEffect(() => {
    movieStore.getMovies();
  }, []);

  return (
    <>
      {movieStore.isLoading && <h2>Loading movies...</h2>}

      {!movieStore.isLoading && (
        <>
          <div className="movies-container">
            {movieStore.movies.map((movie) => {
              return <MoviesPoster movie={movie} />;
            })}
          </div>
        </>
      )}
    </>
  );
});

export default MoviesList;
