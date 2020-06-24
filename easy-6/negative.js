// Always Return Negative

// Write a function that takes a number as an argument. If the argument is a
// positive number, return the negative of that number. If the argument is a
// negative number, return it as-is.

// Examples:

// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0

function negative(number) {
  return Math.sign(number) === -1 ? number : -number;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

// *** Further Exploration ***
// Did you notice that negative(0) returns -0? What is this value, -0? Is it
// different from 0 in some way? Use Google to look for an explanation of -0.
// In particular, see if you can learn how to differentiate between 0 and -0
// in a program.

// JavaScript has two different representations of zeros: positive zero
// represented by +0 (or just 0), and negative zero, represented by -0.
// -0 === 0 is true.
// -0 == 0 is true
// To differentiate between them we can use:
// es6+
// Object.is(0, -0) => false
// before es6
// 1/-0 === -Infinity

function negative2(number) {
  if (Object.is(number, -0)) {
    return number;
  }
  return Math.sign(number) === -1 ? number : -number;
}

console.log(negative2(5));     // -5
console.log(negative2(-3));    // -3
console.log(negative2(0));     // -0
console.log(negative2(-0));     // -0
