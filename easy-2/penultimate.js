// Write a function that returns the next to last word in the String passed
// to it as argument
// Words are any sequence of non-blank character
// You may assume that the input String will always contain at least two words

// Examples:
// console.log(penultimate("last word") === "last"); // logs true
// console.log(penultimate("Launch School is great!") === "is"); // logs true

// Uderstanding the Problem:
// Input:
//  - string
//  - at least two words
// Output:
// - true or false
// Rules:
//  - word = any sequence of non-blank character
//  - penultimate = second last

// Data Structure:
// Input:
//  - string
// Output:
// - boolean

// Algorithm:
// - if string has two or more words
//  - split the string by space.
//  - return the value in the second last index

// Code:
function validString(string) {
  return string.trim().split(" ").length >= 2;
}

function penultimate(string) {
  let wordsArray = string.trim().split(" ");
  let secondLastIndex = wordsArray.length - 2;
  if (validString(string)) {
    return wordsArray[secondLastIndex];
  } else {
    return "invalid string";
  }
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
console.log(penultimate(" Launch School is great! ")); // logs true
console.log(penultimate("  ")); // logs true
