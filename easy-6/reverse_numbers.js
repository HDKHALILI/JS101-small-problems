// Write a function that takes a positive integer as an argument, and returns
// that number with its digits reversed.

// Examples:

// reverseNumber(12345);    // 54321
// reverseNumber(12213);    // 31221
// reverseNumber(456);      // 654
// reverseNumber(12000);    // 21 Note leading zeros in the result get dropped!
// reverseNumber(1);        // 1

function reverseNumber(number) {
  let stringNumbersArray = String(number).split('');
  let numbersReversed = stringNumbersArray.reverse().join('');

  return Number(numbersReversed);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 Note leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1