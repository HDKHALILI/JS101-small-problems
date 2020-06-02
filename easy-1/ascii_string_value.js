// Write a function that determines and returns the ASCII string value of a
// string passed in as an argument. The ASCII string value is the sum of
// the ASCII values of every character in the string.
// (You may use String.prototype.charCodeAt()to determine the ASCII value of
// a character.)

// Example:
// asciiValue('Four score');         // 984
// asciiValue('Launch School');      // 1251
// asciiValue('a');                  // 97
// asciiValue('');                   // 0

// Understand the Problem:
// Input:
//  - string
// Output:
// - number
// Rule:
// - ASCII value: the numerical value, or order of an ASCII character
// - ASCII string value: the sum of ASCII value of every character in
//   the string.

// Data Structure:
// Input:
//  - String
// Output:
//  - Number

// Algorithm
//  asciiStringValue = 0;
// - loop through every characters in the string
//  - get ASCII value of the current character
//   - add to ascii_string_value
//  return asciiStringValue

// Code
function asciiValue(string) {
  let sum = 0;
  for (let index = 0; index < string.length; index += 1) {
    sum += string.charCodeAt(index);
  }

  return sum;
}

console.log(asciiValue("Four score")); // 984
console.log(asciiValue("Launch School")); // 1251
console.log(asciiValue("a")); // 97
console.log(asciiValue("")); // 0
