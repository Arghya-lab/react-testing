import { add, totalCost } from "./App.jsx";

// test("Fake Test", () => {
//   expect(true).toBeTruthy();
// });

// test("Fake Two", () => {
//   expect(0).toBeFalsy();
// });

test("add test", () => {
  expect(add(0, 0)).toBe(0);
  expect(add(0, 1)).toBe(1);
  expect(add(99, 1)).toBe(100);
  expect(add("99", 1)).toBe("991");
});

test("should totalCost", () => {
  expect(totalCost([9999, 1199], 40)).toBe("$11238");
});
