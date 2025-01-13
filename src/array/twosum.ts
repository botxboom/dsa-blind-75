// Two Sum

let arr = [2, 6, 5, 8, 11];

function twoSum(arr: number[], target: number) {
  let hash: Record<number, number> = {};

  for (let i = 0; i < arr.length; i++) {
    let compliment: number = target - arr[i];
    if (hash[compliment] != null) {
      return [hash[compliment], i];
    }

    hash[arr[i]] = i;
  }
}

export default twoSum;
