// Name Swapping

// Write a function that takes a string argument consisting of a first name,
// a space, and a last name, and returns a new string consisting of the last
// name, a comma, a space, and the first name.

// Examples:

// swapName('Joe Roberts');    // "Roberts, Joe"

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"

// Further Exploration

// What if the person has one or more middle names? Refactor the current
// solution so that it can accommodate this; the middle names should be listed
// after the first name:

function swapName2(name) {
  let nameArray = name.split(' ');
  let lastname = nameArray[nameArray.length - 1];
  let restOfName = nameArray.slice(0, nameArray.length - 1).join(' ');

  return `${lastname}, ${restOfName}`;
}

console.log(swapName2('Karl Oskar Henriksson Ragvals'));
// => "Ragvals, Karl Oskar Henriksson"
