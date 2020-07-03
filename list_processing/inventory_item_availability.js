// Inventory Item Availability

// Building on the previous exercise, write a function that returns true or
// false based on whether or not an inventory item is available. As before,
// the function takes two arguments: an inventory item and a list of
// transactions. The function should return true only if the sum of the quantity
// values of the item's transactions is greater than zero. Notice that there is
// a movement property in each transaction object. A movement value of 'out'
// will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous
// exercise.

// Examples:

let transactions = [
  { id: 101, movement: 'in', quantity: 5 },
  { id: 105, movement: 'in', quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in', quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in', quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in', quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

// isItemAvailable(101, transactions);     // false
// isItemAvailable(103, transactions);     // false
// isItemAvailable(105, transactions);     // true

function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction.id === id);
}

function isItemAvailable(id, transactions) {
  // select all transaction based on id
  let items = transactionsFor(id, transactions);

  // sum all of the quantity of object with movement = 'in'
  // sum all of the quantity of object with movement = 'out'
  let totalItemIn = 0;
  let totalItemOut = 0;

  items.forEach(item => {
    if (item.movement === 'in') {
      totalItemIn += item.quantity;
    } else {
      totalItemOut += item.quantity;
    }
  })

  // check if totalItemIn is greater than totalItemOut
  return totalItemIn > totalItemOut;
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true