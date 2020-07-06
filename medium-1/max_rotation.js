// Rotation (Part 3)

// Take the number 735291 and rotate it by one digit to the left, getting
// 352917. Next, keep the first digit fixed in place and rotate the remaining
// digits to get 329175. Keep the first two digits fixed in place and rotate
// again to get 321759. Keep the first three digits fixed in place and rotate
// again to get 321597. Finally, keep the first four digits fixed in place and
// rotate the final two digits to get 321579. The resulting number is called
// the maximum rotation of the original number.

// Write a function that takes an integer as an argument, and returns the
// maximum rotation of that integer. You can (and probably should) use the
// rotateRightmostDigits function from the previous exercise.

// Examples:

// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845

// Understandign the Problem:
// Input: number
// Ouput: max rotated number
// Rules:
//  - rotate the number
//  - exclude the first number and rotate the rest
//  - then exclude the first two numbers and rotate the rest
//  - ... until all the numbers are exluded from ratating

// Data Structure and Algorithm:
// Input: string
// Output: number
// Algorithm:
// - convert input to string
// - create an index variable
// - create result variable
// - while index is less than string's length
// - result = call rotateRigthmostDigits with string and index
// - increment index by 1

function maxRotation(number) {
  let numberString = String(number);

  for (let index = 0; index < numberString.length; index += 1) {
    let firstHalf = numberString.slice(0, index);
    let secondHalf = numberString.slice(index);
    numberString = firstHalf + rotateString(secondHalf);
  }

  return Number(numberString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845

// Using the rotateRightmostDigits
function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstHalf = numberString.slice(0, numberString.length - count);
  let secondHalf = numberString.slice(numberString.length - count);
  let rotatedString = firstHalf + rotateString(secondHalf);

  return Number(rotatedString);
}

function maxRotation2(number) {
  let numberOfDigits = String(number).length;

  // why >= 2? -> slice(length - 1) will give us the last element
  // rotating last element has no effect.
  for (let count = numberOfDigits; count >= 2; count -= 1) {
    number = rotateRightmostDigits(number, count);
  }

  return number;
}

console.log(maxRotation2(735291));          // 321579
console.log(maxRotation2(3));               // 3
console.log(maxRotation2(35));              // 53
console.log(maxRotation2(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation2(8703529146));      // 7321609845