const zeroMatrix = (matrix) => {

  const rowsSize = matrix.length;
  const colsSize = matrix[0].length;
  const zeroRows = new Set();
  const zeroCols = new Set();

  for (let i = 0; i < rowsSize; i++) {
    for (let j = 0; j < colsSize; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }

  console.log('zeroRows', zeroRows)
  console.log('zeroCols', zeroCols)

  for (const row of zeroRows) {
    for (let i = 0; i < colsSize; i++) {
      matrix[row][i] = 0;
    }
  }

  for (const col of zeroCols) {
    for (let i = 0; i < rowsSize; i++) {
      matrix[i][col] = 0;
    }
  }

  return matrix;
}

console.log(zeroMatrix(
  [
    [4,0,6],
    [2,8,1],
    [5,9,2],
  ]
));
console.log(zeroMatrix(
  [
    [1, 2, 3],
    [4, 0, 6],
    [7, 8, 9],
  ]
))