const countAppearsWithObject = (arr) => {
  const objOfArr = {};
  for (const key of arr) {
    if (!objOfArr[key]) {
      objOfArr[key] = 1;
    } else {
      objOfArr[key]++;
    }
  }

  return objOfArr;
}

const countAppearsWithMap = (arr) => {
  const mapOfArr = new Map();
  for (const key of arr) {
    if (!mapOfArr.has(key)) {
      mapOfArr.set(key, 1);
    } else {
      const newValue = mapOfArr.get(key) + 1;
      mapOfArr.set(key, newValue);
    }
  }

  return mapOfArr;
}

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(countAppearsWithObject(fruits));
console.log(countAppearsWithMap(fruits));