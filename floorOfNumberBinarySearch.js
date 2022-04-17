// return the index of greatest number <= target
function floor(nums, target) {
  // but if the target > last element of the sorted array

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      // ans found
      return mid;
    }
  }
  // Only difference with normal BS is that here we are returning end instead of -1
  return end;
}

floor([2, 4, 5, 7, 9, 14, 16, 19, 90], 15);
