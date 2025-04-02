const stringCompression = (str) => {
  let charCount = 1;
  let compressedArr = [];
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === str[i+1]) {
      charCount++;
      continue;
    }

    compressedArr.push(str[i]);
    compressedArr.push(charCount);
    charCount = 1;
  }

  if (str.length <= compressedArr.length) {
    return str;
  }

  return compressedArr.join("");
}

console.log(stringCompression("aaaabccccdde"))
console.log(stringCompression("abcd"))
console.log(stringCompression("aabbcc"))