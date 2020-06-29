// Sum of Dihits
// Write a function that takes one argument, a positive integer, and returns the
// sum of its digits. Do this using list processing techniques.

// Examples:

// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45

function sum(number) {
  let numberStringArray = String(number).split('');
  return numberStringArray.reduce((accum, digit) => accum + Number(digit), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45