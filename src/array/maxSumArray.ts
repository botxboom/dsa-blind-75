function maxSubArray(arr: number[]): number {
  let max = -100000;
  let sum = 0;
  let startIndex = -1;
  let endIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (sum === 0) {
      startIndex = i;
    }
    sum += arr[i];
    if (sum > max) {
      max = sum;
      endIndex = i;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  console.log(startIndex, endIndex);

  return max;
}

export default maxSubArray;
