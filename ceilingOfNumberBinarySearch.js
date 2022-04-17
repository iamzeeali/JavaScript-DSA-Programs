// return the index of smallest number >= target
function ceiling(nums, target) {
  // but if the target > last element of the sorted array
  if (target > nums[nums.length - 1]) {
    return -1;
  }
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
  // Only difference with normal BS is that here we are returning start instead of -1
  return start;
}

ceiling([2, 4, 5, 7, 9], 6);
