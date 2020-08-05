// Diamonds

// Write a function that displays a four-pointed diamond in an nxn grid, where
// n is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer.

// Understanding the Problem:
// Input: 
//  - number (n) representing the height and width of a diamond
//  - n is odd number
// Ouput: 
//  - a 4 pointed diamond shape drawn using spaces (' ') and astrix ('*'), that is:
//    - n long
//    - n wide
//    - Example: n = 3
//  *
// ***
//  *
// Rules:
//  - height and width of diamond is an odd number
//  - top and bottom is thinnest, meaning they are made of 1 *
//  - mid point is the thickest, meaning has n *
//  - as you approach mid point the number of star increases and space decreases

// Data Structure:
// Input: intger
// Ouput: string

// Algorithm:
// - set middle = n / 2 round up the result
// - set counter 1;
// - set numOfSpaces = middle - 1
// - set numOfStars = 1;
// - start a loop that ends when counter is more than n
//   - log ' ' repeated numOfSpaces time + * repeated numOfStars time
//   - if counter is equal or greater than middle
//     - increment numOfSpace by 1
//     - decrement numOfStars by 2
//   - else
//     - decrease numOfSpaces by 1
//     - increase numOfStars by 2
//   - increase counter by 1
// - end loop

// Code
function diamond(n) {
  let middle = Math.ceil(n / 2);
  let numOfSpaces = middle - 1;
  let numOfStars = 1;
  for (let counter = 1; counter <= n; counter += 1) {
    console.log(`${' '.repeat(numOfSpaces)}${'*'.repeat(numOfStars)}`);
    if (counter >= middle) {
      numOfSpaces += 1;
      numOfStars -= 2;
    } else {
      numOfSpaces -= 1;
      numOfStars += 2;
    }
  }
}

// Example / Test Cases:

console.log(diamond(1));
// logs
// *

console.log(diamond(3));
// logs
/*
 *
***
 *
*/
console.log(diamond(9));
// logs
/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/