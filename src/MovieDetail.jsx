import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { POSTER_PATH } from "./Movie";

export const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

function MovieDetail() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=hi&language=en-US`
        );
        const movie = await res.json();

        setMovie(movie);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  if (!movie) return <h2 data-testid="loading-detail_movie">loading...</h2>;

  return (
    <section>
      <img src={`${BACKDROP_PATH}/${movie.backdrop_path}`} alt={movie.title} />
      <div>
        <div data-testid={movie.id}>
          <img src={`${POSTER_PATH}/${movie.poster_path}`} alt={movie.title} />
        </div>
        <div>
          <h1 data-testid={"movie-title"}>{movie.title}</h1>
          <h3>{movie.release_date}</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    </section>
  );
}

export default MovieDetail;
