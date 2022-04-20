function firstAndLastIndex(nums, target) {
  let ans = [];

  ans[0] = search(nums, target, true);

  if (ans[0] != -1) {
    ans[1] = search(nums, target, false);
  } else {
    ans[1] = -1;
  }

  return ans;
}

function search(nums, target, findFirstIndex) {
  let ans = -1;
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target < nums[mid]) {
      end = mid - 1;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      ans = mid;
      if (findFirstIndex) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return ans;
}

console.log(firstAndLastIndex([1, 2, 3, 3, 3, 4, 4, 5, 5, 5], 9));
