// Transpose 3x3 Matrix

// The transpose of a 3x3 matrix is the matrix that results from exchanging the
// rows and columns of the original matrix. For example, the transposition of
// the matrix is:
/*
let matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];
=>
  1  4  3
  5  7  9
  8  2  6
*/

// Write a function that takes an array of arrays representing a 3x3 matrix,
// and returns the transpose of the matrix. You should implement the function
// on your own, without using any external libraries.

// Take care not to modify the original matrix — your function must produce
// a new matrix and leave the input matrix array unchanged.

// Understand the Problem:
// Input: array containing 3 other arrays with 3 elements
// Output: array of 3 arrays
// Rules:
//  - column: elements at the same index of the 3 arrays
//  - colum 1 = array1[0], array2[0], array3[0]
//  - colum 2 = array1[1], array2[1], array3[1]
//  - colum 3 = array1[2], array2[2], array3[2]

// Algorithm:
// - take the first elements of the 3 arrays and make one array out of them
// - repeat these with other elements of the 3 arrays until there
//   is no element left



// Code: if we know that we are getting a 3 x 3
// - loop over the top level array
// - matrix[0][index], matrix[1][index], matrix[3][index]


function transpose(matrix) {
  let newMatrix = [];
  for (let outerIndex = 0; outerIndex < matrix.length; outerIndex += 1) {
    newMatrix.push([]);
    for (let innerIndex = 0; innerIndex < 3; innerIndex += 1) {
      newMatrix[outerIndex].push(matrix[innerIndex][outerIndex]);
    }
  }

  return newMatrix;
}

// Solution Using map
function transpose2(matrix) {
  return matrix.map((subArray, rowId) => subArray.map((_, colId) => matrix[colId][rowId]));
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// let newMatrix2 = transpose2(matrix);
// console.log(newMatrix2);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// *** Further Exploration ***
function transposeInPlace(matrix) {
  let arrayJSON = JSON.stringify(matrix);
  let arrayCopy = JSON.parse(arrayJSON);

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
    let currentRow = matrix[rowIndex];
    for (let colIndex = 0; colIndex < currentRow.length; colIndex += 1) {
      // rowIndex allows us to hold current array and change
      // its elements value before moving to the next array
      matrix[rowIndex][colIndex] = arrayCopy[colIndex][rowIndex];
    }
  }

  return matrix;
}

const matrix2 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix3 = transposeInPlace(matrix2);

console.log(newMatrix3);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix2);         // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
