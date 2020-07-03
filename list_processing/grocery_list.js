// Grocery List

// Write a function that takes a grocery list (a two-dimensional array) with
// each element containing a fruit and a quantity, and returns a one-dimensional
// array of fruits, in which each fruit appears a number of times equal to its
// quantity.

// Example:

// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

function buyFruit(fruitsLists) {
  let fruits = [];
  fruitsLists.forEach(fruitAndQuantity => {
    fruits = fruits.concat(repeat(fruitAndQuantity));
  });

  return fruits;
}

function repeat(fruitAndQuantity) {
  let [fruit, quantity] = fruitAndQuantity;
  let result = [];

  for (let count = 0; count < quantity; count += 1) {
    result.push(fruit);
  }

  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
