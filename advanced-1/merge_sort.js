// Merge Sort

// Merge sort is a recursive sorting algorithm that works by breaking down an
// array's elements into nested subarrays, then combining those nested subarrays
// back together in sorted order. It is best explained with an example.

// Given the array [9, 5, 7, 1], let's walk through the process of sorting it
// with merge sort. We'll start off by breaking the array down into nested
// subarrays:

// [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]

// We then work our way back to a flat array by merging each pair of nested
// subarrays back together in the proper order:
// 
// [[[9], [5]], [[7], [1]]] -->
// [[5, 9], [1, 7]] -->
// [1, 5, 7, 9]

// Write a function that takes an array, and returns a new array that contains
// the values from the input array in sorted order. The function should sort the
// array using the merge sort algorithm as described above. You may assume that
// every element of the array will be of the same data type—either all numbers
// or all strings.

// Feel free to use the merge function you wrote in the previous exercise.

// Examples:

// mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
// mergeSort([5, 3]);                 // [3, 5]
// mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

// mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

// mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

// understand the problem:
// Input: un sorted array
// Output: a sorted array from low to high
// Rule:
// - divide array in to subarrays until each subarray has one element
//  - [9, 5, 7, 1] --> [[[9], [5]], [[7], [1]]]
// - then merge using recursive sorting algoirthm
//  -> [1, 5, 7, 9]

// Algorithm:
// - split the input array in half, make a new array out of each and put them
//   in an array
// - then split the two inner array in half and make a new array out of each
// - repeat this until each array has one element.

// Code
// - set center = array.length / 2
// - set left = slice array from 0, to center
// - set right = slice array from center
// - if array length is 1
//   - return array
//  - return calling the function recursively with left and right as argument

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let center = Math.floor(array.length / 2);
  let left = array.slice(0, center);
  let right = array.slice(center);
  return merge(mergeSort(left), mergeSort(right));
}

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

  // if one is empty but the other is not
  return newArray.concat(copy1.length === 0 ? copy2 : copy1);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));
console.info(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]
console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]