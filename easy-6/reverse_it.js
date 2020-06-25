// Reverse It (Part 1)

// Write a function that takes a string argument, and returns a new string
// containing the words from the string argument in reverse order.

// Examples:

// reverseSentence('');                       // ""
// reverseSentence('Hello World');            // "World Hello"
// reverseSentence('Reverse these words');    // "words these Reverse"

function reverseSentence(text) {
  return text.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"


// Reverse It (Part 2)

// Write a function that takes a string argument containing one or more words,
// and returns a new string containing the words from the string argument. All
// five-or-more letter words should have their letters in reverse order. The
// string argument will consist of only letters and spaces. Words will be
// separated by a single space.

// Examples:

// reverseWords('Professional');             // "lanoisseforP"
// reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
// reverseWords('Launch School');            // "hcnuaL loohcS"

function reverseWords(text) {
  let result = text.split(' ').map(word => {
    if (word.length >= 5) {
      return word.split('').reverse().join('');
    }

    return word;
  });

  return result.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"