// link=>https://leetcode.com/problems/sum-of-subarray-minimums/

//brute forcce g
// 1. generate all subarrays then O(n^2)
// 2.  find minimum and then sum it;




// TC =O(n^3)
var sumSubarrayMinsBruteForce = function(arr) {
  let n = arr.length;
  let sum = 0;
  
  // Iterate through all subarrays
  for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
          // Find the minimum value in the subarray arr[i..j]
          let min = arr[i];
          for (let k = i + 1; k <= j; k++) {
              if (arr[k] < min) {
                  min = arr[k];
              }
          }
          // Add the minimum value to the sum
          sum += min;
      }
  }
  
  return sum;
};

// Input: arr = [3,1,2,4]
// Output: 17
// Explanation: 
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// Sum is 17.

//optimal 
// 1. can i say for above subarrays the minimum in sub arrays which are of size>1, we can find same min for ost of the sub arrays
// 2. we got 1 from [3,1], [1,2],[3,1,2], [1,2,4], [3,1,2,4]., we calulated it 5 times, but we know 1 is minimum
// 3. so can we find upto which point to the leftBoundary or rightBoundary the 1 is goin gto be minumn
// 4. if yes we can find the range and multilpy that with our 1. 

 var sumSubarrayMins = function(arr) {
  let n = arr.length;
  

  let prevSmaller = new Array(n).fill(-1);
  let nextSmaller = new Array(n).fill(n);
  
  
  let stack = new MyStack();
  for (let i = 0; i < n; i++) {
    //find prev samllers for each ele
      while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {
          stack.pop();
      }
      prevSmaller[i] = stack.isEmpty() ? -1 : stack.peek();
      stack.push(i);
  }
  
 
  stack = new MyStack();
  //find next smallers for each
  for (let i = n - 1; i >= 0; i--) {
      while (!stack.isEmpty() && arr[stack.peek()] > arr[i]) {
          stack.pop();
      }
      nextSmaller[i] = stack.isEmpty() ? n : stack.peek();
      stack.push(i);
  }
  

  let result = 0;
  for (let i = 0; i < n; i++) {
    //calaualte range of eacha minimum
      let leftBoundary = i - prevSmaller[i];
      let rightBoundary = nextSmaller[i] - i;
      result = (result + arr[i] * leftBoundary * rightBoundary) %(1e9 + 7);
  }
  
  return result;
};


class MyStack{

constructor(){
this.items = [];
}

push(x){
this.items.push(x);

}
pop(){
if(this.items.length==0) return -1;
return this.items.pop();
}
peek(){
if (this.items.length === 0) return -1;
return this.items[this.items.length-1];
}
isEmpty(){
return this.items.length == 0
}

size(){
    return this.items.length;
}
}