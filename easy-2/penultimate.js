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

// *** Further Exploration ***
// Our solution ignored a couple of edge cases because we explicitly stated
// that you didn't have to handle them: strings that contain just one word,
// and strings that contain no words.

// Suppose we need a function that retrieves the middle word of a phrase/
// sentence. What edge cases need to be considered? How would you handle
// those edge cases without ignoring them? Write a function that returns the
// middle word of a phrase or sentence. It should handle all of the edge
// cases you thought of.
// Edge cases:
// - empty string
// - less than 3 words
// - even number length
console.log("*** Further Exploration ***");
function middleWord(string) {
  let wordsArray = string.trim().split(" ");
  if (wordsArray.length < 3) {
    return "Invalid string";
  }

  let middleIndex = Math.floor((wordsArray.length - 1) / 2);
  if (wordsArray.length % 2 === 0) {
    // return two words so we there is even number of words left and right
    return wordsArray.slice(middleIndex, middleIndex + 2).join(" ");
  }

  return wordsArray[middleIndex];
}

console.log(middleWord(""));
console.log(middleWord("    "));
console.log(middleWord("Hello from Node"));
console.log(middleWord("Hello from Node in year 2020"));
