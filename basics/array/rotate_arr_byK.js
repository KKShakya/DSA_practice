// Link => https://leetcode.com/problems/rotate-array/solutions/


//brute force 
//shift by one place in a new arr

function solve(arr, n) {
  let temp = new Array(n);
  for (let i = 1; i < n; i++) {
    temp[i - 1] = arr[i];
  }
  //last element shift 
  temp[n - 1] = arr[0];
  
  console.log(temp);
}

let n = 5;
let arr = [1, 2, 3, 4, 5];
solve(arr, n);


//optimal approach
//inplace just storing the first element


function solve(arr, n) {
  let temp = arr[0]; // storing the first element of the array in a variable
  for (let i = 0; i < n - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[n - 1] = temp; // assign the value of the variable at the last index
  console.log(arr)
}

solve(arr, n);


//recursive rotate

var rotate = function(nums, k) {
  k = k%nums.length;
          reverse(nums,nums.length-k, nums.length-1);
          reverse(nums,0,nums.length-k-1);
          reverse(nums,0,nums.length-1);
          
         
          
          
      }
      
      function  reverse( arr, st,end )
      {
          if(arr.length == 0 || arr.length == 1) return;
          
          while(st<end)
          {
              let tmp = arr[st];
              arr[st] = arr[end];
              arr[end] = tmp;
              st++;
              end--;
          }
          
      }