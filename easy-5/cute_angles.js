// Write a function that takes a floating point number represening an angle
// between 0 and 360 degrees, and returns a string representing that angle
// in degrees, minutes, and seconds. You should use a degree (˚) to represent
// degrees, a single quote (') to represent minutes, and a double quote (")
// to represent seconds. There are 60 minutes in a degree, and 60 seconds in
// a minute.

// Examples:

// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

// Understand the Problem:
// Input: number, angle in degrees
// Output: string, degrees minutes seconds
// Rule:
//  - 1 degree = 60 minutes
//  - 1 minute = 60 seconds

// Algorithm:
// - remove the fraction and set it to degreesInteger
// - minutes = floor of (degreesFloat - degreesInteger) * 60
// - second = floor of ((degreesFloat - degreesInterg) * 60 - minutes) * 60
// - if minutes and seconds are less than 10 padd with 0
// Code:

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECOND_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECOND_PER_MINUTE;

function dms(degreesFloat) {
  let degreesInteger = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInteger) * 60);
  let seconds = Math.floor(
    (degreesFloat - degreesInteger - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return (
    `${degreesInteger}${DEGREE}${padZeroes(minutes)}'${padZeroes(seconds)}"`
  );
}

function padZeroes(number) {
  let numberString = String(number);
  return numberString.length < 2 ? ('0' + numberString) : numberString;
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"