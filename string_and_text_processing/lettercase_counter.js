// Lettercase Counter

// Write a function that takes a string and returns an object containing three
// properties: one representing the number of characters in the string that are
// lowercase letters, one representing the number of characters that are
// uppercase letters, and one representing the number of characters that are
// neither.

// Examples:

// letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

function letterCaseCount(string) {
  let allUppercaseLetters = select(string, isUppercase);
  let allLowercaseLetters = select(string, isLowercase);
  let allNonLetters = select(string, isNoneLetter);

  return {
    lowercase: allLowercaseLetters.length,
    uppercase: allUppercaseLetters.length,
    neither: allNonLetters.length,
  };
}

function select(string, callback) {
  return string
    .split("")
    .filter((char) => callback(char))
    .join("");
}

function isUppercase(char) {
  return char >= "A" && char <= "Z";
}

function isLowercase(char) {
  return char >= "a" && char <= "z";
}

function isNoneLetter(char) {
  return !isLowercase(char) && !isUppercase(char);
}

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }

// with regex
function letterCaseCount2(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length,
  };
}
