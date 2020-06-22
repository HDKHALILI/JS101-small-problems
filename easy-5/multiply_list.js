// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array that contains the product of each pair of
// numbers from the arguments that have the same index. You may assume that the
// arguments contain the same number of elements.

// Example:

// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

function multiplyList(list1, list2) {
  let result = [];
  for (let index = 0; index < list1.length; index += 1) {
    let product = list1[index] * list2[index];
    result.push(product);
  }

  return result;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
