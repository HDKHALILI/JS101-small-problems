// Write a function that returns true if its integer argument is a palindromic,
// or false otherwise. A palindromic number reads the same forwards and
// backwards.

// Examples:

// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true

function isPalindrome(text) {
  let textReversed = text.split('').reverse().join('');
  return text === textReversed;
}

function isPalindromicNumber(integer) {
  return isPalindrome(String(integer));
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(005));            // true
console.log(isPalindromicNumber(002200));            // true