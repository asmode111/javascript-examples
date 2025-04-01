const isUniqueString = (str) => {
  let stack = [];
  for (const char of str) {
    if (!stack[char]) {
      stack[char] = true;
      continue;
    }

    return false;
  }

  return true;
}

console.log(isUniqueString("abcd"));
console.log(isUniqueString("aabcd"));
console.log(isUniqueString("abcdd"));