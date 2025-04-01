const getChunkedArray = (arr, chunkSize) => {
  const arrLength = arr.length;
  let response = [];

  for (let i = 0; i < arrLength; i += chunkSize) {
    response.push(arr.slice(i, i + chunkSize));
  }

  return response;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(getChunkedArray(arr, 3));