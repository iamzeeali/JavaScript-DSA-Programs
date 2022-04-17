function linearSearchMinValue(arr) {
  if (arr.length === 0) {
    return null;
  }

  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

console.log(linearSearchMinValue([9, 4, 2, 32, 553, 893, 0949, 93, 09]));
