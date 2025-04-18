const reverseInteger = (number) => {
  const str = parseInt(number.toString().split("").reverse().join(""));
  if (number > 0) {
    return str;
  }

  return str * -1;
}

console.log(reverseInteger(51));
console.log(reverseInteger(500));
console.log(reverseInteger(-15));
console.log(reverseInteger(-900));

console.log(parseInt("41.1"))
console.log(Number("41.1"))

console.log(parseInt("41a"))
console.log(Number("41a"))

console.log(parseInt("-41a"))
console.log(Number("-41a"))