import { strictEquals } from "./strictequals.js";

/*
console.log("1 y '1' = ", strictEquals(1, "1"));
console.log("true y false = ", strictEquals(true, false));
console.log("false y false = ", strictEquals(false, false));
console.log("water y oil = ", strictEquals("water", "oil"));
*/

// Arrange
const valuea = 1;
const valueb = 1;
const expectedvalue = true;
// Act
const result = strictEquals(valuea, valueb);
// Asert

test("with 1 and 1 result should be true", () => {
  expect(result).toBe(expectedvalue);
});

// Arrange
const valuec = NaN;
const valued = NaN;
const expectedvalue2 = false;
// Act
const result2 = strictEquals(valuec, valued);
// Asert

test("with NaN and NaN result should be false", () => {
  expect(result2).toBe(expectedvalue2);
});

//Arrange
const valuee = 0;
const valuef = -0;
const expectedvalue3 = true;
// Act
const result3 = strictEquals(valuee, valuef);
// Asert

test("with 0 and -0 result should be true", () => {
  expect(result3).toBe(expectedvalue3);
});

//Arrange
const valueg = -0;
const valueh = 0;
const expectedvalue4 = true;
// Act
const result4 = strictEquals(valuee, valuef);
// Asert

test("with -0 and 0 result should be true", () => {
  expect(result4).toBe(expectedvalue4);
});

//Arrange
const valuei = 1;
const valuej = "1";
const expectedvalue5 = false;
// Act
const result5 = strictEquals(valuei, valuej);
// Asert

test("with 1 and '1' result should be false", () => {
  expect(result5).toBe(expectedvalue5);
});
