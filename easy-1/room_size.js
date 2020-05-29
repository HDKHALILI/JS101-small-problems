// Build a program that asks the user to enter the length and width of a room
// in meters, and then logs the area of the room to the console in both
// square meter and square feet
// Note: 1 square meter = 10.7639 square feet
// Do not worry about validating the input at this time. Use the
// readlineSync.prompt method to collect user input.

// Further Exploration
// Modify the program so that it asks the user for the input type
// (meters or feet). Compute for the area accordingly, and log it
// and its conversion in parentheses.

// Understanding the Problem:
// Input:
//  - string
//  - length of room
//  - width of room
//  - unit:
//    - meters
//    - feet
// Output:
//  - string
//  - area of room in
//    - square meter (square feet)
//    - square feet (square meter)
// Rules:
//  - area = length * width => square [unit]
//  1 square meter = 10.7639 square feet
//    - area in square feet = square meter area * 10.7639

// Data Structure:
// Input:
//  - number
//    - convert string to number
//  - string
// Output:
//  - string

// Algorithm:
// - ask the user for the length of the room
// - store the user's response in variable 'length'
// - ask the user for the width of the room
// - store the user's response to variable 'width'
// - ask the user to choose a meter or feet as unit
// - store the user's response in variable 'unit'
// - calculate room area by multiplying 'length' value with 'width' value
// - store the area in variable 'area'
// - if unit is meters
// - convert area to square feet by multiplying 'area' value with 10.7639
// - store it in variable 'areaInFeet'
// - then log "The area of room is [area] square meters
//   ([areaInFeet] square feet)"
// - if unit is feet
// - convert area to meters by dividing the 'area' value by 10.7639
// - store it in 'areaInMeters'
// - then log "The area of room is [area] square feet
//   ([areaInMeter] square meter)"
// NOTE:
// - how many decimal?

const readline = require("readline-sync");
const SQFEET_IN_SQMETER = 10.7639;

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Enter the length of the room:");
let length = readline.prompt();
length = Number(length);

prompt("Enter the width of the room:");
let width = readline.prompt();
width = Number(width);

prompt("Choose a unit [meters/feet]:");
let unit = readline.prompt();

let area = (length * width).toFixed(2);
area = Number(area);

if (unit === "meters") {
  let areaInFeets = (area * SQFEET_IN_SQMETER).toFixed(2);
  prompt(
    `The area of the room is ${area} square meters (${areaInFeets} square feets).`
  );
} else if (unit === "feet") {
  let areaInMeters = (area / SQFEET_IN_SQMETER).toFixed(2);
  prompt(
    `The area of the room is ${area} square feet (${areaInMeters} square meters).`
  );
}
