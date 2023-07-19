// link => https://leetcode.com/problems/single-number/


//brute force 

//#method 1

// use map and calulate frquency==1
// return that number (n) space(n)

// #method 2

// sort the array and check id two adjacent elements are equal
//if not equal return that number;
// ex - 1,1,2,2,3,4,4; (nlogn) space(1)



//optimal
// take xor of all

var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
          xor ^= nums[i];
  }
console.log(xor);
};

let nums = [4,1,2,1,2]
singleNumber(nums)