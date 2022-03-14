import { observable, configure, action } from "mobx";

configure({ enforceActions: true });
const movieStore = observable({
  movies: [],
  isLoading: false,
  moviesLoaded: false,
  toggleLike: action((id) => {
    let movie = movieStore.movies.filter((m) => m.id === id);

    if (movie.length > 0) {
      movie[0].liked = !movie[0].liked;
    }
    movie = null;
  }),
  getMovies: action(() => {
    if (movieStore.moviesLoaded) return;

    movieStore.isLoading = true;
    movieStore.movies = [];

    const moviesPath =
      "https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17";

    fetch(moviesPath)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.results) {
          for (let movie of data.results) {
            movieStore.movies.push({
              id: movie.id,
              title: movie.original_title,
              overview: movie.overview,
              liked: false,
              poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            });
          }
          movieStore.moviesLoaded = true;
        }
      })
      .finally(() => {
        console.log(movieStore.movies[0]);
        movieStore.isLoading = false;
      });
  })
});

export { movieStore };
