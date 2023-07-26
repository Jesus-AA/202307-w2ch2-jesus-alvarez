import { factorial } from "./factorial.js";

const cases = [
  [0, 1],
  [1, 1],
  [2, 2],
  [3, 6],
  [5, 120],
  [450, Infinity],
];

test.each(cases)("Factorial de %i es %i", (value, expected) => {
  const result = factorial(value);
  expect(result).toBe(expected);
});

test("", () => {
  const result = factorial(1.5);
  expect(result).toBe(null); //se escogió null por diseño.
});
