// Alphabetical Numbers

// Write a function that takes an array of integers between 0 and 19, and
// returns an array of those integers sorted based on the English word for
// each number:

// zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven,
// twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

// Example:

// alphabeticNumberSort(
//  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// Understanding the Problem:
// Input: list of numbers
// Oupput: list of numbers
// Rule:
// - sort the array of numbers based on their english words

// Algorithm:
// - create an array that contain all the egnlish words of 0 - 19
// - make a copy and sort the array alphabetically
// - loop through the sorted array and find the index of each word
//   from unsorted array

let NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'siztenn', 'seventeen', 'eighteen', 'nineteen'
];

function sortWords(num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(numbers) {
  return numbers.sort(sortWords);
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]