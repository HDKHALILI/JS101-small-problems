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