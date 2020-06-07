// Convert a String to a Signed Number
// Write a function that takes a string of digits, and returns the appropriate
// number as an integer. The string may have a leading + or - sign; if the
// first character is a +, your funcion return a positive number; if it is a -
// , your function should return a negative number. If no sign is given, you
// should return a positive number.

// You may assume the string will always contain a valid number.

// You may not use any standard conversion methods available in JavaScript,
// such as parseInt() and Number().
const DECI_DIGITS = {
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
function stringToSignedInteger(string) {
  let digits = null;
  if (string[0] === '+' || string[0] === '-') {
    digits = string.slice(1).split("").map((char) => DECI_DIGITS[char]);
  } else {
    digits = string.split('').map((char) => DECI_DIGITS[char]);
  }

  let output = 0;
  digits.forEach((digit) => {
    output = (output * 10) + digit;
  });
  return string[0] === '-' ? -output : output;
}

console.log(stringToSignedInteger('4321'));
console.log(stringToSignedInteger('-570'));
console.log(stringToSignedInteger('+100'));