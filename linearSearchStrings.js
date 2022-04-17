function linearSearchStrings(arr, target) {
  if (arr.length === 0) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    let element = arr.charAt(i);
    console.log(element);
    if (element === target) {
      return i;
    }
  }
}

console.log(linearSearchStrings("zeeshan", "n"));
