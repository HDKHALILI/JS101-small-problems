// Seeing Stars

// Write a function that displays an 8-pointed star in an NxN grid, where N is
// an odd integer that is supplied as an argument to the function. The smallest
// such star you need to handle is a 7x7 grid (i.e., when N is 7).

// Understanding the Probelem:
// Input: integer
// Ouput: string
// Rules:
//  - Input must be 7 or higher
//  - Input must be odd integer
//  - star needs to be n high and n wide
//  - star needs to be made of space and *

// Algorithm:
// - make sure that the input is odd and is 7 or more
// - start by adding 0 space padding to the right of first *
// - calculate padding for the other 2 * by input - 3 / 2
// - add the calculated padding to the right of the other 2 *
// - on each line increase the right padding of the first * by 1
//   and decrease the right padding of the other two * by 1
// - repeat until you reach the middle
// - decrease the right padding of the first start by 1
//   and increase the right padding of other 2 * by 1

// Code
// - if input is not and is less than 7 return 'invalid integer'
// - set rigthPadding = 0;
// - set middlePadding = (input - 3) / 2
// - set middle = input / 2 rounded up
// - start a loop that runs input many times
//   - if counter === middle
//     - log * repeated input times
//     - skip to next loop
//   - log:
//    - ' ' repeated rightPadding times + * +
//    - ' ' repeated middlePadding times + * +
//    - ' ' repeated middlePadding times + *
//   - if counter < middle
//    - rightPadding += 1
//    - middlePadding += 1
//  - else 
//   - rightPadding -= 1
//   - middlePadding += 1
// - end loop

function buildStarRow(spacesBetween, spacesRight) {
  let asterisks = ["*", "*", "*"];
  let starRow = asterisks.join(" ".repeat(spacesBetween));
  let rightPaddedStars = " ".repeat(spacesRight) + starRow;
  return rightPaddedStars;
}

function buildStarRows(size) {
  let spacesBetween = (size - 3) / 2;
  let middle = Math.floor(size / 2);
  const firstHalf = []
  for (let index = 0; index < middle; index += 1) {
    firstHalf.push(buildStarRow(spacesBetween - index, index));
  }
  return [...firstHalf, '*'.repeat(size), ...firstHalf.reverse()];
}

function star(size) {
  let starRows = buildStarRows(size);
  starRows.forEach(row => console.log(row));
}

star(7);
console.log('--------------');
star(9);