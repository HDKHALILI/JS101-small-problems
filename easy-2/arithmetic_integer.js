// Write a program that prompts the user for two positive integers, and then
// prints the results of the following operations on those two numbers:
// addition, subtraction, product, quotient, remainder and power.
// Do not worry about validating the input.

// Example:
// Enter the first number:
// => 23
// Enter the second number:
// => 17
// => 23 + 17 = 40
// => 23 - 17 = 6
// => 23 * 17 = 391
// => 23 / 17 = 1
// => 23 % 17 = 6
// => 23 ** 17 == 141050039560662968926103

// Understanding the Problem:
// Input
//  - integers
// Output:
//  - string
// Rule:
//  - addition: input1 + input2
//  - subtraction: input1 - input2
//  - product: input1 * input2
//  - quotient: input1 / input2 -> result is floored
//  - remainder: input1 % input2
//  - power: input1 ** input2

// Data Structure:
// Input:
//  - integer
// Output:
//  - string

// Algorithm:
// - number1 = ask the user form number
// - number2 = ask the user form number
// - perform arithmetic operations and log to the screen

// Code:
const readline = require("readline-sync");

let number1 = parseInt(readline.question("Enter the first number:\n"), 10);
let number2 = parseInt(readline.question("Enter the second number:\n"), 10);

console.log(`=> ${number1} + ${number2} = ${number1 + number2}`);
console.log(`=> ${number1} - ${number2} = ${number1 - number2}`);
console.log(`=> ${number1} * ${number2} = ${number1 * number2}`);
console.log(`=> ${number1} / ${number2} = ${Math.floor(number1 / number2)}`);
console.log(`=> ${number1} % ${number2} = ${number1 % number2}`);
console.log(`=> ${number1} ** ${number2} = ${number1 ** number2}`);
