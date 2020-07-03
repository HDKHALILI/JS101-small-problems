// Delete Vowels

// Write a function that takes an array of strings, and returns an array of the
// same values with all vowels (a, e, i, o, u) removed.

// Examples:

// removeVowels(['abcdefghijklmnopqrstuvwxyz']);
// ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(['green', 'YELLOW', 'black', 'white']);
// ["grn", "YLLW", "blck", "wht"]
// removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

function removeVowels(strings) {
  return strings.map(string => {
    return noVowels(string);
  });
}

function noVowels(string) {
  let removedVowels = '';
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if (!'aeiou'.includes(char.toLowerCase())) {
      removedVowels += char;
    }
  }

  return removedVowels;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
// ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
// ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]


// Using regex
function removeVowels2(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}