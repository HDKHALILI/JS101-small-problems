// Understand the Problem:
// first function
// Input: number
// Output: array
// Rule:
//  - array should contain the denominator
//  - denominator: all the number, when dividing 1
//    by each and sum would equal the input number

// second function
// Input: array
// Output: number
//  - sum all the items in the array

// Algorithm:
// using greedy algorithm
//  - set denominators to empty array
//  - set denominator to 1
//  - start a loop that ends when the input is less than or equal to zero
//    - set currentFraction to 1 / denominator
//    - if the currentFraction is less than or equal to input
//      - reassign input to input minus current fraction
//      - add current denominator to denominator array
//    - increment denominator by 1
//  - end loop
//  - return denominator

const Fraction = require('fraction.js');

function egyptian(target) {
  let denominators = [];
  let denominator = 1;
  while (target > 0) {
    let currentFraction = new Fraction(1, denominator);
    if (currentFraction <= target) {
      target = new Fraction(target - currentFraction);
      denominators.push(denominator);
    }

    denominator += 1;
  }
  console.log(denominators);
  return denominators;
}

function unegyptian(denominator) {
  return denominator.reduce((sum, num) =>
    sum + new Fraction(1, num), new Fraction(0)
  );
}

console.log(egyptian(Fraction(127, 130))); // -> [ 2, 3, 7, 1365 ]
console.log(egyptian(Fraction(11, 12))); // -> [2, 3, 12]
console.log(egyptian(Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3