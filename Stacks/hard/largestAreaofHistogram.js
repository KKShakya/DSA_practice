// link=>https://leetcode.com/problems/largest-rectangle-in-histogram/

//exactly same as the sum of subarray minimums
// just at last we calulate area w = r-l-1,h=arr[i]; return w*h;



//brute force

function largestRectangleAreaBrute(heights) {
  let n = heights.length;
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
      let minHeight = Infinity;
      for (let j = i; j < n; j++) {
        //for each element find next minHeight
          minHeight = Math.min(minHeight, heights[j]);
          // try to find te maxArea
          maxArea = Math.max(maxArea, minHeight * (j - i + 1));
      }
  }

  return maxArea;
}



var largestRectangleArea = function(arr) {
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
      while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) {
          stack.pop();
      }
      nextSmaller[i] = stack.isEmpty() ? n : stack.peek();
      stack.push(i);
  }
  
   let maxArea = 0;
 for (let i = 0; i < n; i++) {
        let width = nextSmaller[i] - prevSmaller[i] - 1;
        let area = arr[i] * width;
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
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