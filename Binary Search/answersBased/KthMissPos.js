
//brute force

// for loop keep a cnt =1,
//shifting k

// ex arr = [2,3,4,7,11] , k=5, ideally arr=[1,2,3,4,5,6,7,8,9,10,11]
// before 2,3,4, one is missing,
//beofre ,7 , 3 aremisiing (1,5,6)
//beofre ,11 , 6 aremisiing (1,5,6,8,9,10), so we get the 5th missing, byshifyting k
//  2<=5, k+=1 =6,
//  3<=6, k+=1 = 7,
//  4<= 7, k+=1 = 8
//  7<= 8, k+=1 = 9
//  11>9, k=9, is the naswer

function missingKBrute(arr, n, k) {
  for (let i = 0; i < n; i++) {
      if (arr[i] <= k) k++; // shifting k.
      else break;
  }
  return k;
}


//optimal 
// We are going to use the Binary Search algorithm to optimize the approach.

// The primary objective of the Binary Search algorithm is to efficiently determine the appropriate half to eliminate, thereby reducing the search space by half. It does this by determining a specific condition that ensures that the target is not present in that half.

// We cannot apply binary search on the answer space here as we cannot assure which missing number has the possibility of being the kth missing number. That is why, we will do something different here. We will try to find the closest neighbors (i.e. Present in the array) for the kth missing number by counting the number of missing numbers for each element in the given array.

// Let’s understand it using an example. Assume the given array is {2, 3, 4, 7, 11}. Now, if no numbers were missing the given array would look like {1, 2, 3, 4, 5}. Comparing these 2 arrays, we can conclude the following:

// Up to index 0: Only 1 number i.e. 1 is missing in the given array.
// Up to index 1: Only 1 number i.e. 1 is missing in the given array.
// Up to index 2: Only 1 number i.e. 1 is missing in the given array.
// Up to index 3: 3 numbers i.e. 1, 5, and 6 are missing.
// Up to index 4: 6 numbers i.e. 1, 5, 6, 8, 9, and 10 are missing.
// For a given value of k as 5, we can determine that the answer falls within the range of 7 to 11. Since there are only 3 missing numbers up to index 3, the 5th missing number cannot be before vec[3], which is 7. Therefore, it must be located somewhere to the right of 7. Our actual answer i.e. 9 also supports this theory. So, by following this process we can find the closest neighbors (i.e. Present in the array) for the kth missing number. In our example, the closest neighbors of the 5th missing number are 7 and 11.

// How to calculate the number of missing numbers for any index i?

// From the above example, we can derive a formula to find the number of missing numbers before any array index, i. The formula is
// Number of missing numbers up to index i = vec[i] - (i+1).
// The given array, vec, is currently containing the number vec[i] whereas it should contain (i+1) if no numbers were missing. The difference between the current and the ideal element will give the result.

// How to apply Binary Search?

// We will apply binary search on the indices of the given array. For each index, we will calculate the number of missing numbers and based on it, we will try to eliminate the halves.

// How we will get the answer after all these steps?

// After completing the binary search on the indices, the pointer high will point to the closest neighbor(present in the array) that is smaller than the kth missing number. 

// So, in the given array, the preceding neighbor of the kth missing number is vec[high]. 
// Now, we know, up to index ‘high’,
// the number of missing numbers = vec[high] - (high+1).
// But we want to go further and find the kth number. To extend our objective, we aim to find the kth number in the sequence. In order to determine the number of additional missing values required to reach the kth position, we can calculate this as
// more_missing_numbers = k - (vec[high] - (high+1)).
// Now, we will simply add more_missing_numbers to the preceding neighbor i.e. vec[high] to get the kth missing number.
// kth missing number = vec[high] + k - (vec[high] - (high+1))
//         =  vec[high] + k - vec[high] + high + 1
//         = k + high + 1.
// or we can say since low = high+1, so k+low is the answer

function missingKOPtimal(vec, n, k) {
  let low = 0, high = n - 1;
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      let missing = vec[mid] - (mid + 1);
      if (missing < k) {
          low = mid + 1;
      }
      else {
          high = mid - 1;
      }
  }
  return k + high + 1;
}

let vec = [4, 7, 9, 10];
let n = 4, k = 4;
let ans = missingKOPtimal(vec, n, k);
console.log("The missing number is:", ans);