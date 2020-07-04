// Staggered Caps (Part 2)

// Modify the function from the previous exercise so it ignores non-alphabetic
// characters when determining whether it should uppercase or lowercase each
// letter. The non-alphabetic characters should still be included in the return
// value; they just don't count when toggling the desired case.

// Example:

// console.log(staggeredCase(
// "I Love Launch School!") === "I lOvE lAuNcH sChOoL!"
// );
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
// staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

// Further Exploration

// Modify this function so the caller can determine whether non-alphabetic
// characters should be counted when determining the upper/lowercase state.
// That is, you want a function that can perform the same actions that this
// function does, or operates like the previous version.

function isLetter(char) {
  char = char.toLowerCase();
  return char >= "a" && char <= "z";
}

// function staggeredCase(string, ignoreNoneAlphabetic = true) {
//   let shouldBeUppercase = true;
//   return string
//     .split("")
//     .map((char) => {
//       if (isLetter(char)) {
//         char = shouldBeUppercase ? char.toUpperCase() : char.toLowerCase();
//         shouldBeUppercase = !shouldBeUppercase;
//       }
//       return char;
//     })
//     .join("");
// }

function staggeredCase(string, ignoreNoneAlphabetic = true) {
  let shouldBeUppercase = true;

  return string
    .split("")
    .map((char) => {
      if (!isLetter(char) && ignoreNoneAlphabetic) {
        return char;
      }

      char = shouldBeUppercase ? char.toUpperCase() : char.toLowerCase();
      shouldBeUppercase = !shouldBeUppercase;
      return char;
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!", false)); // "I LoVe lAuNcH ScHoOl!"
console.log(
  staggeredCase("I Love Launch School!", false) === "I LoVe lAuNcH ScHoOl!"
);
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");

console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"

console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
console.log(
  staggeredCase("ignore 77 the 444 numbers", false) ===
    "IgNoRe 77 ThE 444 NuMbErS"
);
console.log(staggeredCase("ignore 77 the 444 numbers")); // "IgNoRe 77 ThE 444 NuMbErS"
