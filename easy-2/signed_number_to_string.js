// Convert a Signed Number to a String
// Write a function that takes an integer, and converts it to a string
// representation.

// You may not use any of the standard conversion functions available in
// JavaScript, such as String() and Number.prototype.toString(). You may,
// however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

// Examples

// console.log(signedIntegerToString(4321) === "+4321");
// console.log(signedIntegerToString(-123) === "-123");
// console.log(signedIntegerToString(0) === "0");

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

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case 1:
      return '+' + integerToString(number);
    case -1:
      return '-' + integerToString(-number);
    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(4321));
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(-123));
console.log(signedIntegerToString(0) === "0");