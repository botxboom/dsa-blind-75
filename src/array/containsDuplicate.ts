function containsDuplicate(arr: number[]) {
  let hash: Record<number, number> = {};

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] != null) {
      return arr[i];
    }
    hash[arr[i]] = i;
  }

  return -1;
}

export default containsDuplicate;
