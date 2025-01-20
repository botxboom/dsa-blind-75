function setZeroes(matrix: number[][]) {
  let row_col: number[][] = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        row_col.push([i, j]);
      }
    }
  }

  console.log(row_col);

  row_col.forEach((rc) => {
    markZeroes(rc, matrix);
  });
}

function markZeroes(row_col: number[], matrix: number[][]) {
  const row = row_col[0];
  const col = row_col[1];

  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }

  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
}

export default setZeroes;
