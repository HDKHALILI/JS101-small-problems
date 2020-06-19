// How old is Teddy?
// Build a program that randomly generates Teddy's age, and logs it to the
// console. Have the age be a random number between 20 and 120 inclusive.

let minAge = 20;
let maxAge = 120;
let age = randomBetween(120, 20);
console.log(`Teddy is ${age} years old!`);

// *** Further Exploration ***

// The randomBetween function used the Math.floor() method. Would it make a
// difference if the Math.round() method was used instead?
// Using Math.round will exceed the upper range (we will get 121 at some point)

// Also, how can we make the function more robust? What if the user
// inadvertently gave the inputs in reverse order (i.e., the value
// passed to min was greater than max)?

function randomBetween(min, max) {
  if (min > max) {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}