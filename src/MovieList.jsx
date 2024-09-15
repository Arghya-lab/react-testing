import React, { useEffect, useState } from "react";
import Movie from "./Movie";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/discover/movie?api_key=hi&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
        );
        const movies = await res.json();
        setMovies(movies);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  if (movies.length === 0) {
    return <h1 data-testid="movie_list-loading">Loading</h1>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
