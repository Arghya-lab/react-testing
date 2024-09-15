import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

function Movie({ movie }) {
  return (
    <Link data-testid={"movie-link"} to={`/${movie.id}`}>
      <div id={`${movie.id}`}>
        <img
          src={`${POSTER_PATH}/${movie.poster_path}`}
          alt={movie.title}
          data-testid={"movie-img"}
        />
      </div>
    </Link>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
