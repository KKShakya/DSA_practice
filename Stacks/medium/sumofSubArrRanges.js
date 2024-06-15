// link=>

// the question says find the sum OF difference OF Max-Min of subarray;
// / Input: arr = [3,1,2,4]
// Output: 17
// Explanation: 
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
// maximums are 3, 1, 2, 4, 3, 2, 4, 3, 4, 4
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// if subtract max from min or or i can say sumOf MAX - sumof MINS;
// so we no hoe to find minimum sum ,tweak the code a little bit to find max sums;
 // and boom the answer is there.







/**
 * @param {number[]} nums
 * @return {number}
 */
 var subArrayRanges = function(nums) {
  let maxSum = sumSubarrayMaxs(nums);
  let minSum = sumSubarrayMins(nums);
  return maxSum-minSum;
};



var sumSubarrayMaxs = function(arr) {
let n = arr.length;


let prevSmaller = new Array(n).fill(-1);
let nextSmaller = new Array(n).fill(n);


let stack = new MyStack();
for (let i = 0; i < n; i++) {
  //find prev samllers for each ele
    while (!stack.isEmpty() && arr[stack.peek()] <= arr[i]) {
        stack.pop();
    }
    prevSmaller[i] = stack.isEmpty() ? -1 : stack.peek();
    stack.push(i);
}


stack = new MyStack();
//find next smallers for each
for (let i = n - 1; i >= 0; i--) {
    while (!stack.isEmpty() && arr[stack.peek()] < arr[i]) {
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
    result = (result + arr[i] * leftBoundary * rightBoundary);
}

return result;
};

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
    result = (result + arr[i] * leftBoundary * rightBoundary);
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