import React from "react";
import { MemoryRouter } from "react-router-dom";
import { cleanup, render } from "@testing-library/react";
import Movie, { POSTER_PATH } from "../Movie";

afterEach(cleanup);
console.error = jest.fn();

const movie = {
  id: "2",
  title: "The Dark Knight",
  poster_path: "the-dark-knight.jpg",
};

test("<Movie />", () => {
  const { debug, getByTestId } = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );

  // debug();

  expect(console.error).not.toHaveBeenCalled();
  expect(getByTestId("movie-link").getAttribute("href")).toBe(`/${movie.id}`);
  expect(getByTestId("movie-img").src).toBe(
    `${POSTER_PATH}/${movie.poster_path}`
  );
});
