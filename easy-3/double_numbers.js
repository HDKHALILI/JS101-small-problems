// Double Doubles
// A double number is an even length whose left-side digits are exactly the
// all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied
// by tow, unless the argument is a double number; return double numbers as-is.

// Examples:

// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

// Understanding the Problem:
// Input: integer
// Output: integer
// Rules:
//  - double number:
//    - even length
//  - return double number as-is
//  - return non-double number multiplied by 2

// Algorithm:
// - convert number to string
// - check if the length of input is even
//   - if not return input multiplied by 2
// - slice input in half
//  - use the length of input divide by 2 to get mid point
// - check is the first half is the same as the second half
//  - if yes return input as-is converted to number
//  - if not return input multiplied by 2

// Code:
function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let midPoint = Math.floor(stringNumber.length / 2);
  let leftSide = stringNumber.slice(0, midPoint);
  let rightSide = stringNumber.slice(midPoint);

  return leftSide === rightSide;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676