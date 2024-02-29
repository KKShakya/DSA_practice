/**
 * @param {number[]} nums - Array of numbers containing only 0s, 1s, and 2s.
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// This function sorts an array of numbers containing only 0s, 1s, and 2s, in ascending order.
// It is a variation of the famous Dutch National Flag problem.

var sortColors = function (nums) {
  // Initialize pointers for the three sections of the array: 0s, 1s, and 2s.
  let low = 0, high = nums.length - 1;
  let mid = 0;
  
  // Continue until the pointer for 1s (mid) crosses or equals the pointer for 2s (high).
  while (mid <= high) {
    // If the current element is 0, swap it with the element at the low pointer.
    // Move both low and mid pointers one step forward.
    if (nums[mid] == 0) {
      let tmp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = tmp;
      low++;
      mid++;
    }
    // If the current element is 1, it's already in the correct place, so move the mid pointer one step forward.
    else if (nums[mid] == 1) {
      mid++;
    } 
    // If the current element is 2, swap it with the element at the high pointer.
    // Move the high pointer one step backward.
    // Note: We don't move the mid pointer in this case because we're not sure what element we've swapped with.
    else if (nums[mid] == 2) {
      let tmp = nums[mid];
      nums[mid] = nums[high];
      nums[high] = tmp;
      high--;
    }
  }
};


// the problem says 
// rules:
// 1. low <=> mid-1 is where 0's are present
// 2. mid <=> high-1 is where 1's are present
// 3. high <=> n-1 is where 2's are present