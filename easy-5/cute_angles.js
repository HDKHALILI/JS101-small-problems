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
// - minutes = floor of (angle - degreesInteger) * 60
// - second = floor of ((angle - degreesInterg) * 60 - minutes) * 60
// - if minutes and seconds are less than 10 padd with 0
// Code:

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECOND_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECOND_PER_MINUTE;
const MAX_DEGREE = 360;

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

// *** Further Exploration ***
// The current solution implementation only works with positive numbers in the
// range of 0 to 360 (inclusive). Can you refactor it so that it works with any
// positive or negative number?

// Rules:
// - degree greater than 360: degree - 360 = working degree
// - degree is negative and < -360: (-degree + 360) + 360 = working degree

function handleNegativeAngle(angle) {
  let degrees = Math.floor(angle % MAX_DEGREE);
  while (degrees < 0) {
    degrees += 360;
  }

  return degrees;
}

function dms(angle) {
  if (angle > 360) {
    angle %= 360;
  } else if (angle < 0) {
    angle = handleNegativeAngle(angle);
  }

  let degreesInteger = Math.floor(angle);
  let minutes = Math.floor((angle - degreesInteger) * 60);
  let seconds = Math.floor(
    (angle - degreesInteger - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return (
    `${degreesInteger}${DEGREE}${padZeroes(minutes)}'${padZeroes(seconds)}"`
  );
}

console.log('--------------');
console.log('Negative angles and Greater than 360');
console.log(dms(-1));   // 359°00'00"
console.log(dms(400));  // 40°00'00"
console.log(dms(-40));  // 320°00'00"
console.log(dms(-420)); // 300°00'00"
console.log(dms(-360)); // 300°00'00"