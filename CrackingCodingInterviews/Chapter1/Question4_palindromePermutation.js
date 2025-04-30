/**
 * Palindrome Permutation
Check if a string is a permutation of a palindrome.
(e.g., "taco cat" → ✅)
 */

const charCount = (str) => {
  let obj = {};
  for (const char of str) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }

  return obj;
}

const isOdd = (length) => {
  return length % 2 == 1;
}

const isPalindromePermutation = (str) => {
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  const charCountObj = charCount(str);
  if (isOdd(str.length)) {
    let numberOfOdds = 0;
    for (const charCount of Object.entries(charCountObj)) {
      if (isOdd(charCount[1])) {
        numberOfOdds++;
        if (numberOfOdds > 1) {
          return false;
        }
      }
    }

    return true;
  }

  for (const charCount of Object.entries(charCountObj)) {
    if (isOdd(charCount[1])) {
      return false;
    }
  }

  return true;
}

console.log(isPalindromePermutation("tact coa"));
console.log(isPalindromePermutation(" tact coa  "));
console.log(isPalindromePermutation("tact co"));
console.log(isPalindromePermutation("tpopto"));
console.log(isPalindromePermutation("puipip"));
console.log(isPalindromePermutation(" puipip "));