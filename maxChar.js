const maxChar = (str) => {
  let obj = {};

  for (let char of str) {
    if (obj[char]) {
      obj[char] = ++obj[char];
    } else {
      obj[char] = 1;
    }
  }

  console.log(obj);
  const maxObj = Object.entries(obj).reduce((result, val) => {
    if (val[1] > result.maxNumber) {
      return {maxNumber: val[1], maxChar: val[0]};
    }

    return result;
  }, {maxNumber: 0, maxChar: ''})

  return maxObj;
}

console.log(maxChar("ab4caccccc6adegbca"));