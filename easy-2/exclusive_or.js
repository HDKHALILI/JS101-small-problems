// The || operator returns a truthy value if either or both of its operands
// are truth, a falsey value if both operands are falsey. The && operator
// returns a truthy value if both of its operands are truthy, and falsey value
// if either operand is falsey. This works great until you need only one of
// two conditions to be truthy, the so-called exclusive or.

// In this exercise, you will write a function named 'xor' that takes two
// arguments, and returns true if exactly one of its arguments is truthy,
// false other wise

// Example:
// xor(5, 0) => true
// xor(false, true) => true
// xor(1, 1) => false

// Understanding the Problem
// Input:
//  - string, numbers, true/false
// Output:
//  - true/false
// Rules:
//  - falsey: false, 0, '', null, undefined, NaN
//  - truthy: all that is not falsey
//  - true: if only one of the argument is truthy.
//  - false: if more than one are true, and both are false

// Data Structure:
// Input:
//  - number, string, boolean
// Output:
//  - boolean

// Algorithm:
// - if arg1 && arg2
//  - return false
// - else
//   - return true

// Code:
function xor(a, b) {
  if (a && b) {
    return false;
  } else {
    return true;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

{
  function xor(value1, value2) {
    // we check each value against the other value inverted
    // e.g
    // value1 = true, value2 = true
    // true && !true(false) -> false || true && !true(false) -> false
    // false || false => false
    // value1 = true, value2 = false
    // true && !false(true) -> true, false && !true(false) -> false
    // true || false => true
    // if ((value1 && !value2) || (value2 && !value1)) {
    //   return true;
    // }
    // return false;

    return (value1 && !value2) || (value2 && !value1);
  }

  console.log(xor(5, 0) === true);
  console.log(xor(false, true) === true);
  console.log(xor(1, 1) === false);
  console.log(xor(true, true) === false);
  console.log(xor("hi", "hello"));
  console.log(xor("hi", ""));
}
