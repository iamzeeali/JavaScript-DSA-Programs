function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  let isAscending = nums[start] < nums[end];

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] === target) {
      return mid;
    }
    if (isAscending) {
      if (target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target > nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return -1;
}

binarySearch([90, 84, 76, 63, 55, 48, 34], 76);
