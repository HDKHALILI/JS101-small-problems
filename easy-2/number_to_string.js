// Convert a Number to String
// In the previous two exercises, you developed functions that convert simple
// numeric strings to signed integers. In this exercise and the next, you're
// going to reverse those functions.

// Write a function that converts a non-negative integer value (e.g., 0, 1,
// 2, 3, and so on) to the string representation of that integer.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String(), Number.prototype.toString, or an expression
// such as '' + number. Your function should do this the old-fashioned way
// and construct the string by analyzing and manipulating the number.

// Examples
// integerToString(4321);      // "4321"
// integerToString(0);         // "0"
// integerToString(5000);      // "5000"
// integerToString(1234567890);      // "1234567890"

// Most simplist/lazzy way.
// function integerToString(number) {
//   return Array.of(number).join('');
// }

// Using look up table
const DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function integerToString(number) {
  let output = '';
  // even it is 0 we want something
  // could easily be done with while/loop
  do {
    // will get the right most digits, will be our index
    let remaider = number % 10;
    // removing tenth's place in each loop
    // Math.floor() -> we are looking for whole number
    number = Math.floor(number / 10);

    // prepend DIGITS[remainder] return value
    // because remainder is the rightmost digit
    output = DIGITS[remaider] + output;
  } while (number > 0);

  return output;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"