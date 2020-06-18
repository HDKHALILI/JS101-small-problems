// write a function that determines the mean (average) of the three scores
// passed to it, and returns the letter associated with that grade.

// Understanding the Problem:
// Input: integer 0 - 100
// Output: string
// Rules:
//  - mean: (sum of all the inputs) / the number of inputs
//  - Letter Grades:
//    - A: 90 <= score <= 100:
//    - B: 80 <= score < 90:
//    - C: 70 <= score < 80:
//    - D: 60 <= score < 70:
//    - F: 0 <= score < 60:

// Algorithm:
// - find the average of the scores
// - check what in what range does it fit
// - return the letter for that range

// Code:
function getGrade(score1, score2, score3) {
  let average = getAverage(score1, score2, score3);

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'C';
  }
}

function getAverage(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let average = sum / arguments.length;
  return average;
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"