// Write a function that takes a positive integer, n, as an argument, and logs
// a right triangle whose sides each have n stars. The hypotenuse of the
// triangle (the diagonal side in the images below) should have one end at the
// lower-left of the triangle, and the other end at the upper-right.

/*
Examples:

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
*/

// Understanding the Problem:
// Input: integer
// Ouput: string
// Rules:
//  - draw a right angled triangle made of *
//  - all sides be n stars long
//  - top end: upper right
//  - bottom end: lower left

// Algorithm:
// - enter a loop that start from 1 and ends when counter is equal to input (n)
//  - log (n - counter) number of space (' ') plus counter number of *
// - end loop

// Code:
function triangle(n) {
  let output = '';
  for (let counter = 1; counter <= n; counter += 1) {
    output += '*';
    console.log(output.padStart(n, ' '));
  }
}

triangle(5);
triangle(9);