// Rotation (Part 2)

// Write a function that rotates the last count digits of a number. To perform
// the rotation, move the first of the digits that you want to rotate to the
// end and shift the remaining digits to the left.

// Examples:

// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917

// Understanding the Problem:
// Input: two numbers
//  - the original number
//  - last count digits to rotate
// Output: the rotated number
// Rules:
//  - Rotate the last count digits of the original number.
//  - Leave the first digits (not part of the last count digits) in the same
//    order
//  - Apply the same rule for the rotation as in the previous exercise: slice
//    off the first of digits that you want to rotate, and append it to the end
//    of the number
//  - Join the first digits with the last count rotated digits, and return as
//    number.

// Data Structure and Algorithm:
// If we look carefully at the rule we came up with, we can see verbs such as
// "slice", "append", and "join". This indicates that even though the inputs
// and the outputs are numbers, our ideal data structure is to operate on
// the numbers as string.
// Algorithm:
// - convert the original number to string
// - split the string into tow parts: the part to ramain unchanged, and the part
//   to be rotated
// - join the first part back together with the rotated second part
// - convert the string to a number and return it.

// Code

function rotateRightmostDigits(number, count) {
  let numberString = String(number);
  let firstHalf = numberString.slice(0, numberString.length - count);
  let secondHalf = numberString.slice(numberString.length - count);
  let rotatedString = firstHalf + rotateString(secondHalf);

  return Number(rotatedString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
