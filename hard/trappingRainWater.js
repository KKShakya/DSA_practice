// link=>https://leetcode.com/problems/trapping-rain-water/description/

// simple with O(n)space and O(n) time

// what we can say is water is trapped only when, there is a dapce in two boundaries
// as well we can say max water it can hold is the minimum of the two boundaries
// ex  tower1  = 2, tower2 = 4, how much eater they can hold together in between 4-2 = 2 units;
// An element of the array can store water if there are higher bars on the left and the right. 
//so we stoer max from both sides
 


var trap = function(arr) {
      let left = [],right=[];
      left[0] = arr[0];
      let n = arr.length;

      for(let i=1;i<n;i++)
      {
        //always storing the max from the left
         left[i] = Math.max(left[i-1],arr[i]);
      }
      
      right[n-1] = arr[n-1];
      for(let i=n-2;i>=0;i--)
      {
        //storing the max fromt the rigth;
        right[i] = Math.max(right[i+1],arr[i])
      }
      
let water = 0;
      for(let i=0;i<n;i++)
      {
        //adding miminum of the two boundaries
        water += Math.min(left[i], right[i]) - arr[i];
          
      }
      return water;
};
// left = 0,1,1,2,2,2,2,3,3,3,3,3,3
//right = 3,3,3,3,3,3,3,3,3,2,2,2,1
const height = [0,1,0,2,1,0,1,3,2,1,2,1];

console.log(trap(height))


// optimal eith O(1) sapce

var trapOptimal = function(height) {
  let left = 0;
   let right = 0;
   let low = 0;
   let high = height.length - 1;
   let ans = 0;
   while(low < high){
       left = Math.max(left,height[low]);
       right = Math.max(right, height[high]);
       if(left < right){
           ans += left - height[low];
           low++;
       }else{
           ans += right - height[high];
           high--;
       }
   }
   return ans;
};

