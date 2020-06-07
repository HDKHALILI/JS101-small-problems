// Convert a String to a Number!
// The parseInt() method converts a string of numeric characters (including
// an optional plus or minus sign) to an integer. The method takes 2
// arguments where the first argument is the string we want to convert and
// the second argument should always be 10 for out purposes. parseInt() and
// the Number() method behaves similarly. In this exercise, you will create
// a function that does the same thing.

// Write a function that takes a String of digits, and returns the appropriate
// number as integer. You may not use any of the methods mentioned above.

// For now, do not worry about leading + or - signs, nor should you worry
// about invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methos available in
// JavaScript, such as String() and Number(). Your function should do this
// the old-fashioned way and calculate the result by analysing the
// characters in the string.

// Examples:
// stringToInteger("4321") === 4321 => true
// stringToInteger("570") === 570 => true

// Understanding the Problem
// Input:
//  - string
// Output:
//  - number

// Code:

function stringToInteger(string) {
  const DEC_DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  let arrayOfDigits = string.split("").map(char => DEC_DIGITS[char]);
  let output = 0;
  arrayOfDigits.forEach(digit => {
    // * 10 is because decimal is base 10
    output = (output * 10) + digit;
  });
  return output;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

// *** Further Exploration ***
// Write a hexadecimalToInteger() function that converts a string representing
// a hexadecimal number to its integer value. Note that hexadecimal number
// use base 16 instead of 10, and the "digits" A, B, C, D, E, and F (and the
// lowercase equivalents) correspond to decimal value of 10-15.

const HEX_DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
};
function hexadecimalToInteger(string) {

  let digits = string.split("").map(char => HEX_DIGITS[char.toLowerCase()]);
  let output = 0;
  digits.forEach((digit) => {
    // * 16 -> hexadecimal is base 16
    output = (output * 16) + digit;
  });

  return output;
}

console.log(hexadecimalToInteger('4D9f') === 19871);
console.log(hexadecimalToInteger('4D9f'));