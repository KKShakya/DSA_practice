// link=>

var asteroidCollision = function (ast) {
  let st = new Stack();
  let n = ast.length;
  for (let i = 0; i < n; i++) {
    // we say if the coming ast is positive, because positvees live in  harmony
    // push them 
    if (ast[i] > 0 || st.isEmpty()) {
      st.push(ast[i]);
    }
    else {
      // if top of stack has positive elements and it is less than coming asteroids
      //  pop it . please notice only negative asteriods falls to else block
      // so if negative have large size than top ele pop it out;
      while (!st.isEmpty() && st.peek() > 0 && st.peek() < Math.abs(ast[i])) {
        st.pop();
      }
      // if they are of equal size , they will destroy each other
      if (!st.isEmpty() && st.peek() == Math.abs(ast[i])) {
        st.pop();
      }
      else {
        ///or at last we can bring in new one
        if (st.isEmpty() || st.peek() < 0) {
          st.push(ast[i]);
        }
      }
    }

  }
  let j = st.size() - 1;
  let ans = [];
  while (!st.isEmpty()) {
    ans[j--] = st.pop();
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
