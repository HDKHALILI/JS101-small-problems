// Log all odd numbers from 1 to 99, inclusive, to the console.
// Log all numbers on a separate lines.

// Understand the Problem
// Input:
//  - integer
//    - range 1 - 99 inclusive
// Output:
//  - integer
//  - logged to screen
// Rule:
// - odd is inpute divided by 2 with remainder of 1

// Data Structure
// Input:
// - integer
// Output:
// - integer
// Rule:
// - inpute % 2 === 1 -> yes log it otherwise skip

// Algorithm
// loop from 1 to 99 (invlusive)
// if the current % 2 is 1 then log it to the screen
// other wise skip

// Code
for (let counter = 1; counter <= 99; counter += 1) {
  if (counter % 2 === 1) {
    console.log(counter);
  }

  // clever but not redable
  // counter % 2 === 1 && console.log(counter);

  // ternary operator
  // counter % 2 === 1 ? console.log(counter) : null;
}