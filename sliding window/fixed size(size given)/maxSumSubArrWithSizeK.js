// link=>https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=bottom_sticky_on_article
// Intution:

// Start with two pointers, i (left) and j (right), both initialized to the start of the array.
// Maintain a windowSum to keep track of the sum of elements within the window.
// Expanding the Window:

// Increment j to expand the window by including more elements until the window size reaches k.
// Specifically, keep increasing j until the condition j - i + 1 is equal to k.
// Maintaining the Window:

// Once the window size is k, calculate the sum of the current window and update the maxSum if the current window sum is greater.
// Then slide the window to the right by:
// Subtracting the element at the i-th position (leftmost element) from windowSum.
// Incrementing i to effectively remove the leftmost element from the window.
// Incrementing j to add the next element to the window.



const  fixedSlidingWindow = (arr,givenSize) =>{
  let n = arr.length;
  let maxSum = 0;
  let sum = 0; // Initialize sum with the first element of arr
  let i = 0, j = 0; // Initialize two pointers

  // Iterate through the array using a sliding window approach
  while (j < n) {
    sum += arr[j];
   
    //keep increasing the window till we hit window size
    if(j-i+1<givenSize){
      j++;
    }
    // once hit update max Sum and decrease sum with leftmost item and maintain window size i++,j++;
    if (j-i+1 == givenSize) {
      maxSum = Math.max(maxSum, sum);
      sum -= arr[i];
      i++;
      j++;
    }
  }

  console.log(maxSum, "from sliding window"); // Output the maximum length
}

const arr = [2, 3, 5, 1, 9]
const k = 3



fixedSlidingWindow(arr, k)


// maxSumSubArrWithSizeK.js

