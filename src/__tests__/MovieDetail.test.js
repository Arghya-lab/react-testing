import React from "react";
import { cleanup, render, waitFor } from "@testing-library/react";
import mockFetch from "jest-fetch-mock";
import MovieDetail from "../MovieDetail";

afterEach(cleanup);

const match = {
  params: {
    id: "2",
  },
};

const movieDetail = {
  id: "2",
  title: "The Dark Knight",
  poster_path: "the-dark-knight.jpg",
  backdrop_path: "backdrop/the-dark-knight.jpg",
  release_date: "18 July 2008",
  overview:
    "Batman has a new foe, the Joker, who is an accomplished criminal hell-bent on decimating Gotham City. Together with Gordon and Harvey Dent, Batman struggles to thwart the Joker before it is too late.",
};

test("<MovieDetail />", async () => {
  global.fetch = mockFetch;
  fetch.mockResponseOnce(JSON.stringify(movieDetail));

  const { debug, getByTestId, queryByTestId } = render(
    <MovieDetail match={match} />
  );

  expect(queryByTestId("loading-detail_movie")).toBeTruthy();

  await waitFor(() => getByTestId(movieDetail.id));

  expect(queryByTestId("loading-detail_movie")).toBeFalsy();
  expect(getByTestId("movie-title").textContent).toBe(movieDetail.title);
  // debug();
});
