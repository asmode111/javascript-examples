const isAnagram  = (str1, str2) => {
  if (str1 == str2) {
    return true;
  }

  if (str1.length != str2.length) {
    return false;
  }

  const sorted1 = str1.split("").sort().join("");
  const sorted2 = str2.split("").sort().join("");

  return sorted1 === sorted2;
}

console.log(isAnagram("listen", "listen"));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "oehll"));
console.log(isAnagram("listen", "salent"));
console.log(isAnagram("listen", "silentt"));
console.log(isAnagram("listen", "silen"));
console.log(isAnagram("aab", "abc"));