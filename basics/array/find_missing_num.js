// link => https://leetcode.com/problems/missing-number/solutions/69786/3-different-ideas-xor-sum-binary-search-java-code/

//brute force
// method 1

// sort the array then run for loop
// if(arr[i]!=i) retun i;
//at last return n;


// method 2//
// first loop make frequency array or map
// then check in second loop if anyone has frequency zero or undefined
// then return it;

//method 3
// sort and use binary search







// optimal ways

//method 1
// XOR

// Xor of itself gives 0 and number itself with 0;

function XorMiss(arr) {
  let xor = arr.length-1;
  for (let i = 0; i < arr.legnth; i++) {
    xor ^= i;
    xor ^= arr[i];
  }

  console.log(xor);
}

let arr = [3, 0, 1]
XorMiss(arr);



///method 2 sum
function SumMiss(arr) {
  let len = arr.length;
  let sum = (0 + len) * (len + 1) / 2 || 0;

  for (let i = 0; i < len; i++)
    sum -= arr[i];

  //subtaract all from sum 
  //the remaining is the missing one
  console.log(sum)

}

SumMiss(arr);


