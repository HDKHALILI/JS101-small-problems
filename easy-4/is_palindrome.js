// Palindromic Strings (Part 1)
// Write a function that returns true if the string passed as an argument is
// a palindrome, or false otherwise. A palindrom reads the same formards and
// backwards. For this problem, the case matters and all characters matter.

// Examples:

// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true

function isPalindrome(text) {
  let textReversed = text.split('').reverse().join('');
  return text === textReversed;
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true


// Palindromic Strings (Part 2)

// Write another function that returns true if the string passed as an argument
// is a palindrome, or false otherwise. This time, however, your function should
// be case-insensitive, and should ignore all non-alphanumeric characters. If
// you wish, you may simplify things by calling the isPalindrome function you
// wrote in the previous exercise.
console.log('Real Palindrom ------------------------');

function isRealPalindrome(text) {
  let cleanedText = removeNonAlphanumeric(text.toLowerCase());
  return isPalindrome(cleanedText);
}

function removeNonAlphanumeric(text) {
  let result = '';
  for (let index = 0; index < text.length; index += 1) {
    let char = text[index];
    if (isLetter(char) || isNumber(char)) {
      result += char;
    }
  }

  return result;
}

function isLetter(char) {
  let alpabets = 'abcdefghijklmnopqrstuvwxyz';

  return alpabets.includes(char);
}

function isNumber(char) {
  let zeroToNine = "0123456789";
  return zeroToNine.includes(char);
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false

// Shorter Version
// function isRealPalindrome(string) {
//   string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
//   return isPalindrome(string);
// }