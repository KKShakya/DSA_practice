
// simple O(n) linear search;

function firstAndLastPosition(arr, k) {
  let first = -1, last = -1;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
      if (arr[i] === k) {
        //updating first only when we get it first time 
        // and for the time first value will -1 so a check;
          if (first === -1) first = i;
          last = i;
      }
  }
  return [first, last];
}


//using upper bound and lower bound;
// same code 

// binary search 
// as we know that 
// first is something that can be probalble answer of arr[mid]== target, 
// so inthis case also we will move left

var First = function(nums, target) {
  let lo = 0,hi=nums.length-1;
   while(lo<=hi)
   {
       let mid = lo+(hi-lo)/2 | 0;
       if(nums[mid] === target) {
        ans = mid;
        //moving to left part to find its first;
         hi  = mid-1;
       }
       else if(nums[mid]>target) hi = mid-1;
       else lo = mid+1;
   }
   return ans;
};




// last is something that can be probalble answer of arr[mid]== target, but on the right 
// so we move tot right;

var Last = function(nums, target) {
  let lo = 0,hi=nums.length-1;
  let ans = -1;
   while(lo<=hi)
   {
       let mid = lo+(hi-lo)/2 | 0;
       if(nums[mid] === target) {
         ans = mid;
         //moving to right part to find its last
         lo = mid+1
       }
       else if(nums[mid]>target) hi = mid-1;
       else lo = mid+1;
   }
   return ans;
};


const arr  = [2, 4, 6, 8, 8, 8, 11, 13];
const target = 8;


console.log(firstAndLastPosition(arr,target))
console.log("first = ",First(arr,target))
console.log("last = ",Last(arr,target))