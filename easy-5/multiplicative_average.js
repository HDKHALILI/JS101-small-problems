// Write a function that takes an array of itegers as input, multiplies all of
// of the integers together, divide the result by the number of entries in the
// array, and return result as string with the value rounded to three decimal
// places.

// Examples:

// multiplicativeAverage([3, 5]);                   // "7.500"
// multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

function multiplicativeAverage(integers) {
  let length = integers.length;
  let product = integers.reduce((acc, currentInt) => acc * currentInt, 1);
  let average = (product / length).toFixed(3);

  return String(average);
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"