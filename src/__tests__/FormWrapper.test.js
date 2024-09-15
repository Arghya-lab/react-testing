import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import FormRapper from "../FormRapper";

afterEach(cleanup);

test("<FormWrapper /> exist", () => {
  const { debug, getByTestId, container } = render(<FormRapper />);

  expect(getByTestId("form-title").textContent).toBe("New Form");
  expect(getByTestId("form")).toBeTruthy();

  // debug();

  // // create a dom snapshot and put in __snapshots__ folder if you change any dom element then the snapshot gona fail. To override that press u in terminal
  // expect(container).toMatchSnapshot();
});

test("<FormWrapper /> function", () => {
  const mockSubmit = jest.fn();
  const updatedValue = "hello world";

  const { getByTestId } = render(<FormRapper handleSubmit={mockSubmit} />);

  const textInput = getByTestId("text-input");
  const submitBtn = getByTestId("submit-button");

  fireEvent.change(textInput, { target: { value: updatedValue } });
  fireEvent.click(submitBtn);

  expect(mockSubmit).toHaveBeenCalledTimes(1);
  expect(mockSubmit).toHaveBeenCalledWith({ text: updatedValue });
});
