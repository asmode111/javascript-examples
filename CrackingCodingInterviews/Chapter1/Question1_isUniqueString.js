/**
 * 1. Is Unique
 * Check if a string has all unique characters.
 * Bonus: What if you can’t use additional data structures?
 */

const isUniqueString = (str) => {
  const seen = {};
  for (const char of str) {
    if (seen[char]) {
      return false;
    }

    seen[char] = true;
  }

  return true;
}

const isUniqueStringWithoutDataStructure = (str) => {
  const arr = str.split("").sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] == arr[i+1]) {
      return false;
    }
  }

  return true;
}

console.log(isUniqueString("abcd"));
console.log(isUniqueString("aabcd"));
console.log(isUniqueString("abcdd"));

console.log(isUniqueStringWithoutDataStructure("abcd"));
console.log(isUniqueStringWithoutDataStructure("aabcd"));
console.log(isUniqueStringWithoutDataStructure("abcdd"));