// link+>https://leetcode.com/problems/combination-sum-ii/description/

var combinationSum2 = function(candidates, target) {
  let ans = [];
  candidates.sort((a, b) => a - b);  // Sort to handle duplicates
  helper(0, candidates, target, ans, 0, []);
  return ans;
};

const helper = (idx, candidates, target, ans, sum, comb) => {
  // If the sum exceeds the target, return early
  if (sum > target) return;

  // If the sum equals the target, add the current combination to the result
  if (sum === target) {
      ans.push([...comb]);
      return;
  }

  // Iterate over the candidates starting from idx
  for (let i = idx; i < candidates.length; i++) {
      // Skip duplicates
      if (i > idx && candidates[i] === candidates[i - 1]) {
          continue;
      }

      // Include the current candidate
      comb.push(candidates[i]);
      helper(i + 1, candidates, target, ans, sum + candidates[i], comb);
      comb.pop();  // Backtrack
  }
};

// Example usage:
const candidates = [10, 1, 2, 7, 6, 1, 5];
const target = 8;
const result = combinationSum2(candidates, target);
console.log(result);  // Output: [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]
