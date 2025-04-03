const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("abba"));
console.log(isPalindrome("baba"));