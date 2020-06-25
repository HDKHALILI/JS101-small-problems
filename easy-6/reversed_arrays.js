// Write a function that takes an Array as an argument, and reverses its
// elements in place; that is, mutate the Array passed into this method.
// The return value should be the same Array object.

// You may not use Array.prototype.reverse().

// startIndex = 0;
// endIndex = 4 - 1 = 3
// startValue = array[0] = 1
// endValue = array[3] = 4
// array[0] = endValue
// array[4] = startValue
// -> [4, 2, 3, 1]
// startIndex += 1 = 1;
// endIndex -= startIndex = 2
// sartValue = array[1] = 2
// endValue = array[2] = 3
// array[1] = endValue;
// array[2] = startValue
// -> [4, 3, 2, 1]


function reverse2(array) {
  let reversedArray = [];
  for (let index = array.length - 1; index >= 0; index -= 1) {
    reversedArray.push(array[index]);
  }

  for (let index = 0; index < array.length; index += 1) {
    array[index] = reversedArray[index];
  }

  return array;
}

function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < rightIndex) {
    let leftValue = array[leftIndex];
    let rightValue = array[rightIndex];

    array[leftIndex] = rightValue;
    array[rightIndex] = leftValue;

    leftIndex += 1;
    rightIndex -= 1;
  }

  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true