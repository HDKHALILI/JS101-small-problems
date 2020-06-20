// Letter Counter (Part 1)
// Write a function that takes a string consisting of zero or more space
// separated words, and return an object that shows the number of words
// of different sizes.

// Word consist of any sequence of no-space characters.

// Examples:

// wordSizes('Four score and seven.');
// => // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');
// => { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");
// => { "2": 1, "4": 1, "6": 1 }
// wordSizes(''); // => {}

// Understanding the Problem:
// Input:
//  - string
//    - consist of one or more space separated words
// Output: object made of word length: frequency
// Rule:
//  - word: any sequence of non-space characters

// Algorithm:
// - create an empty object that will hold the result
// - split the words into array using space.
// - loop through the words array
//   - if word length is greater than 0
//    - if result[word length] doesn't exist
//    - add property [word length] to result and set the value as zero
//    - if result[word length] exist increment by 1
// - end loop
// return result

// Code:
function wordSizes(text) {
  let result = {};
  text.split(' ').forEach(word => {
    let wordSize = word.length;
    if (wordSize > 0) {
      result[wordSize] = result[wordSize] || 0;
      result[wordSize] += 1;
    }
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));
// => // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
// => { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));
// => { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes('')); // => {}

// Part 2:
// Modify the wordSizes function to exclude non-letters when determing word size
// For instance, the word size of "it's" is 3 not 4.

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function onlyLetters(word) {
  let cleanedWord = '';

  for (let index = 0; index < word.length; index += 1) {
    let char = word[index];
    if (isLetter(char)) {
      cleanedWord += word[index];
    }
  }

  return cleanedWord;
}

function wordSizes2(text) {
  let count = {};
  text.split(' ').forEach(word => {
    let cleanWord = onlyLetters(word.toLowerCase());
    let wordSize = cleanWord.length;
    if (wordSize > 0) {
      count[wordSize] = count[wordSize] || 0;
      count[wordSize] += 1;
    }
  });

  return count;
}

console.log('-------------------');
console.log(wordSizes2('Four score and seven.'));
// => // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes2('Hey diddle diddle, the cat and the fiddle!'));
// => { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes2("What's up doc?"));
// => { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes2('')); // => {}