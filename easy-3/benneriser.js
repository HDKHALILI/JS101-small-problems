// Write function that will take a short line of text,
// and write it to the console within a box.

// logInBox('To boldly go where no one has gone before.');
// Will log on the console:

/*
  +--------------------------------------------+
  |                                            |
  | To boldly go where no one has gone before. |
  |                                            |
  +--------------------------------------------+
*/

/*
  logInBox('');
  +--+
  |  |
  |  |
  |  |
  +--+
*/

// You may assume that the output will always fit in your browser window.

// Understanding the Problem:
// Input: string
// Output: strin
// Rules:
//  - log the text with in a box
//   - Padding:
//     - left and right: one space
//     - top and bottom: 3 spaces
//   - Borders: each corner peice is a +
//     - top and bottom: -
//     - left and right: |
//  - height: 7 character
//  - width: string length + left and right paddings
//  - for empty string log an empty box

// Algorithm:
// - declare a variable boxLength = message.length + 2
// - horizontalLine = '+' + '-' * boxLength + '+'
// - emptyLine = '|' + ' ' * boxLength + '|'
// - messageLine = '|' + ' ' + message + ' ' + '|'
// - log horizontalLine
// - log emptyLine
// - log messageLine
// - log emptyLine
// - log horizontalLine

function logInBox(message) {
  let boxLength = message.length + 2;
  let horizontalLine = `+${'-'.repeat(boxLength)}+`;
  let emptyLine = `|${' '.repeat(boxLength)}|`;
  let messageLine = `| ${message} |`;
  console.log(horizontalLine);
  console.log(emptyLine);
  console.log(messageLine);
  console.log(emptyLine);
  console.log(horizontalLine);
}

logInBox('hello world');

// *** Further Exploration ***
// 1.
// Modify this function so that it truncates the message if it doesn't fit
// inside a maximum width provided as a second argument (the width is the
// width of the box itself). You may assume no maximum if the second argument
// is omitted.

function logInBox2(message, size) {
  let boxLength = size ? (size + 2) : (message.length + 2);
  let horizontalLine = `+${'-'.repeat(boxLength)}+`;
  let emptyLine = `|${' '.repeat(boxLength)}|`;
  let messageLine = `| ${message.slice(0, size)} |`;

  console.log(horizontalLine);
  console.log(emptyLine);
  console.log(messageLine);
  console.log(emptyLine);
  console.log(horizontalLine);
}

logInBox2('To boldly go where no one has gone before.');
logInBox2('To boldly go where no one has gone before.', 30);

// 2.
// For a challenging but fun exercise, try word wrapping messages that
// are too long to fit, so that they appear on multiple lines but are
// still contained within the box. This isn't an easy problem, but
// it's doable with basic JavaScript.

// Algorithm:
// - if size is given we set box length to size otherwise message's length
// - split message into peices where each peice is as long as the given size
//   - save each peice in an array
// - log horizontal line
// - log empty line
// - loop over message peices
//   - log it with necessory decoration
// - log empt line
// - log horizontal line

// splitByLength
// - create an result array
// - split the text by space and assign it to array variable
// - create an empty words array
// - start a for loop that ends when index is equal to array.length
//   - if joining words with space and adding the length of the current word
//     to it is greater or equal to the given length
//      - append words to result
//      - set words to empty array
//   - add current word to words array
// - add words to result
// - return result

function splitByLength(text, length) {
  let result = [];
  let wordsArray = text.split(' ');
  let currentWords = [];
  for (let index = 0; index < wordsArray.length; index += 1) {
    if ((currentWords.join(' ').length + wordsArray[index].length) >= length) {
      result.push(currentWords);
      currentWords = [];
    }
    currentWords.push(wordsArray[index]);
  }

  result.push(currentWords);

  return result;
}

function longestWord(text) {
  return text.split(' ').sort((a, b) => b.length - a.length)[0];
}

function logInBox3(message, size) {
  if (size < longestWord(message).length) {
    size = longestWord(message).length;
  }
  let length = size ? (size + 2) : (message.length + 2);
  let messages = splitByLength(message, size);
  let horizontalLine = `+${'-'.repeat(length)}+`;
  let emptyLine = `|${' '.repeat(length)}|`;

  console.log(horizontalLine);
  console.log(emptyLine);

  messages.forEach(message => {
    console.log(`| ${message.join(' ').padEnd(size + 1, ' ')}|`);
  });

  console.log(emptyLine);
  console.log(horizontalLine);

}

logInBox3(
  "The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.", 5
);

logInBox3(
  "You can't go back and change the beginning, but you can start where you are and change the ending.", 30
);

logInBox3(
  "The best thing to hold onto in life is each other.", 24
);