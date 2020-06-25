// Matching Parentheses?
// Write a function that takes a string as argument, and returns true if all
// parentheses in the string are properly balanced, false otherwise. To be
// properly balanced, parentheses must occur in matching '(' and ')' pairs.

// Examples:

// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);

// The tests above should log true.

// Note that balanced pairs must each start with a (, not a ).

// Algorithm:
// - extract all the parentheses in the order that they appear
// - divide them in pairs
// - compare all items if they all are '()'

function isBalanced(string) {
  let parentheses = 0;
  for (let index = 0; index < string.length; index += 1) {
    let char = string[index];
    if (char === '(') {
      parentheses += 1;
    } else if (char === ')') {
      parentheses -= 1;
    }

    // to catch a starting ')'
    if (parentheses < 0) {
      return false;
    }
  }

  return parentheses === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);