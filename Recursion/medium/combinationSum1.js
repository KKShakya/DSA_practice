// link=>


//so combiantion say you can take duplicates to make all posisble combinjtaions;
// so that means we can take ane element as many times we can still we reach the terget or the endof array
// so to take somethign multiple times we need to reamin at its posiiton (index), so we don't increase the idx;
// so it may reach the end if target not hit, yes but suppose target = 4, and you have array of length, 4 = [3,4,1,6];
// it will keep on piling, 3 till tou reach end or hit the target. but target never hits with ar[i] = 3, so we say that sum>target return;
// that means end  the call and move to next index;





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



//if you dont want the sum, and want to access only target then
//make only releavnt cals


var combinationSum2 = function(candidates, target) {
  let ans = [];
  let n = candidates.length;
  helper2(0, n, candidates, target, ans, []);
  return ans;
};

const helper2 = (idx, n, candidates, target, ans, comb) => {
  // If the sum exceeds the target, we return early to avoid unnecessary computations
  // if (sum > target) {
  //     return;
  // }

  // If the sum equals the target, we found a valid combination
  if (target==0) {
      ans.push([...comb]);
      return;
  }

  // Base case: if we reach the end of the candidates array
  if (idx === n) {
      return;
  }

  // Include the current candidate only if it does not exceed the target

   //we can take any element nay number of time
   //if you not reached the target
      if(target>0){
        comb.push(candidates[idx]);
      helper2(idx, n, candidates, target-candidates[idx], ans, comb);
      comb.pop();
  
      }
  //  ***** but once our sum crosses the target with pick element *******
   // ***** we move to other element ********

  // Exclude the current candidate and move to the next
  helper2(idx + 1, n, candidates, target, ans, comb);
};

const result2 = combinationSum(candidates, target);
console.log("result2",result2);  // Output: [[2, 2, 3], [7]]