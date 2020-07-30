// Merge Sorted Lists

// Write a function that takes two sorted arrays as arguments, and returns a new
// array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array.
// You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

// Examples:

// merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
// merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
// merge([], [1, 4, 5]);             // [1, 4, 5]
// merge([1, 4, 5], []);             // [1, 4, 5]

// Problem:
// Input: two arrays elements arranged from low to high.
// Ouput: one sorted array elements arranged from low to high.
// Rule:
//  - make array with elements in order as you go. don't make array then
//    arrange elements.

// Algorithm:
// - compare the first elements of each array
//  - if the first element of first array is greater than the first element of the second array
//    - put the it in the list first
//   - then compare the second element of the first array with the first element of
//     the second array
//   - if the it is greater then put the first element of the second array in the list
//  - repeat this until there is no elements left

// Code
// - set newArray = []
// - indexA = 0;
// - indexB = 0
// - start a loop
//   - if (array1[indexA] < array2[indexB])
//     - push array1[indexA] to newArray
//     - increment indexA by 1
//   - else if array1[indexA] > array2[indexB]
//     - push array2[indexB] to newArray
//     - increment indexB by 1
//   - break when indexA and indexB is equal to arrays length
// return newArray

function merge(array1, array2) {
  const newArray = [];
  let copy1 = array1.slice();
  let copy2 = array2.slice();

  while (copy1.length > 0 && copy2.length > 0) {
    if (copy1[0] <= copy2[0]) {
      newArray.push(copy1.shift());
    } else {
      newArray.push(copy2.shift());
    }
  }

  return newArray.concat(copy1.length === 0 ? copy2 : copy1);
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]