import React from "react";
import { render } from "@testing-library/react";
import Counter from "./Counter";

test("<Counter />", () => {
  const wrapper = render(<Counter />); // Renders component

  wrapper.debug(); // Outputs dom as string

  // // Asserts text value 0 is found within a button
  // expect(wrapper.getByText("0")).toBeTruthy();
  // expect(wrapper.getByText("0").tagName).toBe("BUTTON");

  // Asserts counter-button is a button
  expect(wrapper.getByTestId("counter-button").tagName).toBe("BUTTON");
  // Asserts counter-button starts at 0
  expect(wrapper.getByTestId("counter-button").textContent).toBe("0");
});
