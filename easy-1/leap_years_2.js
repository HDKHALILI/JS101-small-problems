// This is a continuation of the previous exercise. 'leap_years.js'
// The British Empire adopted the Gregorian Calender in 1752, which was a leap
// year. Prior to 1752, they used the Julian Calender.
// Under the Julian Calender, leap years occur in any year that is evenly
// divisible by 4.

// Using this information, update the function from the previous exercise
// to determine leap years both before and after 1752.

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
//  - before 1752, leap year is evenlty divisible by 4.
//    - 1752 is a leap year.
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
//  - if (year < 1752) and (year % 4)
//     - return true
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

function isLeapYear(year) {
  if (invalidYear(year)) return "Invalid Year";
  if (year < 1552 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }

  return false;
}

// Examples / Test Cases:
console.log(test(false, isLeapYear(1751))); // true
console.log(test(true, isLeapYear(1752))); // true
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
