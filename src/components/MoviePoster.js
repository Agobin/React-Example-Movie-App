import React from "react";
import { observer } from "mobx-react";
import { movieStore } from "../store/MovieStore";

const MoviesPoster = observer(({ movie }) => {
  return (
    <>
      <div className="movie-card" title={movie.title}>
        <img className="movie-poster" src={movie.poster} alt={movie.title} />
        <div
          className={`action-area ${movie.liked ? "liked-movie" : ""} `}
          onClick={() => {
            movieStore.toggleLike(movie.id);
          }}
        >{`${movie.liked ? "Unlike" : "Like"}`}</div>
      </div>
    </>
  );
});

export default MoviesPoster;
