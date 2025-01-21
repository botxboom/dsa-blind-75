function findDip(arr: number[]): number {
  let index = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      index = i;
      break;
    }
  }

  return index;
}

function nextPermutation(arr: number[]) {
  let dip = findDip(arr);

  let result = [];
  let numToSwap = arr[dip];

  if (dip == -1) {
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
  } else {
    for (let i = arr.length - 1; i > dip; i--) {
      if (arr[i] > numToSwap) {
        let smallerNum = arr[i];
        arr[dip] = smallerNum;
        arr[i] = numToSwap;
      }
      break;
    }

    let start = dip + 1;
    let end = arr.length - 1;

    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;

      start++;
      end--;
    }
  }
}

export default nextPermutation;
