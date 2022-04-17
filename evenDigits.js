//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
// Given an array nums of integers, return how many of them contain an even number of digits.

// Input: nums = [12,345,2,6,7896]
// Output: 2

function evenDigitsInArray(nums) {
  let count = 0;
  function hasEvenDigits(digit) {
    let digitLength = Math.ceil(Math.log10(digit + 1)); //better complexity
    // or, digitLength = digit.toString().length // not so good complexity
    return digitLength % 2 === 0;
  }
  for (let i = 0; i < nums.length; i++) {
    //if number is negative, convert it to positive
    if (nums[i] < 0) {
      nums[i] == nums[i] * -1;
    }
    if (nums[i] === 0) {
      return 1;
    }
    if (hasEvenDigits(nums[i])) {
      count++;
    }
  }
  return count;
}

console.log(evenDigitsInArray([555, 901, 482, 1771, 34, 78]));
