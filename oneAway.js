const charCount = (str) => {
  let obj = {};
  for (let char of str) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }

  return obj;
}

const isOneAway = (str1, str2) => {
  str1 = str1.trim();
  str2 = str2.trim();
  if (str1 == str2) {
    return false;
  }

  const lengthDiff = Math.abs(str1.length - str2.length);
  if (lengthDiff > 1) {
    return false;
  }

  const str1CharCountObj = charCount(str1);
  const str2CharCountObj = charCount(str2);

  let diffCount = 0;
  for (let i in str1CharCountObj) {
    if (str1CharCountObj[i] !== str2CharCountObj[i]) {
      diffCount++;
    }

    if (diffCount > 1) {
      return false;
    }
  }

  return true;
}


console.log(isOneAway("pale", "ple"));
console.log(isOneAway("pales", "pale"));
console.log(isOneAway("pale", "kale"));
console.log(isOneAway("pale", "pales"));
console.log(isOneAway("pale", "bake"));
console.log(isOneAway("ale", "ake"));
console.log(isOneAway("ale", "akk"));