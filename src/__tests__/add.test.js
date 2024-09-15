import add from "../add";
import totalCost from "../totalCost";

//  STEP - I  // //
test("Fake Test", () => {
  expect(true).toBeTruthy();
});

test("Fake Two", () => {
  expect(0).toBeFalsy();
});

//  STEP - II  // //
// Unit test
// It only tests one thing
test("add test", () => {
  expect(add(0, 0)).toBe(0);
  expect(add(0, 1)).toBe(1);
  expect(add(99, 1)).toBe(100);
  expect(add("99", 1)).toBe("991");
});

// Integration tests
// Tests things working together (add func used under the hood here)
test("should totalCost", () => {
  expect(totalCost([9999, 1199], 40)).toBe("$11238");
});
