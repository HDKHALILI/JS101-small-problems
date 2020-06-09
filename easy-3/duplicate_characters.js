// ddaaiillyy ddoouubbllee
// Write a function that takes a string as argument and returns a new string
// that contains the value of the original string with all consecutive
// duplicate characters collapsed into a single character.

// Examples:
// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// Understanding the Problem
// Input:
//  - string
// Output:
//  - string
// Rule:
//  - no consecutive duplicate character

// Data Structure
// Input:
//  - string
// Output:
//  - string

// Algorithm
// - output = ''
// - iterate over each character of the string
//  if current char is not the same as next char
//   - concat it with output

// Code
function crunch(string) {
  let output = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== string[index + 1]) {
      output += string[index];
    }
  }
  return output;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""