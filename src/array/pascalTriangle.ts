function nCr(n: number, r: number): number {
  let result: number = 1;

  for (let i = 0; i < r - 1; i++) {
    result = result * (n - 1 - i);
    result = result / (i + 1);
  }

  return result;
}

// naive
function printRow(row: number): number[] {
  let rowNums = [];
  for (let col = 1; col <= row; col++) {
    rowNums.push(nCr(row, col));
  }

  return rowNums;
}

// optimized
function printRowOptimized(row: number): number[] {
  let rowNums = [1];
  for (let col = 1; col < row; col++) {
    let num = ((row - col) / col) * rowNums[col - 1];
    rowNums.push(num);
  }

  return rowNums;
}

function printEntireTriangle(height: number) {
  for (let i = 1; i <= height; i++) {
    console.log(printRowOptimized(i));
  }
}

export { printEntireTriangle, printRow, nCr };
