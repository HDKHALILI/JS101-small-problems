// Write a function that computes the sum of all numbers between 1 and some
// other number, inclusive, that are multiples of 3 or 5. For instance, if
// the supplied number is 20, the result should be 98
// (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20)
// You may assume that the number passed is an integer greater than 1.

// Examples:
// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

// Understand the Problem:
// Input:
//  - numeber, integer
//  - greater than 1
// Output:
//  - number
// Rule:
//  - multiple of mean: inpute divided by that number has 0 remainder

// Algorithm:
//  - sum = 0
// - loop from 1 to input (inclusive)
//  - if current number % 3 is 0 or % 5 is 0
//    - sum = sum + current number
//  return sum

// Code:
function multisum(number) {
  let sum = 0;
  for (let count = 1; count <= number; count += 1) {
    if (count % 3 === 0 || count % 5 === 0) {
      sum += count;
    }
  }
  return sum;
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168
