// Write a function that takes one argument, a positive integer, and returns
// a string of alternating '1's and '0's, always starting with a '1'.
// The 'length' should be match the given integer.

// Examples:
// stringy(6); // "101010"
// stringy(9); // "101010101"
// stringy(4); // "1010"
// stringy(7); // "1010101"

// Understanding the Problem:
// Input: number
// Ouput: string
// Rules:
//  - length of string is the input number
//  - string must start with '1' then continue alternating '1' and '0'

// Algorithm:
// - create a variable 'output' that will hold the final string
// - as long as the output length is less than input number
//  - if index is even append '1'
//  - if index is odd append '0'

// Code:
function stringy(length) {
  let output = '';
  for (let index = 0; index < length; index += 1) {
    output += index % 2 === 0 ? 1 : 0;
  }

  return output;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"