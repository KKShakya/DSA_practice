// recursionPatterns.js

// 1. Factorial
// Intuition: Factorial of n (n!) is the product of all positive integers less than or equal to n.
// Steps:
// 1. Base Case: If n is 0, return 1 (0! is 1).
// 2. Recursive Case: Return n * factorial(n - 1).

/**
 * Calculates the factorial of a number.
 * @param {number} n
 * @return {number} Factorial of n
 */
 function factorial(n) {
  if (n === 0) {
      return 1;
  }
  return n * factorial(n - 1);
}

// 2. Fibonacci Sequence
// Intuition: Fibonacci sequence is defined as F(n) = F(n-1) + F(n-2) with base cases F(0) = 0 and F(1) = 1.
// Steps:
// 1. Base Case: If n is 0, return 0; if n is 1, return 1.
// 2. Recursive Case: Return fibonacci(n - 1) + fibonacci(n - 2).

/**
* Calculates the nth Fibonacci number.
* @param {number} n
* @return {number} nth Fibonacci number
*/
function fibonacci(n) {
  if (n <= 1) {
      return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 3. Sum of Array
// Intuition: Sum of an array can be found by adding the first element to the sum of the rest of the array.
// Steps:
// 1. Base Case: If array is empty, return 0.
// 2. Recursive Case: Return arr[0] + sumArray(arr.slice(1)).

/**
* Calculates the sum of an array of numbers.
* @param {number[]} arr
* @return {number} Sum of array elements
*/
function sumArray(arr) {
  if (arr.length === 0) {
      return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

// 4. Power Calculation (x^n)
// Intuition: Power x^n can be calculated by multiplying x by itself n times.
// Steps:
// 1. Base Case: If n is 0, return 1.
// 2. Recursive Case: Return x * power(x, n - 1).

/**
* Calculates x raised to the power of n.
* @param {number} x
* @param {number} n
* @return {number} x^n
*/
function power(x, n) {
  if (n === 0) {
      return 1;
  }
  return x * power(x, n - 1);
}

// 5. Permutations of a String
// Intuition: To find permutations of a string, fix one character and find permutations of the remaining string.
// Steps:
// 1. Base Case: If string is empty, return [""].
// 2. Recursive Case: For each character, fix it and find permutations of the remaining string.

/**
* Generates all permutations of a string.
* @param {string} str
* @return {string[]} Array of permutations
*/
function permutations(str) {
  if (str.length === 0) {
      return [""];
  }
  let result = [];
  for (let i = 0; i < str.length; i++) {
      let rest = str.slice(0, i) + str.slice(i + 1);
      for (let perm of permutations(rest)) {
          result.push(str[i] + perm);
      }
  }
  return result;
}

// 6. Combination Sum
// Intuition: To find combinations that sum up to a target, recursively subtract the current number from the target and continue.
// Steps:
// 1. Base Case: If target is 0, return [[]]; if target is negative, return [].
// 2. Recursive Case: Include the number and recurse, and exclude the number and recurse.

/**
* Finds all unique combinations in candidates that sum up to the target.
* @param {number[]} candidates
* @param {number} target
* @return {number[][]} Combinations that sum to target
*/
function combinationSum(candidates, target) {
  function backtrack(start, target, current, result) {
      if (target === 0) {
          result.push([...current]);
          return;
      }
      if (target < 0) {
          return;
      }
      for (let i = start; i < candidates.length; i++) {
          current.push(candidates[i]);
          backtrack(i, target - candidates[i], current, result);
          current.pop();
      }
  }

  let result = [];
  backtrack(0, target, [], result);
  return result;
}

// 7. Binary Search
// Intuition: To find an element in a sorted array, repeatedly divide the search interval in half.
// Steps:
// 1. Base Case: If low > high, return -1 (not found).
// 2. Recursive Case: Calculate mid, compare target with arr[mid], and recurse on the appropriate half.

/**
* Performs binary search on a sorted array.
* @param {number[]} arr
* @param {number} target
* @param {number} low
* @param {number} high
* @return {number} Index of target or -1 if not found
*/
function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
      return -1;
  }
  let mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) {
      return mid;
  } else if (arr[mid] < target) {
      return binarySearch(arr, target, mid + 1, high);
  } else {
      return binarySearch(arr, target, low, mid - 1);
  }
}

// 8. Subset Sum
// Intuition: To find all subsets that sum to a target, recursively consider including or excluding each element.
// Steps:
// 1. Base Case: If target is 0, return [[]]; if target is negative or no elements left, return [].
// 2. Recursive Case: Include the current element and recurse, and exclude the current element and recurse.

/**
* Finds all subsets that sum to the target.
* @param {number[]} nums
* @param {number} target
* @return {number[][]} Subsets that sum to target
*/
function subsetSum(nums, target) {
  function backtrack(start, target, current, result) {
      if (target === 0) {
          result.push([...current]);
          return;
      }
      if (target < 0 || start === nums.length) {
          return;
      }
      current.push(nums[start]);
      backtrack(start + 1, target - nums[start], current, result);
      current.pop();
      backtrack(start + 1, target, current, result);
  }

  let result = [];
  backtrack(0, target, [], result);
  return result;
}

// 9. Valid Parentheses Generation
// Intuition: To generate valid parentheses, maintain the count of open and close parentheses and ensure close parentheses do not exceed open ones.
// Steps:
// 1. Base Case: If both open and close counts are 0, add the current combination to the result.
// 2. Recursive Case: Add open parenthesis if count is positive, and add close parenthesis if it doesn't exceed open count.

/**
* Generates all combinations of n pairs of valid parentheses.
* @param {number} n
* @return {string[]} Array of valid parentheses combinations
*/
function generateParentheses(n) {
  function backtrack(open, close, current, result) {
      if (open === 0 && close === 0) {
          result.push(current);
          return;
      }
      if (open > 0) {
          backtrack(open - 1, close, current + "(", result);
      }
      if (close > open) {
          backtrack(open, close - 1, current + ")", result);
      }
  }

  let result = [];
  backtrack(n, n, "", result);
  return result;
}

module.exports = {
  factorial,
  fibonacci,
  sumArray,
  power,
  permutations,
  combinationSum,
  binarySearch,
  subsetSum,
  generateParentheses
};
