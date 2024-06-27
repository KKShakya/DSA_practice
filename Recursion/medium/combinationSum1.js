// link=>


var combinationSum = function(candidates, target) {
  let ans = [];
  let n = candidates.length;
  helper(0, n, candidates, target, ans, 0, []);
  return ans;
};

const helper = (idx, n, candidates, target, ans, sum, comb) => {
  // If the sum exceeds the target, we return early to avoid unnecessary computations
  if (sum > target) {
      return;
  }

  // If the sum equals the target, we found a valid combination
  if (sum === target) {
      ans.push([...comb]);
      return;
  }

  // Base case: if we reach the end of the candidates array
  if (idx === n) {
      return;
  }

  // Include the current candidate only if it does not exceed the target

   //we can take any element nay number of time
      comb.push(candidates[idx]);
      helper(idx, n, candidates, target, ans, sum + candidates[idx], comb);
      comb.pop();
  
  //  ***** but once our sum crosses the target with pick element *******
   // ***** we move to other element ********

  // Exclude the current candidate and move to the next
  helper(idx + 1, n, candidates, target, ans, sum, comb);
};

// Example usage:
const candidates = [2, 3, 6, 7];
const target = 7;
const result = combinationSum(candidates, target);
console.log(result);  // Output: [[2, 2, 3], [7]]
