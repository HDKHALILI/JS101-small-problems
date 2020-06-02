// Create a function that takes 2 arguments, an array and an object.
// The array contain 2 or more elements that, when combined with adjoining
// spaces, will produce a person's name. The object will contain two keys,
// 'title', and 'occupation', and the appropriate values. Your function should
// return a greeting that uses the person's full name, and mentions that
// person's title.

// Understand the Problem:
// Input:
//  - array
//   - 2 or more string
//  - object
//   - 2 string
// Output:
//  - string
// Rule:
// - array contains name
// - object contain title and occupation
// - greet like:
//  - Hello [name]! Nice to have a [title] [occupation] around.

// Data Structure
// Input:
//  - array of string
//  - object with 2 properties
// Output:
// - string

// Algorithm:
// - name = join the elements of array with space.
// - title = get the title and occupation and concatenate with them with
//   space in between
// - return "Hello [name]! Nice to have a [title] around."

// Code:
function greetings(names, titles) {
  let name = names.join(" ");
  let title = `${titles.title} ${titles.occupation}`;
  return `Hello, ${name}! Nice to have a ${title} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
