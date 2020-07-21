// Unlucky Days

// Some people believe that Fridays that fall on the 13th day of the month are
// considered to be unlucky days. Write a function that takes a year as an
// argument, and returns the number of Friday the 13ths in that year. You may
// assume that the year is greater than 1752, which is when the United Kingdom
// adopted the modern Gregorian Calendar. You may also assume that the same
// calendar will remain in use for the foreseeable future.

// Examples:

// fridayThe13ths(1986);      // 1
// fridayThe13ths(2015);      // 3
// fridayThe13ths(2017);      // 2

// Understand the Problem:
// Input: a year
// Output: number of fridays that fall on 13th day of the month
// Rule:
//  - unlucky friday = the date is 13

// Data Structure
// Input: integer
// Output: integer

// Algoirthm:
// - set dayOfMonth = 13
// - make a date object using the year first month and dayOfMonth
// - set unluckyDays to 0
// - set month = 0
// - while the month is less than 12
//   - if the day is friday (5) increment unluckyDays by 1.
//   - increment month by 1
//   - set date with new month
// - end loop
// return unluckyDays

// Code
function fridayThe13ths(year) {
  let dayOfMonth = 13;
  let date = new Date(year, 0, dayOfMonth);
  let unluckyDaysCount = 0;
  for (let month = 0; month < 12; month += 1) {
    if (date.getDay() === 5) {
      unluckyDaysCount += 1;
    }
    date.setMonth(month);
  }

  return unluckyDaysCount;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2