// Next Featured Number Higher than a Given Value

// A featured number (something unique to this exercise) is an odd number that
// is a multiple of 7, with all of its digits occuring exactly once each.
// For example, 49 is a featured number, but 98 is not (it is not odd), 97 is
// not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument, and returns the next
// featured number greater than the integer. Issue an error message if there
// is no next featured number.

// NOTE: The largest possible featured number is 9876543201.

// Examples:

// featured(12);           // 21
// featured(20);           // 21
// featured(21);           // 35
// featured(997);          // 1029
// featured(1029);         // 1043
// featured(999999);       // 1023547
// featured(999999987);    // 1023456987
// featured(9876543200);   // 9876543201
// featured(9876543201);   // "There is no possible number that fulfills those requirement

// Understanding the problem:
// Input: number
// Output: number or an error message
// Rules:
//  - featured number must be:
//    - odd
//    - multiple of 7
//    - every digit should only occur once
//    - less or equal to max featured number possible 9876543201

// Code
function featured(number) {
  const MAX_POSSIBLE_FEATURED_NUMBER = 9876543201;
  let nextFeaturedNumber = null;
  for (let count = number + 1; count <= MAX_POSSIBLE_FEATURED_NUMBER; count += 1) {
    let multipleOf7 = count % 7 === 0;
    let isOdd = count % 2 === 1;
    if (multipleOf7 && isOdd) {
      if (noDuplicate(count)) {
        nextFeaturedNumber = count;
        break;
      }
    }
  }
  let error = 'There is no possible number that fulfills those requirnments.'
  return nextFeaturedNumber || error
}

function noDuplicate(number) {
  let occurencies = {}
  number = String(number);
  for (let index = 0; index < number.length; index += 1) {
    let char = number[index];
    occurencies[char] = occurencies[char] || 0;
    occurencies[char] += 1;
  }

  if (Object.values(occurencies).some(value => value > 1)) {
    return false;
  }

  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543201));   // error