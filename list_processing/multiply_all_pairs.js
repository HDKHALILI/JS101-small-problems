// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array containing the products of all combinations
// of number pairs that exist between the two arrays. The returned array should
// be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// Example:

// multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

// Understanding the Problem:
// Input: 2 arrays of number
// Output: array
// Rules:
//  - each element of the new array is product of number pairs that exist
//    between the two array
//  - sort array in ascending order (low - high)

function multiplyAllPairs(numbers1, numbers2) {
  let result = [];
  numbers1.forEach(num1 => {
    numbers2.forEach(num2 => {
      result.push(num1 * num2);
    });
  });

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
