//  find maximum of a subarray sum;

// brute 
function maxSubarraySum(arr, n) {
  let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

  for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
          // subarray = arr[i.....j]
          let sum = 0;

          //add all the elements of subarray:
          for (let k = i; k <= j; k++) {
              sum += arr[k];
          }

          maxi = Math.max(maxi, sum);
      }
  }

  return maxi;
}



// better  not using  third loop for sum instead we get it from the second llopp

function maxSubarraySumBetter(arr, n) {
  let maxi = Number.MIN_SAFE_INTEGER; // maximum sum

  for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = i; j < n; j++) {
          // current subarray = arr[i.....j]

          //add the current element arr[j]
          // to the sum i.e. sum of arr[i...j-1]
          sum += arr[j];

          maxi = Math.max(maxi, sum); // getting the maximum
      }
  }

  return maxi;
}

// third is to keep the currSum and maxSum in check
// if currsum>max Sum we update maxSum 
// else if currSum <0 we say currSum = 0;
// as getting a negative currSum will not get as near to the maximum sum of the Array;
const maxSubarraySumOptimal = (arr,n)=>{
  const maxSubarraySumOptimal = (arr, n) => {
    // Initialize variables to keep track of the subarray with the maximum sum
    let left = 0; // Start index of the subarray
    let right = 0; // End index of the subarray
  
    let currSum = 0; // Current sum of the subarray
    let maxSum = -10000; // Maximum sum found so far, initialized with a very small value
  
    // Iterate through the array
    for (let i = 0; i < n; i++) {
      // Add the current element to the current sum
      currSum += arr[i];
  
      // Update the maximum sum and the corresponding subarray indices if the current sum is greater than the maximum sum
      if (currSum > maxSum) {
        maxSum = currSum;
        right = i; // Update the end index of the subarray
      }
  
      // If the current sum becomes negative, reset it to 0 and move the left pointer to the next index
      if (currSum < 0) {
        currSum = 0;
        left = i + 1; // Update the start index of the subarray
      }
    }
  
    // Output the subarray with the maximum sum
    console.log('The subarray that has the maximum sum:', arr.slice(left, right + 1));
  
    // Return the maximum sum of the subarray
    return maxSum;
}


const arr = [ -2, 1, -3, 4, -1, 2, 1, -5, 4];
const n = arr.length;
const maxSum = maxSubarraySum(arr, n);
console.log(`The maximum subarray sum brute : ${maxSum}`);
const maxSumBetter = maxSubarraySumBetter(arr, n);
console.log(`The maximum subarray sum Better: ${maxSumBetter}`);
const maxSumOptimal = maxSubarraySumOptimal(arr, n);
console.log(`The maximum subarray sum Better: ${maxSumOptimal}`);