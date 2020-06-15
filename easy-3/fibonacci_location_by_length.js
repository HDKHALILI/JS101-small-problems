// Fibonacci Number Location By Length
// The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...)
// such that the first two numbers are 1 by definition, and each subsequent
//  number is the sum of the two previous numbers. This series appears
//  throughout the natural world.

// Computationally, the Fibonacci series is a simple series, but the results
// grow at an incredibly rapid rate. For example, the 100th Fibonacci number
// is 354,224,848,179,261,915,075—that's enormous, especially considering
// that it takes six iterations just to find the first 2-digit Fibonacci number.

// Write a function that calculates and returns the index of the first Fibonacci
// number that has the number of digits specified by the argument.
// (The first Fibonacci number has an index of 1.)

// You may assume that the argument is always an integer greater than or
// equal to 2.

// Understanding the Problem:
// Input: integer greater than 2
// Output: integer
// Rules:
//  - the first fibonacci sequence that has the given length

// Algorithm:
// - find the fibonacci sequence
//  - check if the number of digit is equal to input
//  - the return the sequence index

// fibonacciSequence
// - 0
// - 1 (0 + 1)
// - 2 ( 1 + 1)


function findFibonacciIndexByLength(length) {
  let counter = 2;
  let first = 1;
  let second = 1;
  let fibonacci;

  while (String(fibonacci).length < length) {
    counter += 1;
    fibonacci = first + second;
    first = second;
    second = fibonacci;
  }
  return counter;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74