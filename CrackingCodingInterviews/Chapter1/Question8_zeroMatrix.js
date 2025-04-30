/**
 * Zero Matrix
If an element in a matrix is 0, set its row and column to 0.
 */

const zeroMatrix = (matrix) => {

  const rowSize = matrix.length;
  const colSize = matrix[0].length;
  const zeroRows = new Set();
  const zeroCols = new Set();

  for (let i = 0; i < rowSize; i++) {
    for (let j = 0; j < colSize; j++) {
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
    }
  }

  for (const row of zeroRows) {
    for (let j = 0; j < colSize; j++) {
      matrix[row][j] = 0;
    }
  }

  for (const col of zeroCols) {
    for (let i = 0; i < rowSize; i++) {
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