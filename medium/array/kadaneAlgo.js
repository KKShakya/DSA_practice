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
  //these two can help to print the actual subraray with maxSum;
  let left  =0,right=0;
  let currSum = 0,maxSum = -10000;
  for(let i=0;i<n;i++){
    currSum += arr[i]
    if(currSum>maxSum){
      maxSum = currSum;
      right = i;
    }
    if(currSum<0){
      currSum = 0;
      left = i+1
    }
  }
console.log('the Subarray that has maxSum : ',arr.slice(left,right+1));
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