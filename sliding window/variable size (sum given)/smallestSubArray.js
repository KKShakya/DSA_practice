const variableSlidingWindow = (arr, givenSum) => {

  let n = arr.length;
  let minLen = Infinity;
  let sum = 0; // Initialize sum with the first element of arr
  let i = 0, j = 0; // Initialize two pointers

  // Iterate through the array using a sliding window approach
  while (j < n) {
    sum += arr[j];
  
  
    
    // If the sum exceeds the givenSum, move i to the next element and subtract it from the sum
  
      while (sum >= givenSum) {
        sum -= arr[i];
        minLen = Math.min(minLen, j - i+1);
        i++;
      }
    
    //increase j every time
    j++;
  }

  console.log(minLen == Infinity? 0 : minLen)
}


const arr = [1,2,1,1,1,5,6]
const negativeArr = [2, 0, 0, 0, 4]
const k = 3


variableSlidingWindow(arr,k);