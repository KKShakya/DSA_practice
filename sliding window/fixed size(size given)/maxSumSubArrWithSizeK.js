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