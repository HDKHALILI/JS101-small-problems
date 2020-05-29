// Build a program that asks the user to enter the length and width of a room
// in meters, and then logs the area of the room to the console in both
// square meter and square feet
// Note: 1 square meter = 10.7639 square feet
// Do not worry about validating the input at this time. Use the
// readlineSync.prompt method to collect user input.

// Understanding the Problem:
// Input:
//  - string
//  - length of room in meter
//  - width of room in meter
// Output:
//  - string
//  - area of room in
//    - square meter
//    - square feet
// Rules:
//  - area = length * width => square [unit]
//  1 square meter = 10.7639 square feet
//    - area in square feet = square meter area * 10.7639

// Data Structure:
// Input:
//  - number
//    - convert string to number
// Output:
//  - string

// Algorithm:
// - ask the user for the length of the room
// - assign the user's response to a variable roomLength
// - ask the user for the width of the room
// - assign the user's response to a variable roomWidth
// - calculate room area by multiplying roomLength value with roomWidth value
// - assign the area to variable roomAreaInMeters
// - convert room area to square feet by multiplying roomAreaInMetter value
//   with 10.7639
// - assign it to variable roomAreaInFeet
// - log "The area of room is [roomAreaInMeter] square meters
//   ([roomAreaInFeet])"
// NOTE:
// - how many decimal?

const readline = require("readline-sync");
const SQFEET_IN_SQMETER = 10.7639;

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Enter the length of the room in meters:");
let length = readline.question("> ");
length = Number(length);

prompt("Enter the width of the room in meters:");
let width = readline.question("> ");
width = Number(width);

let areaInMeters = (length * width).toFixed(2);
let areaInFeets = (areaInMeters * SQFEET_IN_SQMETER).toFixed(2);

prompt(
  `The area of the room is ${areaInMeters} square meters (${areaInFeets} square feets).`
);
