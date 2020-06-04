// Write a function that returns an Array that contains every other element
// of an Array that is passed in as an argument. The values in the returned
// list should be those value that are in the 1st, 3rd, 5th, and so on
// elements of the argument Array.

function oddities(array) {
  let oddElements = [];
  for (let index = 0; index < array.length; index += 1) {
    oddElements.push(array[index]);
  }
  return oddElements;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

function evenities(array) {
  let evenElements = [];
  for (let index = 1; index < array.length; index += 2) {
    evenElements.push(array[index]);
  }
  return evenElements;
}

console.log(evenities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(evenities(["abc", "def"])); // logs ['abc']
console.log(evenities([123])); // logs [123]
console.log(evenities([])); // logs []
