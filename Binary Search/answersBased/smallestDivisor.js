// link=>https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/

//the question is as same as kokoeating and mBouet


// Problem Statement: You are given an array of integers ‘arr’ and an integer i.e. a threshold value ‘limit’. Your task is to find the smallest positive integer divisor, such that upon dividing all the elements of the given array by it, the sum of the division’s result is less than or equal to the given threshold value.


// Example 2:
// Input Format: N = 4, arr[] = {8,4,2,3}, limit = 10
// Result: 2
// Explanation: If we choose 1, we get 17 as the sum. If we choose 2, we get 9(4+2+1+2) <= 10 as the answer. So, 2 is the answer.

// thr thing is we are dividig from 1 to the max element a sorted fashion.
// why max because, any number divided the max elemnet would always give the same result for every arr[i], 
// 8/8 = 1, 4/8 = 1,2/8 = 1... remember we have to take the ceil of every division;



//brute

var smallestDivisor = function (arr, threshold) {

  //optimal
  let max = findMax(arr);
  let n = arr.length;
  for (let i = 1; i <= max; i++) {
    let sumOfDivisors = divisorSum(arr, i);
    if (sumOfDivisors <= threshold) {
      return i;
    }
  }
  //   let lo = 1;
  //   let hi = max;
  //   let ans = -1;
  //  while(lo<=hi){
  //   let mid = Math.floor((lo+hi)/2);
  //    let sumOfDivisors = divisorSum(arr,mid);
  //       if(sumOfDivisors<=threshold){
  //           ans = mid;
  //           hi = mid-1;
  //       }else{
  //           lo = mid+1;
  //       }

  //  }

  return -1;
};

function findMax(arr) {
  let n = arr.length;
  let maxi = -Infinity;
  for (let i = 0; i < n; i++) {
    maxi = Math.max(arr[i], maxi);
  }
  return maxi;

}

function divisorSum(arr, div) {

  let n = arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.ceil(arr[i] / div);
  }

  return sum;


}

//
// optimal

var smallestDivisorOptimal = function (arr, threshold) {

  //optimal
  let max = findMax(arr);
  let lo = 1;
  let hi = max;
  let ans = -1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    let sumOfDivisors = divisorSum(arr, mid);
    if (sumOfDivisors <= threshold) {
      ans = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }

  }

  return ans; //or low;
};



const arr=  [8,4,2,3], threshold = 10;

console.log(smallestDivisor(arr,threshold));
console.log(smallestDivisorOptimal(arr,threshold),"optimal");