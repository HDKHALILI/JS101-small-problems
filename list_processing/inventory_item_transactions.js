// Inventory Item Transactions

// Write a function that takes two arguments, inventoryItem and transactions,
// and returns an array containing only the transactions for the specified
// inventoryItem.

// Example

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

// transactionsFor(101, transactions);
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

function transactionsFor(id, transactions) {
  let results = [];

  for (let index = 0; index < transactions.length; index += 1) {
    if (transactions[index].id === id) {
      results.push(transactions[index]);
    }
  }

  return results;
}

console.log(transactionsFor(101, transactions));

function transactionsFor2(id, transactions) {
  return transactions.filter(transaction => transaction.id === id);
}

console.log(transactionsFor2(101, transactions));
