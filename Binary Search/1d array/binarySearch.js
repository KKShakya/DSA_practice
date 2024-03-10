//link => 


//something is in sorted manner ex - 1,2,3,4,5,6,7,8,
//target =  6;
// if you no is is sorted find its middle and see if we hav any luck and found 
//target in an array if not see it lies in left of the mid or right of the mid;
//we will search in that part only, this way binary divides array in two halves
// so complexity comes out to be O(nlogn);



var BinarySearch = function(nums, target) {
  let lo = 0,hi=nums.length-1;
   while(lo<=hi)
   {
       let mid = lo+(hi-lo)/2 | 0;
       if(nums[mid] === target) return mid;
       else if(nums[mid]>target) hi = mid-1;
       else lo = mid+1;
   }
   return -1;
};


const arr = [10,20,25,31,46,52,64,67,70];
const target = 46;

console.log('index of target = ',BinarySearch(arr,target))