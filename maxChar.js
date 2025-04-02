const maxChar = (str) => {
  let obj = {};

  for (let char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  console.log(obj);
  const maxObj = Object.entries(obj).reduce((result, row) => {

    if (row[1] > result.maxValue) {
      return {maxChar: row[0], maxValue: row[1]};
    }

    return result;

  }, {maxChar: '', maxValue: 0});

  return maxObj;
}

console.log(maxChar("ab4caccccc6adegbca"));