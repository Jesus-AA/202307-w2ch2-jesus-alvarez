import { strictEquals } from "./strictequals.js";

console.log("1 y 1 = ", strictEquals(1, 1));
console.log("NaN y NaN = ", strictEquals(NaN, NaN));
console.log("0 y -0 = ", strictEquals(0, -0));
console.log("-0 y 0 = ", strictEquals(-0, 0));
console.log("1 y '1' = ", strictEquals(1, "1"));
console.log("true y false = ", strictEquals(true, false));
console.log("false y false = ", strictEquals(false, false));
console.log("water y oil = ", strictEquals("water", "oil"));
