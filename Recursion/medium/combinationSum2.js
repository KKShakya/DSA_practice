// link+>https://leetcode.com/problems/combination-sum-ii/description/

var combinationSum2 = function(candidates, target) {
  let ans = [];
  candidates.sort((a, b) => a - b);  // Sort to handle duplicates
  helper(0, candidates, target, ans, 0, []);
  return ans;
};

const helper = (idx, candidates, target, ans, sum, comb) => {


  // If the sum equals the target, add the current combination to the result
  if (sum === target) {
      ans.push([...comb]);
      return;
  }

  // Iterate over the candidates starting from idx
  for (let i = idx; i < candidates.length; i++) {
      // Skip duplicates
      // we are making calls thorugh loop so basically
      // if something is duplicate but it is the first eleent to be picked up, from staring idx
      //we need that, but same appears after first pick we will not take it, 
      // ex [1,1,1,2], idx= 0, i=0; we need 1,but if idx=0,and i=1||2, do we need one again in our solution no;
      if (i > idx && candidates[i] === candidates[i - 1]) {
          continue;
      }
     if(sum + candidates[i]>target) break;
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
