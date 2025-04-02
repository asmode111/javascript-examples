const isOneAway = (str1, str2) => {
  str1 = str1.trim();
  str2 = str2.trim();

  if (str1 === str2) {
    return false;
  }

  const str1Length = str1.length;
  const str2Length = str2.length;

  const lengthDiff = Math.abs(str1Length - str2Length);
  if (lengthDiff > 1) {
    return false;
  }

  const str1Arr = str1.split("");
  const str2Arr = str2.split("");

  let diffCount = 0;
  if (str1Length === str2Length) {
    for (let i = 0; i < str1Length; i++) {
      if (str1Arr[i] !== str2Arr[i]) {
        diffCount++;
        if (diffCount > 1) {
          return false;
        }
      }
    }
  }

  // TODO: Handle Length diff = 1 case

  return true;
}


console.log(isOneAway("pale", "kale")); // true
console.log(isOneAway("pale", "cake")); // false
console.log(isOneAway("pale", "ple")); // true
console.log(isOneAway("pales", "pale")); // true
console.log(isOneAway("pale", "pales")); // true
console.log(isOneAway("pale", "bake")); // false
console.log(isOneAway("ale", "ake")); // true 
console.log(isOneAway("ale", "akk")); // false