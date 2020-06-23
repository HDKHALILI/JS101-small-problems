// Double Char (Part 2)

// Write a function that takes a string, doubles every consonant character in
// the string, and returns the result as a new string. The function should not
// double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

// Examples:

// doubleConsonants('String');          // "SSttrrinngg"
// doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
// doubleConsonants('July 4th');        // "JJullyy 4tthh"
// doubleConsonants('');                // ""

function shouldDouble(char) {
  // must be a letter and must not be a vowels
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';
  let vowels = 'aeiou';

  return alphabets.includes(char) && !vowels.includes(char);
}

function doubleConsonants(string) {
  let doubled = string.split('').map(char => {
    if (shouldDouble(char.toLowerCase())) {
      return char + char;
    } else {
      return char;
    }
  });

  return doubled.join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
