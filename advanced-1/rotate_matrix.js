// Rotating Matrix

// let matrix = [
//   [1, 5, 8],
//   [4, 7, 2],
//   [3, 9, 6],
// ];

// The above matrix rotated 90 degree clockwise:
// 3 4 1
// 9 7 5
// 6 2 8

// a non-square matrix rotated:
// matrix:
// 3 4 1
// 9 7 5
// Rotated 90 degree clockwise:
// 9 3
// 7 4
// 5 1

// Write a function that takes an arbitrary MxN matrix, rotates it clockwise
// by 90-degrees as described above, and returns the result as a new matrix.
// The function should not mutate the original matrix.

// Understanding the Problem:
// Input: a two diemensional array
// Output: a two dimensional array
// Rule:
// - rotate 90 degree clock wise
//   - column's end become the start
//   - last element becomes first

// Algorithm:
// - transpose the matrix starting from the last row.
//   - start from last row and work your way to the first row
//     - each time take the first element
//     - make a new row out of all of the elements at hand
//     - save the new row in a list
//   - repeat this for all other rows untill you have gone over every item
//     in the rows
// - the new list is a rotated matrix.

// Implement:
// - set variable rotatedMatrix = []
// - set rowCount = input[0]'s length
// - iterate until counter is equal to rowCount
//   - push an empty array to rotatedMatrix
//   - start loop, and set inner counter to input length - 1.
//     - push input[inner counter][counter] to rotatedMatrix[counter]
//     - decrement inner counter by 1
//   - end loop when inner counter is less than 0
//   - incremenet counter by 1
// - end loop
// - return rotatedMatrix

function rotate90(matrix) {
  const rotatedMatrix = [];
  const rowCount = matrix[0].length;
  for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
    rotatedMatrix.push([]);
    for (let colIndex = matrix.length - 1; colIndex >= 0; colIndex -= 1) {
      rotatedMatrix[rowIndex].push(matrix[colIndex][rowIndex]);
    }
  }

  return rotatedMatrix;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]