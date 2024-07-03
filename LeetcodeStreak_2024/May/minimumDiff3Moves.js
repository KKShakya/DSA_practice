// link=> https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/description/

//to solve this We have 4 plans:

// 1.  kill 3 biggest elements
// 2. kill 2 biggest elements + 1 smallest elements
// 3. kill 1 biggest elements + 2 smallest elements
// 4. kill 3 smallest elements
//   [1,5,6,13,14,15,16,17]
// 1 -approach
  //  kill last three, update with n-4, [1,5,6,13,14,14,14,14] ,last three
  // possible_ans   = arr[n-4]- arr[0] = 14-1 = 13;

// 2  -approach
  //  kill last 2 + 1 first, update with n-3, [5,5,6,13,14,15,15,15] ,last three
  // possible_ans   = arr[n-3]- arr[1] = 15-5 = 10;

  // 3  -approach
  //  kill first 2 + 1 last, update with n-2, [6,6,6,13,14,15,16,16] ,last three
  // possible_ans   = arr[n-2]- arr[2] = 16-6 = 10;
  
  // 4  -approach
  //  kill first 3, update with n-1, [13,13,13,13,14,14,16,17] ,last three
  // possible_ans   = arr[n-1]- arr[3] = 17-13 = 4;



var minDifference = function(nums) {
  let n =nums.length;
  if(nums.length<5) return 0;
   nums.sort((a,b)=>a-b);
   let res = Infinity;
//   for (let i = 0; i < 4; ++i) {
//           res = Math.min(res, nums[n - 4 + i] - nums[i]);
//       }
//  return res;

let case1 = nums[n-4] - nums[0];
let case2 = nums[n-3] - nums[1];
let case3 = nums[n-2] - nums[2];
let case4 = nums[n-1] - nums[3];

    return Math.min(case1, case2, case3, case4);

};

