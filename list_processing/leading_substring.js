// Leading Substrings

// Write a function that takes a string argument, and returns a list of all
// substrings that start from the beginning of the string, ordered from
// shortest to longest.

// Examples:

// substringsAtStart('abc');      // ["a", "ab", "abc"]
// substringsAtStart('a');        // ["a"]
// substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

// using loop
function substringsAtStart(string) {
  let substrings = [];
  for (let index = 0; index < string.length; index += 1) {
    let substring = string.slice(0, index + 1);
    substrings.push(substring);
  }

  return substrings;
}

// use array methods
function substringsAtStart2(string) {
  return string
    .split('')
    .map((_, index, stringArray) => stringArray.slice(0, index + 1).join(''));
}

console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
console.log(substringsAtStart2('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart2('a'));        // ["a"]
console.log(substringsAtStart2('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]