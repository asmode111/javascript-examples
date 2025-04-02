const isAnagram  = (str1, str2) => {
  if (str1 == str2) {
    return true;
  }

  if (str1.length != str2.length) {
    return false;
  }


  for (let i = 0; i < str1.length; i++) {
    let hasLetter = false;
    for (let j = 0; j < str1.length; j++) {
      if (str1[i] == str2[j]) {
        hasLetter = true
        break;
      }
    }

    if (!hasLetter) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("listen", "listen"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "oehll"));
console.log(isAnagram("listen", "salent"));
console.log(isAnagram("listen", "silentt"));
console.log(isAnagram("listen", "silen"));