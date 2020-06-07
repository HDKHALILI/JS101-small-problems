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
  const DIGITS = {
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

  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let output = 0;
  arrayOfDigits.forEach(digit => {
    output = (output * 10) + digit;
  });
  return output;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
