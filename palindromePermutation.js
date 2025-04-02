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

const isPalindromePermutation = (str) => {
  str = str.trim().replace(/ +/g, "");

  const charCountObj = charCount(str);
  const mod = str.length % 2;
  if (mod == 1) {
    let numberOfOdds = 0;
    for (const charCount of Object.entries(charCountObj)) {
      if (charCount[1] % 2 == 1) {
        numberOfOdds++;

        if (numberOfOdds > 1) {
          return false;
        }
      }
    }

    return true;
  }

  for (const charCount of Object.entries(charCountObj)) {
    if (charCount[1] % 2 == 1) {
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