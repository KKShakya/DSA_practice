//genrating all subaarays and then getting hteir sum
// TC = O(n^3);
const generateAllSubArrays = (arr, givenSum) => {

  let n = arr.length;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    //this loop generates all subarrays
    for (let j = i; j < n; j++) {
      let sum = 0;
      //this loop calculates the sum of all subarrays from i to j
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }

      if (sum == givenSum) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  console.log(maxLen, "fromThreeLoops");

}


//method 2
// not going for third loop caluclate while building the subarrays
//TC = O(n^2)

const generateAllSubArraysTwoLoops = (arr, givenSum) => {

  let n = arr.length;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    //this loop generates all subarrays
    let sum = 0;
    for (let j = i; j < n; j++) {

      sum += arr[j];


      if (sum == givenSum) {
        maxLen = Math.max(maxLen, j - i + 1);
      }
    }
  }
  console.log(maxLen, "fromTwoLoops");

}


// method 3 using hashmap
// calculating presfix summ and then updating hashmap
// it can also work for negative and zero values
const hasMapSubarrays = (arr, givenSum) => {
  let n = arr.length; // size of the array

  let preSumMap = new Map();
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    // calculate the prefix sum till index i
    sum += arr[i];

    // if the sum = k, update the maxLen
    if (sum === givenSum) {
      maxLen = Math.max(maxLen, i + 1);
    }

    // calculate the sum of remaining part i.e. x - k
    let rem = sum - givenSum;

    // calculate the length and update maxLen
    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem);
      maxLen = Math.max(maxLen, len);
    }

    // update the map checking the conditions
    if (!preSumMap.has(sum)) {
      preSumMap.set(sum, i);
    }
  }

  console.log(maxLen, 'from hashMap');
}

//method 4 sliding window
//1.  it says go till last of the array and keep adding element to sum
//2. if sum <givenSum do j++;
//3. if sum == givenSum got our probable answer update maxLen and do j++;
//4. if sum > givenSum breached the condition so decrease sum till sum <= givenSum
// i.e. sum -= arr[i] i++;


const variableSlidingWindow = (arr, givenSum) => {

  let n = arr.length;
  let maxLen = 0;
  let sum = 0; // Initialize sum with the first element of arr
  let i = 0, j = 0; // Initialize two pointers

  // Iterate through the array using a sliding window approach
  while (j < n) {
    sum += arr[j];
    // we are doing this uneccessarily
    // if (sum < givenSum) {
    //   // If the sum is less than the givenSum, move j to the next element and add it to the sum
    //   j++;
    // } 

    // If the sum less/equals the givenSum, update maxLen and adjust the window
    if (sum <= givenSum) {
      maxLen = Math.max(maxLen, j - i + 1);
    }

    // If the sum exceeds the givenSum, move i to the next element and subtract it from the sum
    else if (sum > givenSum) {
      while (sum > givenSum) {
        sum -= arr[i];
        i++;
      }
    }
    //increase j every time
    j++;
  }

  console.log(maxLen, "from sliding window"); // Output the maximum length
}


const arr = [2, 3, 5, 1, 9]
const negativeArr = [2, 0, 0, 0, 4]
const k = 10


generateAllSubArrays(arr, k);
generateAllSubArraysTwoLoops(arr, k);
hasMapSubarrays(negativeArr, 4);
variableSlidingWindow(arr, k)

// largestSubArrWithSumK.js