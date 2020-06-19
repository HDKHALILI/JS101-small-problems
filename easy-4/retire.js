// When will I retire?
// Build a program that logs when the user will retire and show how many more
// years the user has to work until retirement.

// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!

const readlineSync = require('readline-sync');

console.log("What is your age?");
let currentAge = Number(readlineSync.prompt());

console.log("At what age would you like to retire?");
let retirementAge = Number(readlineSync.prompt());

let currentYear = new Date().getFullYear();
let yearsToWork = retirementAge - currentAge;
let retirementYear = currentYear + yearsToWork;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}`);
console.log(`You have only ${yearsToWork} years of work to go!`);