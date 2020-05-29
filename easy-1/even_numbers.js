// Log all even numbers from 1 to 99, inclusive, to the console.
// Log all numbers on separate lines.

// Uderstanding the Problem:
// Input:
//  - integer 1 - 99 inclusive
// Output:
//  - integer
//  - one number per line
// Rule:
//  - even - inpute divided by 2 has a remainder of 0.

// Data Structure:
// Input:
//  - number
//    - integer
// Output:
//  - number

// Algorithm:
// - loop through the range 1 - 99 inclusive
// - if the current number % 2 is 0 log it to the console
// - else do nothing

// Code
for (let counter = 1; counter <= 99; counter += 1) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
}
