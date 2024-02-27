/**
 * Function to find the maximum element in each subarray of length K in an array.
 * @param {number[]} arr - The input array.
 * @param {number} n - The length of the input array.
 * @param {number} k - The length of subarrays.
 * @return {number[]} - An array containing the maximum element in each subarray.
 */
 function max_of_subarrays(arr, n, k) {
  // Initialize two pointers, one for the start of the window and one for the end.
  let i = 0;
  let j = 0;
  // Initialize an array to store the maximum elements of each subarray.
  let maxArr = [];
  // Initialize an array to store the final result.
  let ans = [];

  // Sliding window approach.
  while (j < n) {
      // Keep removing elements from the end of maxArr if they are less than the current element.
      while (maxArr.length && maxArr[maxArr.length - 1] < arr[j]) {
          maxArr.pop();
      }
      // Add the current element to maxArr.
      maxArr.push(arr[j]);

      // Move the right pointer j if the window size is less than K.
      if (j - i + 1 < k) {
          j++;
      }
      // If the window size equals K:
      else if (j - i + 1 === k) {
          // Add the maximum element of the current window to the result array.
          ans.push(maxArr[0]);
          // If the maximum element is the element going out of the window, remove it from maxArr.
          if (maxArr[0] === arr[i]) {
              maxArr.shift();
          }
          // Move both pointers to slide the window.
          i++;
          j++;
      }
  }

  // Return the array containing the maximum elements of each subarray.
  console.log( ans);
}

const arr = [1,3,-3,1,2,5,6,7];
const k = 3;

//Note the same can be done using first negative approach just push 
// last ele of maxArray, but it will fail for arr,  1,3,-3,1,0,5,6,7
// try it. 
max_of_subarrays(arr,arr.length,k)
