/**
 * URLify
 * Replace all spaces in a string with %20.
 * Assume you’re given the “true” length of the string.
 */

const urlify = (str, trueLength) => {
  const actual = str.slice(0, trueLength);
  return actual.split(" ").join("%20");
}

console.log(urlify("Mr John Smith", 13));
console.log(urlify("Mr John Smith    ", 13));