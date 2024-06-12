// link=>https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
  let st = new Stack();
   st.push(s[0])
  for(let i=1;i<s.length;i++)
  {
      if(isOpposite(st.peek(),s[i])){
         st.pop();
      }else{
          st.push(s[i])
      }
  }

  return st.isEmpty();

};
const isOpposite =  (top,brack)=>{
if(top=='(' && brack ==')') return true;
if(top=='{' && brack =='}') return true;
if(top=='[' && brack ==']') return true;
return false;
}



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
