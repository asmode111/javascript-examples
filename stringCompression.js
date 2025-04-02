const stringCompression = (str) => {
  let strLength = str.length;
  let count = 1;
  let uniqueCount = 0;
  let output = '';

  for (let i = 0; i < strLength; i++) {
    if (str[i] === str[i+1]) {
      count++;
      continue;
    }

    output += str[i] + count;
    count = 1;
    uniqueCount++;
  }

  if (uniqueCount === strLength) {
    return str;
  }

  return output;
}

console.log(stringCompression("aaaabccccdde"))
console.log(stringCompression("abcd"))