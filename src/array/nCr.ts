function nCr(n: number, r: number): number {
  let result: number = 1;

  for (let i = 0; i < r - 1; i++) {
    result = result * (n - 1 - i);
    result = result / (i + 1);
  }

  return result;
}

nCr(5, 3);
