// Write a function that counts the number of occurrences of each element in
// a given array. Once counted, log each element alongside the number of
// occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

// Example:

// let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
//                 'motorcycle', 'motorcycle', 'car', 'truck'];

// countOccurrences(vehicles);

// // console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck', 'suv', 'Suv'];

function countOccurrences(array) {
  let occurrences = {};

  for (let index = 0; index < array.length; index += 1) {
    // convert to lowercase for *** Further Exploration ***
    let element = array[index].toLowerCase();
    occurrences[element] = occurrences[element] || 0;
    occurrences[element] += 1;
  }

  logOccurrences(occurrences);
}

function logOccurrences(occurrences) {
  Object.entries(occurrences).forEach(keyValue => {
    let [key, value] = keyValue;
    console.log(`${key} => ${value}`);
  });
}

countOccurrences(vehicles);

// *** Further Exploration ***

// Try to solve the problem when words are case insensitive,
// e.g. "suv" and "SUV" represent the same vehicle type.