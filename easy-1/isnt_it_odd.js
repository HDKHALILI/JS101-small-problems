// Write a function that takes one integer argument, which may be positive,
// negative, or zero. This method returns 'true' if the number's absolute
// value is odd. You may assume that the argument is a valid integer value.

// Understand the Problem
// Input:
//  - integer
//    - positive
//    - negative
//    - zero
// Output:
//  - return boolean
// Rule:
//  - odd is input % 2 is 1
//  - absolute value (no fraction)

// Examples
// isOdd(2); // => false
// isOdd(5); // => true
// isOdd(-17); // => true
// isOdd(-8); // => false
// isOdd(0); // => false
// isOdd(7); // => true

// Data Structure
// Input:
//  - integer
// Output:
//  - boolean
// Rule:
//  - input % 2 is 1 -> odd

// Algorithm:
// convert input to absolute integer
// use modulo operator to find the remainder of input divided by 2
// return if remainder is 1

// Code
function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
