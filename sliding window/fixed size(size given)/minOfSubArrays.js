/**
 * Function to find the minimum element in each subarray of length K in an array.
 * @param {number[]} arr - The input array.
 * @param {number} n - The length of the input array.
 * @param {number} k - The length of subarrays.
 * @return {number[]} - An array containing the minimum element in each subarray.
 */
 function min_of_subarrays(arr, n, k) {
  // Initialize two pointers, one for the start of the window and one for the end.
  let i = 0;
  let j = 0;
  // Initialize an array to store the minimum elements of each subarray.
  let minArr = [];
  // Initialize an array to store the final result.
  let ans = [];

  // Sliding window approach.
  while (j < n) {
      // Keep removing elements from the end of minArr if they are geater than the current element.
      while (minArr.length && minArr[minArr.length - 1] > arr[j]) {
          minArr.pop();
      }
      // Add the current element to minArr.
      minArr.push(arr[j]);

      // Move the right pointer j if the window size is less than K.
      if (j - i + 1 < k) {
          j++;
      }
      // If the window size equals K:
      else if (j - i + 1 === k) {
          // Add the minimum element of the current window to the result array.
          ans.push(minArr[0]);
          // If the minimum element is the element going out of the window, remove it from minArr.
          if (minArr[0] === arr[i]) {
              minArr.shift();
          }
          // Move both pointers to slide the window.
          i++;
          j++;
      }
  }

  // Return the array containing the minimum elements of each subarray.
  console.log( ans);
}

const arr = [1,3,-3,1,2,5,6,7];
const k = 3;


min_of_subarrays(arr,arr.length,k)
