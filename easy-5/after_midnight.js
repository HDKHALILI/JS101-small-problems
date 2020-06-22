// Part 1
// The time of day can be represented as the number of minutes before or after
// midnight. If the number of minutes is positive, the time is after midnight.
// If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns
// the time of day in 24 hour format (hh:mm). Your method should work with any
// integer input.

// You may not use javascript's Date class methods.

// Examples:

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

// The tests above should log true.

// Disregard Daylight Savings and Standard Time and other complications.

// 1hr = 60 minute
// 1. find the remainder of minutes / 1440
// 2.
//  if positive time is: / 60
//   - the integer part of it is the hours
//   - the fraction is minutes (fraction * 60)
//  if negative add to 1440
//   - then divide by 60
//    - the integer part of it is the hours
//    - the fraction is minutes (fraction * 60)


const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR; // 1440

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes %= MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
