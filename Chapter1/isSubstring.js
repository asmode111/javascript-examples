const isSubstring = (sub, str) => {
  return str.includes(sub);
}

const isRotation = (str1, str2) => {
  if (str1.length === 0) {
    return false;
  }

  if (str1.length !== str2.length) {
    return false;
  }

  return isSubstring(str2, str1 + str1);
}


console.log(isRotation("waterbottle", "erbottlewat"));
console.log(isRotation("waterbottle", "erbottlewax"));
console.log(isRotation("hello", "llohe"));
console.log(isRotation("hello", "helol")); 