// Create a function that takes two arguments, multiplies them together,
// and returns the result.

function multiply(a, b) {
  return a * b;
}

console.log(multiply(5, 3) === 15);

// Using multiply() function, write a function that computes the square of its
// argument (the square is the result of multiplying a number by it self);
function square(num) {
  return multiply(num, num);
}
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true
console.log(square(9) === 37); // logs false

// Further Exploration
// What is we wanted to generalise this function to a 'power to the n' type of
// function: cubed, to the 4th power, to the 5th, etc.
// How would you go about doing so while still using the multiply() function?
// Rules:
//  - cubed -> multiply the number by it self 3 times
//  - 4th -> multiply the number by it self 4 times
//  - ...

function power(num, power) {
  let output = 1;
  for (let count = 1; count <= power; count += 1) {
    output = multiply(output, num);
  }
  return output;
}
console.log("----------------");
console.log(power(5, 3)); // => 125
console.log(power(-8, 2)); // => 64
console.log(power(10, 3)); // => 1000
console.log(power(8, 5)); // => 32768
