// Fibonacci Numbers (Procedural)

// In the previous exercise, we developed a recursive solution for computing the
// nth Fibonacci number. In a language that is not optimized for recursion, some
// (but not all) recursive functions can be extremely slow and may require
// massive quantities of memory and/or stack space. If you tested for bigger nth
// numbers, you might have noticed that getting the 50th fibonacci number
// already takes a significant amount of time.

// Fortunately, every recursive function can be rewritten as a
// non - recursive(or procedural) function.

// Rewrite your recursive fibonacci function so that it computes its results
// without using recursion.

// Examples:

// fibonacci(20);       // 6765
// fibonacci(50);       // 12586269025
// fibonacci(75);       // 2111485077978050

// Note that JavaScript can accurately compute intergers up to 16 digits long;
// this means that fibbonacci(78) is the largest Fibbonacci number that you can
// accurately compute with simple operations in JavaScript.

function fibonacci(nth) {
  let num1 = 1;
  let num2 = 1
  let total = 0
  for (let index = 3; index <= nth; index += 1) {
    total = num1 + num2;
    num1 = num2;
    num2 = total;
  }
  return total;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050


// solution 2
function fibonacci2(nth) {
  let previous = 1;
  let total = 1;
  for (let index = 3; index <= nth; index += 1) {
    // array destructuring
    //                  we make an array of the variable values before update
    // reassign the variables
    [total, previous] = [total + previous, total];
  }
  return total;
}

console.log(fibonacci2(20));       // 6765
console.log(fibonacci2(50));       // 12586269025
console.log(fibonacci2(75));       // 2111485077978050

// soluton 3
function fibonacci3(nth) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= nth; counter += 1) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }

  return previousTwo[1];
}

console.log(fibonacci3(20));       // 6765
console.log(fibonacci3(50));       // 12586269025
console.log(fibonacci3(75));       // 2111485077978050