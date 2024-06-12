var nextGreaterElement = function (nums2) {

  let st = new Stack();
  let ans = [];

  for (let i = 0; i < nums2.length; i++) {
    //if satck is not empty and you find peek 
    //element is graeter than equal to current
    // that means it should not exist;
    //as we only concerned about smaller
    while (!st.isEmpty() && st.peek() >= nums2[i]) {
      st.pop();
    }
    ans[i] = st.isEmpty() ? -1 : st.peek()
    st.push(nums2[i]);
  }
  console.log(ans)
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