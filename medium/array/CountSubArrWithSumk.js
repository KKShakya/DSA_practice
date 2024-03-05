//link=>https://leetcode.com/problems/subarray-sum-equals-k/description/
/**
 * Counts the number of subarrays in the given array whose sum equals k.
 * @param {number[]} arr - The input array.
 * @param {number} k - The target sum.
 * @returns {number} - The count of subarrays whose sum equals k.
 */
 var subarraySum = function(arr, k) {
  // Initialize a map to store cumulative sums and their frequencies
  let mp = new Map();
  // Initialize sum, ans, and set sum=0 with frequency 1
  let sum = 0;
  let ans = 0;
  mp.set(sum, 1);

  // Iterate through the array
  for (let num of arr) {
      // Update the cumulative sum
      sum += num;
      // Calculate the difference between current sum and target k
      let find = sum - k;
      // If the map contains the difference, add its frequency to ans
      if (mp.has(find)) {
          ans += mp.get(find);
      }
      // If the map doesn't contain the current sum, set its frequency to 0
      if (!mp.has(sum)) {
          mp.set(sum, 0);
      }
      // Increment the frequency of the current sum in the map
      mp.set(sum, mp.get(sum) + 1);
  }

  return ans;
};


//this code fails for some arrays
//like arr= [1], k=0; similar cases can be made

// var subarraySum = function(arr, k) {
//   let i = 0, j = 0;
// let sum = 0, count = 0;
// while (j < arr.length) {
//   sum += arr[j];
//   if (sum < k) {
//       j++;
//   } else if (sum === k) {
//       count++;
//       j++;
//   } else {
//       while (sum > k) {
//           sum -= arr[i];
//           i++;
//       }
//       if (sum === k) {
//           count++;
//       }
//       j++;
//   }
// }
// return count;

// };
