import add from "./add.js";
import { totalCost } from "./App.jsx";

//  STEP - I  //
// test("Fake Test", () => {
//   expect(true).toBeTruthy();
// });

// test("Fake Two", () => {
//   expect(0).toBeFalsy();
// });

//  STEP - II  //
// Unit test
// It only tests one thing
// test("add test", () => {
//   expect(add(0, 0)).toBe(0);
//   expect(add(0, 1)).toBe(1);
//   expect(add(99, 1)).toBe(100);
//   expect(add("99", 1)).toBe("991");
// });

// Integration tests
// Tests things working together (add func used under the hood here)
// test("should totalCost", () => {
//   expect(totalCost([9999, 1199], 40)).toBe("$11238");
// });

//  STEP - III  //
// // This is dumb practice.
// // but some time it is useful to have mock function.
// // do not create mock function and use them in real world.
// const add = jest.fn((a, b) => 0);

// test("should mock add", () => {
//   expect(add(0, 0)).toBe(0);
//   // expect(add(0, 1)).toBe(1); // =>> Failed
//   // expect(add(99, 1)).toBe(100);// =>> Failed
//   // expect(add("99", 1)).toBe("991");// =>> Failed
// });

jest.mock("./add.js", () => jest.fn((a, b) => 0));

test("should mock total", () => {
  const cardAPrice = [0, 0];
  expect(totalCost(cardAPrice, 0)).toBe("$0");
  // expect(totalCost([9999, 1199], 40)).toBe("$11238"); // =>> Failed
  expect(add).toHaveBeenCalledTimes(cardAPrice.length + 1);

  //  mockImplementation use to change mock function return
  add.mockImplementation((a, b) => 11238);
  const cardBPrice = [9999, 1199];
  expect(totalCost(cardBPrice, 40)).toBe("$11238"); // =>> Failed
  expect(add).toHaveBeenCalledTimes(
    cardAPrice.length + 1 + cardBPrice.length + 1
  );
});
