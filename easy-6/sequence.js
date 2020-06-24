// Counting Up

// Write a function that takes an integer argument, and returns an array
// containing all integers between 1 and the argument (inclusive), in
// ascending order.

// You may assume that the argument will always be a positive integer.

// Examples:

// sequence(5);    // [1, 2, 3, 4, 5]
// sequence(3);    // [1, 2, 3]
// sequence(1);    // [1]

function sequence(number) {
  let result = [];
  for (let index = 1; index <= number; index += 1) {
    result.push(index);
  }

  return result;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

// *** Further Exploration ***
// Can you use forEach or map in your solution? why or why not?
// we cannot use forEach or map methods because we are starting with an
// empty array, each of those method will not run any iteration becuause
// length of array is zero.