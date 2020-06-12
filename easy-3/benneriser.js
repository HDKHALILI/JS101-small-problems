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