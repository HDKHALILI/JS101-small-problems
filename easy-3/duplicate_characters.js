// ddaaiillyy ddoouubbllee
// Write a function that takes a string as argument and returns a new string
// that contains the value of the original string with all consecutive
// duplicate characters collapsed into a single character.

// Examples:
// crunch('ddaaiillyy ddoouubbllee');    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// Understanding the Problem
// Input:
//  - string
// Output:
//  - string
// Rule:
//  - no consecutive duplicate character

// Data Structure
// Input:
//  - string
// Output:
//  - string

// Algorithm
// - output = ''
// - iterate over each character of the text
//  if current char is not the same as next char
//   - concat it with output

// Code
function crunch(text) {
  let output = '';
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] !== text[index + 1]) {
      output += text[index];
    }
  }
  return output;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

// *** Further Exploration ***
// You may have noticed that the solution continues iterating until index
// points past the end of the string. As a result, on the last iteration, text
// [index] is the last character in text, while text[index + 1] is undefined.
// Why does it do this? What happens if it stops iterating when index is
// equal to text.length - 1?

// Answer: final iteration's text[index + 1] = undefined is because at the
// last iteration the loop has reached the last index, and adding 1 to index
// will be out of bound. out of bound index returns undefined

// text.length - 1 -> will not work because if the chars be the same
// they will be ignored. result will have one letter missing.
// e.g 'yy'[0] === 'yy'[0 + 1] => true and will be ignored.

// It's also possible to solve this using regular expressions. For a nice
// challenge, give this a try with regular expressions. Can you think of any
// other solutions that don't use regular expressions?

function crunch2(text) {
  let crunched = text.split(' ').map(char => char.replace(/(.)\1+/g, '$1'));
  return crunched.join(' ');
}
console.log('------------');
console.log(crunch2('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch2('4444abcabccba'));              // "4abcabcba"
console.log(crunch2('ggggggggggggggg'));            // "g"
console.log(crunch2('a'));                          // "a"
console.log(crunch2(''));                           // ""

function crunch3(text) {
  if (text.length > 0) {
    return text.split('').reduce((acc, char) => {
      if (!acc.endsWith(char)) {
        acc += char;
      }
      return acc;
    });
  }
  return text;
}

console.log(crunch3('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch3('4444abcabccba'));              // "4abcabcba"
console.log(crunch3('ggggggggggggggg'));            // "g"
console.log(crunch3('a'));                          // "a"
console.log(crunch3(''));                           // ""