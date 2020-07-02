// All Substrings

// Write a function that returns a list of all substrings of a string. Order
// the returned list by where in the string the substring begins. This means
// that all substrings that start at position 0 should come first, then all
// substrings that start at position 1, and so on. Since multiple substrings
// will occur at each position, return the substrings at a given position from
// shortest to longest.

// You may (and should) use the substringsAtStart function you wrote in the
// previous exercise:

// Example:

// substrings('abcde');

// returns
/*
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
  */

function substringsAtStart(string) {
  return string
    .split('')
    .map((_, index, stringArray) => stringArray.slice(0, index + 1).join(''));
}

function substrings(string) {
  let allSubstrings = [];
  for (let index = 0; index < string.length; index += 1) {
    let currentString = string.slice(index);
    let currentSubstrings = substringsAtStart(currentString);
    allSubstrings = allSubstrings.concat(currentSubstrings);
  }

  return allSubstrings;
}

console.log(substrings('abcde'));