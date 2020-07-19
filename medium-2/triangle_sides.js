// Triangle Sides

// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.

// To be a valid triangle, the sum of the lengths of the two shortest sides must
// be greater than the length of the longest side, and every side must have a
// length greater than 0. If either of these conditions is not satisfied, the
// triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as
// arguments, and returns one of the following four strings representing the
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or
// 'invalid'.

// Examples:

// triangle(3, 3, 3);        // "equilateral"
// triangle(3, 3, 1.5);      // "isosceles"
// triangle(3, 4, 5);        // "scalene"
// triangle(0, 3, 3);        // "invalid"
// triangle(3, 1, 1);        // "invalid"

// Understand the Problem:
// Input: 3 numbers representing sides of a triangle
// Ouput: string
// Rules:
//  - Equilateral: All three sides are of equal length.
//  - Isosceles: Two sides are of equal length, while the third is different.
//  - Scalene: All three sides are of different lengths.
//  - Valid triangle:
//    - sum of 2 shortest side is greater than length of longest side
//    - every side must be greater than 0
//    - invalid = doesn't meet the 2 above conditions

// Algorithm:
// - check if all three arguments are greater than 0 and equal
//   - return 'equilateral'
// - if all sides are greater than 0 and not equal to each other
//   - return 'scalene'
// - if all sides are greater than 0 and only two of the side are equal
//   - return 'isosceles'
//  - invalid:
//    - a + b > c
//    - a + c > b
//    - b + c > a
//    if none of the three above is not true and if any is 0:
//     - return 'invalid'

// Code
function triangle(side1, side2, side3) {
  let [shortest, middle, longest] = [side1, side2, side3].sort((a, b) => a - b);
  if (isValidTriangle(shortest, middle, longest)) {
    return getTriangleType(side1, side2, side3);
  } else {
    return 'invalid';
  }
}

function isValidTriangle(shortest, middle, longest) {
  return shortest > 0 && middle + shortest > longest;
}

function getTriangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    return 'equilateral';
  } else if (side1 === side2 || side2 === side3 || side3 === side1) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(4, 5, 4));        // "isosceles"