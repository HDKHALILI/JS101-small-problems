// Grocery List

// Write a function that takes a grocery list (a two-dimensional array) with
// each element containing a fruit and a quantity, and returns a one-dimensional
// array of fruits, in which each fruit appears a number of times equal to its
// quantity.

// Example:

// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function buyFruit(array) {
  let fruits = [];
  array.forEach(subArr => {
    let [fruit, quantity] = subArr;
    let result = [];
    for (let index = 0; index < quantity; index += 1) {
      result.push(fruit);
    }
    fruits = fruits.concat(result);
  });

  return fruits;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
