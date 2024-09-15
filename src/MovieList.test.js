import React from "react";
import { MemoryRouter } from "react-router-dom";
import {
  cleanup,
  fireEvent,
  getAllByTestId,
  render,
  waitFor,
} from "@testing-library/react";
import mockFetch from "jest-fetch-mock";
import MovieList from "./MovieList";
import { POSTER_PATH } from "./Movie";

afterEach(cleanup);

const movies = [
  {
    id: "1",
    title: "Inception",
    poster_path: "inception.jpg",
  },
  {
    id: "2",
    title: "The Dark Knight",
    poster_path: "the-dark-knight.jpg",
  },
  {
    id: "3",
    title: "Interstellar",
    poster_path: "interstellar.jpg",
  },
  {
    id: "4",
    title: "Parasite",
    poster_path: "parasite.jpg",
  },
];

test("<MovieList />", async () => {
  global.fetch = mockFetch;
  fetch.mockResponseOnce(JSON.stringify(movies));
  console.error = jest.fn();

  const { getByTestId, queryByTestId, getAllByTestId } = render(
    <MemoryRouter>
      <MovieList />
    </MemoryRouter>
  );

  //  initially it should in loading
  expect(getByTestId("movie_list-loading")).toBeTruthy();

  // Wait for the movies to load
  const movieLinks = await waitFor(() => getAllByTestId("movie-link"));
  const movieImages = getAllByTestId("movie-img");

  // Ensure no errors are logged
  expect(console.error).not.toHaveBeenCalled();
  //  initially it should in loading
  expect(queryByTestId("movie_list-loading")).toBeFalsy();
  // Assert the first movie link and image src are correct
  expect(movieLinks[0].getAttribute("href")).toBe(`/${movies[0].id}`);
  expect(movieImages[0].src).toBe(`${POSTER_PATH}/${movies[0].poster_path}`);
  // All movies are rendered
  expect(getAllByTestId("movie-link").length).toBe(movies.length);
});
