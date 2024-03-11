//this is so simple just 
// you know the array is sorted that means all the duplicates of target
// are in some range between lo and hi;
// ex - [1,2,2,2,2,3,4,5,6];
// the target = 2 is from lo = 1,hi = 4; So we get count = hi-lo+1;


// you can see lo is first occurence and hi is last ocuurence

// simply you can do as
const countOcuurence = (arr,target)=>{
let cnt = 0;
  for(let i=0;i<arr.length;i++) { 
    if(arr[i]==target) cnt++;
  }
console.log(cnt);
}



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

const hi = Last(arr,target);
const lo = First(arr,target);

console.log("Occurences count = ",hi-lo+1 )