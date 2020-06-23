// Double Char (Part 1)

// Write a function that takes a string, doubles every character in the string,
// and returns the result as new string.

// Examples:

// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""

function repeater(string) {
  let resultString = '';

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    resultString += char.repeat(2);
  }

  return resultString;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""