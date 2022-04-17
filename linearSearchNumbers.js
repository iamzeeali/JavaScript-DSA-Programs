function linearSearchNumbers(arr, target) {
  if (arr.length === 0) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element === target) {
      return i;
    }
  }
}

console.log(linearSearchNumbers([9, 4, 32, 553, 893, 0949, 93, 09], 09));
