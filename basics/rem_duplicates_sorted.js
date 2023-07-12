// link => https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

//brute force use extra space and have a uinque array from set
// put elements from unique to arr
function removeDuplicates(arr) {
  let set = new Set(arr);
  let uniqueArr = Array.from(set);
  for (let i = 0; i < uniqueArr.length; i++) {
    arr[i] = uniqueArr[i];
  }
  return uniqueArr.length;
}


// optimal approcah

// move a variable j whenver you get a unique value that way you can say 
// you have unique array length

var removeDuplicates = function(nums) {
  let j = 0;
    
     for(let i = 1; i<nums.length; i++)
     {
         if(nums[i]!=nums[i - 1])
         {
              j++;
             nums[j] = nums[i];
            
         }
     }
     console.log(nums);
 return j+1;
};