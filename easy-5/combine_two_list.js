// Write a function that combines two arrays passed as arguments, and returns
// a new array that contains all elements from both array arguments, with each
// element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have
// the same number of elements.

// Example:

// interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

function interleave(array1, array2) {
  let result = [];
  for (let index = 0; index < array1.length; index += 1) {
    result.push(array1[index], array2[index]);
  }

  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// *** Further Exploration ***
// Try to solve this problem using `Array.prototype.forEach` method

function interleave2(array1, array2) {
  let result = [];
  array1.forEach((item, index) => {
    result.push(item, array2[index]);
  });

  return result;
}

console.log('with forEach');
console.log(interleave2([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// Can you solve it using 'map' or 'reduce'?
// using 'map'

function interleaveMap(array1, array2) {
  let result = array1.map((item, index) => {
    return [item, array2[index]];
  }).flat();

  return result;
}

console.log(interleaveMap([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]


// using 'reduce'
function interleaveReduce(array1, array2) {
  let result = array1.reduce((accumulator, currentElement, index) => {
    accumulator.push(currentElement, array2[index]);
    return accumulator;
  }, []);

  return result;
}

console.log('using reduce');
console.log(interleaveReduce([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
