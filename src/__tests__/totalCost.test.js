import add from "../add"; // Import the mocked add
import totalCost from "../totalCost";

jest.mock("../add.js", () => jest.fn(() => 0));

//  to clear mock function in each test
afterEach(() => add.mockClear());

//  STEP - III  // //
// This is dumb practice.
// but some time it is useful to have mock function.
// do not create mock function and use them in real world.
// const add = jest.fn(() => 0);

test("should mock add", () => {
  expect(add(0, 0)).toBe(0);
  // expect(add(0, 1)).toBe(1); // =>> Failed
  // expect(add(99, 1)).toBe(100);// =>> Failed
  // expect(add("99", 1)).toBe("991");// =>> Failed
});

test("should mock total", () => {
  const cardAPrice = [0, 0];
  expect(totalCost(cardAPrice, 0)).toBe("$0");
  // expect(totalCost([9999, 1199], 40)).toBe("$11238"); // =>> Failed
  expect(add).toHaveBeenCalledTimes(cardAPrice.length + 1);

  //  mockImplementation use to change mock function return
  add.mockImplementation(() => 11238);
  const cardBPrice = [9999, 1199];
  expect(totalCost(cardBPrice, 40)).toBe("$11238");
  expect(add).toHaveBeenCalledTimes(
    cardAPrice.length + 1 + cardBPrice.length + 1
  );
});
