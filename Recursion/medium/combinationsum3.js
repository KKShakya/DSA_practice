// link=>https://leetcode.com/problems/combination-sum-iii/description/



var combinationSum3 = function(k, n) {
  let ans = [];
 //k is length of the answers array
   helper(1, n,k, ans, 0, []);
   return ans;
};

const helper = (idx, target,k, ans, sum, comb) => {
   if (sum > target) return;

   //only of sepeicfic size k
   if (sum === target && comb.length==k) {
       ans.push([...comb]);
       return;
   }

 // range is now 1 to 9
   for (let i = idx; i <= 9; i++) {
   
   
       comb.push(i);
       helper(i + 1, target,k, ans, sum + i, comb);
       comb.pop();  
   }
};


const k = 3;
const target = 9;
const result = combinationSum3(k, target);
console.log(result);  // Output: [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
