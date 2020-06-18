// Clean up the words
// Given a sting that consists of some words and an assortment of non-alphabetic
// characters, write a function that returns that string with all of the
// non-alphabetic characters replaced with spaces. If one or more non-alphabetic
// characters occur in a row, you should only have one space in the result
// (i.e, the result string should never have consecutive spaces)

// Example:

// cleanUp("---what's my +*& line?");    // " what s my line "

// Understanding the Problem:
// Input: string
// Output: string
// Rules:
//  - non-alphabetic characters: anything thats is not in a-z/A-Z
//  - replace non-alphabetic with space
//  - no consecutive space

// Algorithm:
// - iterate over every character of the input
//   - check if the character is part of alphabet
//     - if yes leave it as-is
//     - if not convert it to space only if there is not a space before it

// Code:
function cleanUp(text) {
  let cleanedtext = '';
  for (let index = 0; index < text.length; index += 1) {
    if (isAlphabetChar(text[index])) {
      cleanedtext += text[index];
    } else if (!cleanedtext.endsWith(' ')) {
      cleanedtext += ' ';
    }
  }

  return cleanedtext;
}

function isAlphabetChar(char) {
  let alphabets = 'abcdefghijklmnopqrstuvwxyz';
  return alphabets.includes(char.toLowerCase());
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

// Using regular expression
// function cleanUp(text) {
//   return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
// }
