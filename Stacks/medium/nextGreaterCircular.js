var nextGreaterElements = function(nums) {
  let st = new Stack();
  let n = nums.length;
  let ans = [];
 //in circualr we ahve to go as twice
 // and in that case impoetantn poperty comes in hand
 // x%length = x (x<length)
 // y%length = rem (y>length);

  for(let i=2*n-1;i>=0;i--){

       while(!st.isEmpty() && st.peek()<=nums[i%n]){
       st.pop();
       }
       //and we need to consider only once as we are movig twice
       if(i<n){
          ans[i] =  st.isEmpty()?-1:st.peek();
       }
       st.push(nums[i%n]);
  }
  return ans;

};

class Stack {
  constructor() {
      this.items = [];
  }

  // add element to the stack
  push(element) {
      return this.items.push(element);
  }

  // remove element from the stack
  pop() {
      if (this.items.length > 0) {
          return this.items.pop();
      }
  }

  // view the last element
  peek() {
      return this.items[this.items.length - 1];
  }

  // check if the stack is empty
  isEmpty() {
      return this.items.length == 0;
  }

  // the size of the stack
  size() {
      return this.items.length;
  }

  // empty the stack
  clear() {
      this.items = [];
  }
}
