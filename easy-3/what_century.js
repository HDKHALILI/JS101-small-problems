// What century is that?
// Write a function that takes a year as input and returns the century.
// The return value should be a string that begins with the century number,
// and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000
// comprise the 20th century

// Examples:

// century(2000);        // "20th"
// century(2001);        // "21st"
// century(1965);        // "20th"
// century(256);         // "3rd"
// century(5);           // "1st"
// century(10103);       // "102nd"
// century(1052);        // "11th"
// century(1127);        // "12th"
// century(11201);       // "113th"

// Understanding the Problem:
// Input: iteger
// Output: string
// Rules:
//  - century = 100 years
//  - new centuries start at 01. 1901 - 2000 = 20th
//  - append number with: st, nd, rd or th
//    - 1: st
//    - 2: nd
//    - 3: rd
//    - 4-10: th
//    - except 11, 12, 13: th
//    - 21: st
//    - 22: nd
//    - 23: rd

// Algorithm:
// - find century = divide year by 100, remove decimal and add 1
//  - if year last digits are 00 we don't add 1
// - if the last 2 digits are either 11, 12, 13 => append 'th'
// - if last digit is 1 => append 'st'
// - if last digit is 2 => append 'nd'
// - if last digit is 3 => append 'rd'
// - otherwise => append 'th'

// Code:
function century(year) {
  let centuryLength = 100;
  let centuryNumber = Math.floor(year / centuryLength) + 1;

  // if year ends with 0, we don't need to add 1
  if (year % 100 === 0) {
    centuryNumber -= 1;
  }

  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  // we want the last two digits
  if ([11, 12, 13].includes(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;

  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
console.log(century(11505));       // "113th"