// Write a function that takes two strings as arguments, determines the longer
// of the two strings, and then returns the result of concatenating the
// shorter string, the longer string, and the shorter string once again.
// You may assume that the strings are of different lengths.

// Examples
// shortLongShort('abc', 'defgh');    // => "abcdefghabc"
// shortLongShort('abcde', 'fgh');    // => "fghabcdefgh"
// shortLongShort('', 'xyz');         // => "xyz"

// Understanding the Problem:
// Input:
//  - strings
// Output:
//  - strings
//  - concatenating inputs based on rule
// Rule:
//  - longer string => string that has a biger length value
//  - shorter string + longer string + shorter string
//  - we can assume strings will have different lengths
//    - if not? - ask
//    - possible choice: first argument + second argument + first argument

// Data Structure:
// Input:
//  - string
// Output:
//  - string
// Rule:
//  if/else construct to determine longer string

// Algorithm:
// - if firstArg.length > secondArg.length
//  - return secondArg + firstArg + secondArg
//  if first.length < second.length
//   - return firstArg + secondArg + firstArg
// - else
//   - return firstArg + secondArg + firstArg

// Code
function shortLongShort(first, second) {
  if (first.length > second.length) {
    return second + first + second;
  } else if (first.length < second.length) {
    return first + second + first;
  } else {
    return first + second + first;
  }
}

console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort("", "xyz")); // "xyz"
console.log(shortLongShort("lmn", "opq")); // "xyz"
