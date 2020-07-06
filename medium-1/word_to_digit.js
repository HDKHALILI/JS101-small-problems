// Word to Digit

// Write a function that takes a sentence string as an argument, and returns
// that string with every occurrence of a "number word" — 'zero', 'one', 'two',
// 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its
// corresponding digit character.

// Example:

// wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// make an array of word number zero - nine
let numberWords = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];

function wordToDigit(text) {
  return text.split(' ').map(word => {
    if (word.includes('.')) {
      if (numberWords.includes(word.slice(0, word.length - 1))) {
        return numberWords.indexOf(word.slice(0, word.length - 1)) + '.';
      }
    } else if (numberWords.includes(word)) {
      return numberWords.indexOf(word);
    }
    return word;
  })
    .join(' ');
}

function onlyLetters(word) {
  return word
    .toLowerCase()
    .split('')
    .map(char => char >= 'a' && char <= 'z')
    .join('');
}

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.')
);
