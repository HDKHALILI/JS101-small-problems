// Now I Know My ABCs

// A collection of spelling blocks has two letters per block, as shown in
// this list:
/*
  B:O   X:K   D:Q   C:P   N:A
  G:T   R:E   F:S   J:W   H:U
  V:I   L:Y   Z:M
*/

// This limits the words you can spell with the blocks to only those words that
// do not use both letters from any given block. You can also only use each
// block once.

// Write a function that takes a word string as an argument, and returns true if
// the word can be spelled using the set of blocks, or false otherwise. You can
// consider the letters to be case-insensitive when you apply the rules.

// Examples:

// isBlockWord('BATCH');      // true
// isBlockWord('BUTCH');      // false
// isBlockWord('jest');       // true

// Understanding the Problem:
// Input: string: one word
// Ouput: boolean: true/false
// Rules:
//  - You can only use one letter of the block in a word
//  - you can use each block only once

// Data Structure:
// Input: array and string
// Ouput: boolean
//  - use a array of 13 element to represent block
//   ['BO', ...]

// Algorithm:
// - define an array that contains the 13 two-letter blocks
// - split the input string into an array of chars and iterate though it.
//   for each char:
//    - if no block contains the char, return false
//    - otherwise remove the block that contains the char from the block array
// - end loop
// - return true

function isBlockWord(word) {
  const blocks =
    ["BO", "XK", "DQ", "CP", "NA", "GT", "RE", "FS", "JW", "HU", "VI", "LY", "ZM"];
  let charsArray = word.toUpperCase().split('');
  for (let index = 0; index < charsArray.length; index += 1) {
    let blockIndex = blocks.findIndex(block => block.includes(charsArray[index]));
    if (blockIndex < 0) return false;
    blocks.splice(blockIndex, 1);
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false