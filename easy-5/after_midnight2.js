// After Midnight (Part 2)

// As seen in the previous exercise, the time of day can be represented as the
// number of minutes before or after midnight. If the number of minutes is
// positive, the time is after midnight. If the number of minutes is negative,
// the time is before midnight.

// Write two functions that each take a time of day in 24 hour format, and
// return the number of minutes before and after midnight, respectively.
// Both functions should return a value in the range 0..1439.

// You may not use javascript's Date class methods.

// Examples:

// console.log(afterMidnight("00:00") === 0);
// console.log(beforeMidnight("00:00") === 0);
// console.log(afterMidnight("12:34") === 754);
// console.log(beforeMidnight("12:34") === 686);
// console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);

// The tests above should log true.

// Disregard Daylight Savings and Standard Time and other irregularities.

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR; // 1440

function afterMidnight(timeString) {
  let [hours, minutes] = timeString.split(':');
  let deltaMinutes = (Number(hours) * MINUTES_PER_HOUR) + Number(minutes);

  // how much of 1440 is covered by deltaMinutes - remainder answers that
  return deltaMinutes % MINUTES_PER_DAY;
}

function beforeMidnight(timeString) {
  // how much of 1440 will be left if we take this many minutes away 
  // - before means, how many steps backward
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeString);
  return deltaMinutes === MINUTES_PER_DAY ? 0 : deltaMinutes;
}

console.log('After Midnight --------------------');
console.log(afterMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(afterMidnight("24:00") === 0);
console.log('Before Midnight --------------------');
console.log(beforeMidnight("00:00") === 0);
console.log(beforeMidnight("12:34") === 686);
console.log(beforeMidnight("24:00") === 0);