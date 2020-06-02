// Write a program that will ask the user's name. The program will then greet
// the user. If the user writes "name!" then the computer yells back to the
// user

// Examples
// What is your name? Bob
// => Hello Bob.

// What is your name? Bob!
// => HELLO BOB. WHY ARE WE SCREAMING?

// Understanding the Problem:
// Input:
//  - string
//  - check for empty string
// Output:
//  - string
//   - Hello [input]
//   - or HELLO [input]. WHY ARE WE SCREAMING?
// Rule:
// - check for '!' in the input

// Data Structure:
// Input:
//  - string
// Output:
// - string

// Algorithm:
// - ask the uer for name
//  - name = response
//  - check for empty response, and ask again
// - check if the response contain '!'
//   - if yes then log "HELLO [name uppercased]. WHY ARE WE SCREAMING?"
//   - else log "Hello [name]."

// Code:
const readline = require("readline-sync");

let name = readline.question("What is your name? ");
while (name.trim() === "") {
  name = readline.question("Please enter a valid name ");
}

if (name[name.length - 1] === "!") {
  console.log(
    `HELLO ${name.replace("!", "").toUpperCase()}. WHY ARE WE SCREAMING?`
  );
} else {
  console.log(`Hello ${name}.`);
}
