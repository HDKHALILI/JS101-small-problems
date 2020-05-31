// In the modern era under the Gregorian Calender, leap years occur in every
// year that is evenly divisible by 4, unless the year is also divisible by
// 100. If the year is evenly divisible by 100, then it is not a leap year,
// unleass the year is also evenly divisible by 400.

// Assume this rule is valid for any year greater than year 0. Write a
// function that takes any year greater than 0 as input, and returns 'true'
// if the year a leap year, or 'false' if it is not a leap year.

// Understanding the Problem:
// Input:
//  - integer
//  - greater than 0
//  - validate
//    - greater than 0
//    - be a valid number
// Output:
//  - boolean
// Rules:
//  - evenly divisible means there is no remainder or no fraction
//  - leap year:
//    - yes if divisible by 400
//    - no if divisible 100
//    - yes if divisible by 4
// Data Structure:
// Input:
//  - number, integer
// Output:
//  boolean

// Algorithm:
//  - if year is less than 1 and not a valid number
//  - return "Year must be a valid number and greater than 0"
// - if (year % 400 is 0)
//    - return true
//  - if (year % 100 is 0)
//    - return false
// - else if (year % 4 is 0)
//  - return true
// - else
//  - return false

// Code
function invalidYear(year) {
  return year <= 0 || Number.isNaN(Number(year));
}

function test(expected, received) {
  return `expected ${expected}, and received ${received}`;
}

// function isLeapYear(year) {
//   if (invalidYear(year)) return "Invalid Year";
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 4 === 0 && year % 100 !== 0) {
//     return true;
//   }

//   return false;
// }

// Examples / Test Cases:
console.log(test(true, isLeapYear(2016))); // true
console.log(test(false, isLeapYear(2015))); // false
console.log(test(false, isLeapYear(2100))); // false
console.log(test(true, isLeapYear(2400))); // true
console.log(test(true, isLeapYear(240000))); // true
console.log(test(false, isLeapYear(240001))); // false
console.log(test(true, isLeapYear(2000))); // true
console.log(test(false, isLeapYear(1900))); // false
console.log(test(true, isLeapYear(1752))); // true
console.log(test(false, isLeapYear(1700))); // false
console.log(test(false, isLeapYear(1))); // false
console.log(test(false, isLeapYear(100))); // false
console.log(test(true, isLeapYear(400))); // true
console.log(test(true, isLeapYear(0))); // true

// Can you rewrite isLeapYear to perform its tests in the opposite order
// of the above solution? That is, test whether the year is divisible by 4
// first, then, if necessary, test whether it is divisible by 100, and
// finally, if necessary, test whether it is divisible by 400. Is this
//solution simpler or more complex than the original solution?

function isLeapYear(year) {
  if (invalidYear(year)) return "Invalid Year";
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

// Verdict:
// There are too many nested if statements that makes the code
// harder to read. However, the flow of the logic is a bit clearer or
// maybe not.
