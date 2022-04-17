// https://leetcode.com/problems/find-smallest-letter-greater-than-target/submissions/

var nextGreatestLetter = function (letters, target) {
  // but if the target > last element of the sorted array

  let start = 0;
  let end = letters.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target < letters[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return letters[start % letters.length];
};

nextGreatestLetter(["c", "f", "j"], "a");
