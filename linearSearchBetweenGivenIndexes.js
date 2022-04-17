function linearSearchBetweenGivenIndexes(arr, target, start, end) {
  if (arr.length === 0) {
    return null;
  }

  for (let i = start; i < end; i++) {
    let element = arr[i];
    if (element === target) {
      return i;
    }
  }
}

console.log(
  linearSearchBetweenGivenIndexes([9, 4, 32, 553, 893, 0949, 93, 09], 32, 1, 4)
);
