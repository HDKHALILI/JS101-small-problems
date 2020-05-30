// Create a simple tip calculator. The program should prompt for a bill
// amount and tip rate. The program must compute the tip, and then log
// both the tip and the total amount of the bill to the console.
// You can ignore inpute validation and assume that the user will
// enter numbers.

// Examples
// What is the bill? 200
// What is the tip percentage? 15

// => The tip is $30.00
// => The total is $230.00

// Understanding the Problem
// Input:
//  - numbers
//    - bill amount
//    - tip percentage
// Output:
// - string
//    - tip amount prefixed with $ and 2 decimal places
//    - total bill prefixed with $ and 2 decimal places
// Rules:
//  tip amount is a percentage of the bill
//    - percentage = tip percentage / 100
//    - tip = bill amount * percentage
//  total bill = bill amount + tip

// Data Structure:
// Input:
//  string
//    - convert to number type
// Output:
//  - string

// Algorithm:
// - prompt the user for bill amount
// - amount = response
// - prompt the user for tip percentage
// - tipPercentage = response
// - tip = amount * (tipPercentage / 100)
// - log tip amount prefixed with $ and with 2 decimal places
// - total = amount + tip
// - log total amount prefixed with $ and with 2 decimal places

const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("What is the bill?");
let bill = Number(readline.prompt());

prompt("What is the tip percentage?");
let percentage = Number(readline.prompt());

let tip = bill * (percentage / 100);
prompt(`The tip is ${tip.toFixed(2)}`);

let total = tip + bill;
prompt(`The total is ${total.toFixed(2)}`);
