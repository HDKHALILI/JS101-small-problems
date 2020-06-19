// How old is Teddy?
// Build a program that randomly generates Teddy's age, and logs it to the
// console. Have the age be a random number between 20 and 120 inclusive.

let minAge = 20;
let maxAge = 120;
let age = Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;
console.log(age);