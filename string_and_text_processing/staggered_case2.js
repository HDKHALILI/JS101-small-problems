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

function isLetter(char) {
  char = char.toLowerCase();
  return char >= "a" && char <= "z";
}

function staggeredCase(string) {
  let shouldBeUppercase = true;
  return string
    .split("")
    .map((char) => {
      if (isLetter(char)) {
        char = shouldBeUppercase ? char.toUpperCase() : char.toLowerCase();
        shouldBeUppercase = !shouldBeUppercase;
      }
      return char;
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!"));
console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
console.log(staggeredCase("ignore the numbers"));
