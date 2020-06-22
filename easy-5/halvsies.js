// Write a function that takes an array as an argument, and returns an array
// that contains two elements, each of which is an array. Put the first half of
// the original array elements in the first element of the return value, and the
// second half in the second element. If the original array contains odd number
// of elements, place the middle element in the first half array.

// Examples:

// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]

function halvsies(array) {
  let center = Math.ceil(array.length / 2);
  let result = [];

  let firstHlaf = array.slice(0, center);
  let secondHalf = array.slice(center);

  result.push(firstHlaf, secondHalf);

  return result;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]