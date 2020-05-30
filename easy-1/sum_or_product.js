// Write a program that asks the user to enter an integer greater than 0,
// then asks whether the user wants to determine the sum or product of all
// numbers between 1 and the entered integer, inclusive.

// Examples:
// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s
// => The sum of the entegers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p
// => The product of the entegers between 1 and 6 is 720.

// Understanding the Problem:
// Input:
//  - integer
//    - must be greater than 0
//  - string
// Ouput:
//  - stringe
// Rules:
//  - starting from 1
//  - to the input (inclusive)
//  - sum means adding all the numbers from 1 to input
//  - product means multiply all the numbers from 1 to input

// Data Structure
// Input:
//  - number - integer
//  - string - sum / product
// Output:
//  - string
// Rules:
//  - if construct to determine the user's intention
//  - loop from 1 to input inclusive

// Algorithm:
//  - prompt the user for an integer greater than 0
//  - number = reponse
//  - verify that response is integer and greater than 0
//  - prompt the user to sum or product
//  - sumOrProduct = response
//  - verify the response is either 's' or 'p'
//  - if sumOrProduct is sum
//    - sum = 0;
//    - loop from 1 to number(inclusive)
//      - sum = sum + current number
//    - log "The sum of integers between 1 and [number] is [sum]."
//  - if sumOrProduct is product
//    - product = 1;
//    - loop from 1 to number(inclusive)
//       - product = product * current number
//    - log "The product of the integers between 1 and [number] is [product]."

// Code

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number(number) < 1 || Number.isNaN(number);
}

function computeSum(inputNum) {
  let total = 0;
  for (let current = 1; current <= inputNum; current += 1) {
    total += current;
  }

  return total;
}

function computeProduct(inputNum) {
  let total = 1;
  for (let current = 1; current <= inputNum; current += 1) {
    total *= current;
  }

  return total;
}

prompt("Please enter an integer greater than 0");
let number = parseInt(readline.prompt(), 10);

while (invalidNumber(number)) {
  prompt("That is an invalid input");
  prompt("Please enter an integer greater than 0");
  number = parseInt(readline.prompt(), 10);
}

prompt("Enter 's' to compute the sum, or 'p' to compute the product.");
let sumOrProduct = readline.prompt().toLowerCase();

while (!["s", "p"].includes(sumOrProduct)) {
  prompt("That is an invalid operation");
  prompt("Enter 's' to compute the sum, or 'p' to compute the product.");
  sumOrProduct = readline.prompt();
}

if (sumOrProduct === "s") {
  let sum = computeSum(number);
  prompt(`The sum of the integers between 1 and ${number} is ${sum}`);
} else if (sumOrProduct === "p") {
  let product = computeProduct(number);
  prompt(`The product of the integers between 1 and ${number} is ${product}`);
}
