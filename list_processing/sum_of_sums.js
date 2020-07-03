// Sum of Sums

// Write a function that takes an array of numbers, and returns the sum of the
// sums of each leading subsequence for that array. You may assume that the
// array always contains at least one number.

// Examples:

// sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// sumOfSums([1, 5, 7, 3]);
// (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// sumOfSums([4]);              // 4
// sumOfSums([1, 2, 3, 4, 5]);  // 35

function sumOfSums(numbers) {
  let sum = 0;
  numbers.forEach((_, index) => {
    numbers.slice(0, index + 1).forEach(num => {
      sum += num;
    });
  });

  return sum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));
// (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35