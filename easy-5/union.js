// Combining Arrays
// write a function that takes two arrays as arguments, and returns an array
// containing the union of the values from the two. There should be no
// duplication of values in the returned array, even if there are duplicates
// in the original arrays. You may assume that both arguments will always be
// arrays.

// Example:

// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

function union(array1, array2) {
  let arrays = array1.concat(array2);
  let unionOfArrays = [];
  arrays.forEach(item => {
    if (!unionOfArrays.includes(item)) {
      unionOfArrays.push(item);
    }
  });

  return unionOfArrays;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]