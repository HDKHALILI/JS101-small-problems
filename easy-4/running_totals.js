// Write a function that takes an array of numbers, and returns an array with
// the same number of elements, with each element's value being the running
// total from the original array.

// Examples:

// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

function runningTotal(numbers) {
  let total = 0;
  let result = [];
  numbers.forEach(num => {
    total += num;
    result.push(total);
  });

  return result;
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

// Further Exploration

// Can you rewrite the solution using the Array.prototype.map method? What
// types of problems do you think are well-suited for the
// Array.prototype.map method?

function runningTotalWithMap(numbers) {
  let sum = 0;
  let result = numbers.map(num => (sum += num));
  return result;
}

console.log('------------------');
console.log(runningTotalWithMap([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotalWithMap([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotalWithMap([3]));                    // [3]
console.log(runningTotalWithMap([]));                     // []

// Array.prototype.map is a great for transformation, where it only relies
// on its arguments (it doesn't have to reach out for data). Here our solution
// map is relies on sum variable outside its callback's scope.