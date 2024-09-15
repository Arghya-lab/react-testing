import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import Counter from "../Counter";

afterEach(cleanup);

test("<Counter /> exist", () => {
  const wrapper = render(<Counter />); // Renders component

  // wrapper.debug(); // Outputs dom as string

  // // Asserts text value 0 is found within a button
  // expect(wrapper.getByText("0")).toBeTruthy();
  // expect(wrapper.getByText("0").tagName).toBe("BUTTON");

  // Asserts counter-button is a button
  expect(wrapper.getByTestId("counter-button").tagName).toBe("BUTTON");
  // Asserts counter-button starts at 0
  expect(wrapper.getByTestId("counter-button").textContent).toBe("0");
});

test("<Counter /> working", () => {
  const { getByTestId } = render(<Counter />);
  const counterBtn = getByTestId("counter-button");

  fireEvent.click(counterBtn);
  expect(counterBtn.textContent).toBe("1");
  fireEvent.click(counterBtn);
  expect(counterBtn.textContent).toBe("2");
  fireEvent.click(counterBtn);
  fireEvent.click(counterBtn);
  expect(counterBtn.textContent).toBe("4");
});
