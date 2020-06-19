// Write a program that solicits six numbers from the user, then logs a message
// that describes whether or not the six number appears amongst the first five
// numbers

// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.

// Understanding the Problem:
// Input: number
// Output: string
// Rule:
//  - does the final input is the same as one of the first five inputs

// Algorithm:
// - ask the user for a number and add it to an array
// - if the array length has reached 5
//   - check if the sixth input is in the array
//     - if yes then log message saying it does appear
//     - if no then log message saying it does not appear

const readlineSync = require('readline-sync');

let numbers = [];

console.log("Enter the 1st number: ");
numbers.push(readlineSync.prompt());

console.log("Enter the 2nd number: ");
numbers.push(readlineSync.prompt());

console.log("Enter the 3rd number: ");
numbers.push(readlineSync.prompt());

console.log("Enter the 4th number: ");
numbers.push(readlineSync.prompt());

console.log("Enter the 5th number: ");
numbers.push(readlineSync.prompt());


let last = readlineSync.question("Enter the last number: ");

if (numbers.includes(last)) {
  console.log(`The number ${last} appears in ${numbers}.`);
} else {
  console.log(`The number ${last} doesn't appears in ${numbers}.`);
}

// *** Further Exploration ***

// What if the problem was looking for a number that satisfies some condition
// (e.g., a number greater than 25), instead of a specific number? Would the
// current solution still work? Why or why not? Think about this first before
// scrolling down.

if (numbers.some(num => num > last)) {
  console.log(
    `The number ${last} is less than some of these (${numbers}) numbers.`
  );
} else {
  console.log(
    `The number ${last} is not less than any of these (${numbers}) numbers.`
  );
}