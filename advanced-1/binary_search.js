// Binary Search

// It is quite common to find yourself in a situation where you need to perform
// a search on some data to find something you're looking for. Imagine that you
// need to search through the yellow pages to find the phone number of a
// particular business. A straightforward way to do this would be to go through
// the yellow pages one business at a time, checking if the current business
// name is the one you're trying to find.

// This may be a simple and easy way to search, but it's not very efficient. In
// the worst case scenario, it could mean having to search through every single
// business name before finding out that the business isn't listed—or, slightly
// better, having to go through every letter from 'A' to 'Z' before finding the
// business. A linear search such as this can take quite a long time.

// A binary search algorithm is a much more efficient alternative. This
// algorithm allows you to cut the search area in half on each iteration by
// discarding the half that you know your search term doesn't exist in. The
// binary search algorithm is able to do this by relying on the data being
// sorted. Going back to the yellow pages example, let's say that we're
// searching the following yellowPages data for the search item 'Pizzeria':

// Yellow pages list of business names data:
/*
let yellowPages = ['Apple Store',
                   'Bags Galore',
                   'Bike Store',
                   'Donuts R Us',
                   'Eat a Lot',
                   'Good Food',
                   'Pasta Place',
                   'Pizzeria',
                   'Tiki Lounge',
                   'Zooper'];
*/

// With a linear search, we would have to sequentially go through each of the
// items until we found the search item 'Pizzeria'. In a binary search,
// however, the following sequence happens:

// Retrieve the middle value from the data (assume truncation to integer) --> 'Eat a Lot'.
// If the middle value is equal to 'Pizzeria', stop the search.
// If the middle value is less than 'Pizzeria':
// Discard the lower half, including the middle value 
//  --> ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot'].
// Repeat the process from the top, using the upper half as the starting data
//   --> ['Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'].
// If the middle value is greater than 'Pizzeria', do the same as the previous step,
// but with opposite halves.

// Using the process described above, the search successfully ends on the second
// iteration when the middle value is 'Pizzeria'.

// Implement a binarySearch function that takes an array and a searchItem as
// arguments, and returns the index of the searchItem if found, or -1 otherwise.
// You may assume that the array argument will always be sorted.

// Understand the Problem:
// Input:
//  - array
//  - string
//  - search for the string in the array
// Ouput: number
// Rules:
// - array must be sorted
// - if the search item is found in array return its index
// - if not found return -1

// Algorithm:
// - define a range to search with in
// - at the start the entire array is the range for search
// - middle is the middle the range
// - if the item in the middle is what we are looking for, then we stop searching
// - if middle item is less than the value we are looking for
//   - change the start of the range to be middle + 1 
//     (+1 because we don't want to include middle value in the next search)
// - if it is more than the value we are looking for
//   - change the end of range to be middle - 1
//     (-1 because we don't want to include the middle value in the next search)
// - if no value found in entire we represent that by -1

// Implementation:
// - set stop to be array length - 1
// - set start to be 0
// - start a loop that ends when start is more than stop
//   - set mid = start + (stop - start) / 2
//   - if array[mid] is the same as search item return mid
//   - if array[mid] is less than search item
//    - mid = mid + 1
//  - else if middle value greater than search item
//    - mid = mid - 1
// - end loop
// - return -1

// Code
function binarySearch(array, searchItem) {
  let stop = array.length - 1;
  let start = 0;
  while (start <= stop) {
    let middle = start + Math.floor((stop - start) / 2);
    if (array[middle] === searchItem) {
      return middle;
    } else if (array[middle] < searchItem) {
      start = middle + 1;
    } else {
      stop = middle - 1;
    }
  }
  return -1;
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];

console.log(binarySearch(yellowPages, 'Pizzeria')); // 7
console.log(binarySearch(yellowPages, 'Apple Store')); // 0
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler')); // 6