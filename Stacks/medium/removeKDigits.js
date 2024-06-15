// luink=>

// what this question wannts is to make a number as smallera as possible removeing the k digits
// why from left = > because it has the most significance
// exampkle  N =372181, remove two digits, if i remove 7 and 8 n = 3211
// but if i remove from left n = 2181, which is smaller than prev


var removeKdigits = function(num, k) {
  // If the number of digits 'num' is less than or equal to 'k', return "0"
  if (num.length <= k)
    return "0";
  
  // If 'k' is 0, no digits are to be removed, return 'num' as is
  if (k === 0)
    return num;

  let res = ""; 
  const stack = new Stack();

  stack.push(num[0]); 

  
  for (let i = 1; i < num.length; ++i) {
    // While there are digits to be removed ('k > 0') and the stack is not empty
    // and the current digit 'num[i]' is smaller than the top digit of the stack,
    // pop from the stack (remove the larger digit) we don'y need any peek value
    while (k > 0 && !stack.isEmpty() && num[i] < stack.peek()) {
      --k; // (indicating a digit has been removed)
      stack.pop(); 
    }
    
    stack.push(num[i]); // pudsh currnt
    
    // If the stack contains only one element and that element is '0',
    // this removes leading zeroes giving only number
    if (stack.size() === 1 && num[i] === '0')
      stack.pop();
  }

  // After removing 'k' digits, if there are still digits left in the stack,
  // pop them from the stack and append to 'res'
  
  // example =  n = 123456, the above while loop will never hit in this case so we remove top 2 as k = 2 n becomes 12345 
  while (k > 0 && !stack.isEmpty()) {
    --k; 
    stack.pop(); 
  }

  // Construct the result by popping elements from the stack and appending to 'res'
  while (!stack.isEmpty()) {
    res += stack.pop();
  }

  // Reverse 'res' and join it to form the final result string
  res = res.split("").reverse().join("");

  if (res.length === 0)
    return "0";


  return res;
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
