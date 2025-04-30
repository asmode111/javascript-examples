/**
 * Check Permutation
 * Check if one string is a permutation of another.
 * (e.g., "abc" and "bca" → ✅)
 */

const reverseStringSolution1 = (str) => {
  const arr = str.split("");
  arr.reverse();
  return arr.join("");
}

const reverseStringSolution2 = (str) => {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

const str = "abcdefg";
console.log(reverseStringSolution1(str));
console.log(str.split("").reverse().join(""));
console.log(reverseStringSolution2(str));