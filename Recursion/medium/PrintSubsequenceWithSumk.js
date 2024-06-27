

// 1.  print all subsequence method
function isSubsetPrintAll(n, k, arr) {
  // Memoization map
  const memo = new Map();
  helper1(0, n, k, arr, 0, memo, '');
}

function helper1(idx, n, target, arr, sum, memo, ans) {
  // Base case
  if (idx === n) {
    if (sum == target) {
      console.log(ans);
    }
    return;
  }

  // Memoization key
  const key = `${idx},${sum}`;

  // Check if the result is already computed
  // if (memo.has(key)) {
  //     return memo.get(key);
  // }

  // Recursive case: include or exclude the current element
  helper1(idx + 1, n, target, arr, sum + arr[idx], memo, ans + arr[idx] + " ");
  helper1(idx + 1, n, target, arr, sum, memo, ans);



}

console.log("Print all subsets")
let arr = [1, 2, 3, 4, 5];
let target = 9;
isSubsetPrintAll(arr.length, target, arr);

// isSubsetPrintAll(arr.length,k,arr)



//2. only print one subseuence

//in this you can  pass the datastructure to store the answer and print at  base case sum==target.
// or pass a string
function isSubsetPresent(n, k, arr) {
  // Memoization map
  const memo = new Map();
  return helper(0, n, k, arr, 0, memo, '');
}

function helper(idx, n, target, arr, sum, memo, ans) {
  // Base case
  if (idx === n) {
    if (sum == target) {
      console.log(ans);
      return true;
    }
    return false
  }

  // Memoization key
  const key = `${idx},${sum}`;

  // Check if the result is already computed
  if (memo.has(key)) {
    return memo.get(key);
  }

  // Recursive case: include or exclude the current element
  if (helper(idx + 1, n, target, arr, sum + arr[idx], memo, ans + arr[idx] + " ") == true) {
    return true;
  }
  if (helper(idx + 1, n, target, arr, sum, memo, ans) == true) {
    return true;
  }



  return false;
}

// Example usage:
arr = [1, 2, 3, 4, 5];
target = 9;
console.log("IS subset present");  // Output: true
result = isSubsetPresent(arr.length, target, arr);
console.log(result);  // Output: true
