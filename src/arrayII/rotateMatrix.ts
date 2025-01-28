function rotateMatrix(mat: number[][]) {
  for (let i = 0; i < mat.length - 1; i++) {
    for (let j = i + 1; j < mat.length; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }

  for (let i = 0; i < mat.length; i++) {
    mat[i] = mat[i].reverse();
  }
}

export default rotateMatrix;
