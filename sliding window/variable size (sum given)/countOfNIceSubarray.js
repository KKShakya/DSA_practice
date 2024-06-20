// link=>https://leetcode.com/problems/count-number-of-nice-subarrays/




var numberOfSubarrays = function (nums, k) {
  let niceSubs = 0;
  let count = 0;
  let i = 0, j = 0;
  while (j < nums.length) {
    if (nums[j] % 2 == 1) {
      k--;
      count = 0;
    }
    while (k == 0) {
      if (nums[i] % 2 == 1) {
        k++;
      }
      count++;
      i++;
    }
    niceSubs += count;
    j++;
  }
  return niceSubs;
};