// link => https://leetcode.com/problems/max-consecutive-ones/description/


//simple method

function maxConsecutiveOnes(nums){
  let count_one = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
      if(nums[i]==0){
          count_one = 0;
      }else{
          count_one++; 
          max = max<=count_one?count_one:max;
      }
  }

  console.log(max);
}

let nums = [1,1,0,1,1,1];
maxConsecutiveOnes(nums)