// link=>https://leetcode.com/problems/implement-stack-using-queues/

//using two queues:

// rules:
// Q1 will be the main reference for the Stack, Q2 is a helper
// PUSH:
// 1 . push something to Q2;
// 2 . put everything from Q1 to Q2;
// 3 . swap Q1 and Q2(move everything from Q2 to Q1)

// POP:
// 1 . pop element from Q1;


class MyStack {
  constructor() {
      this.q1 = new MyQueue(); // First queue for stack operations
      this.q2 = new MyQueue(); // Second queue for temporary storage
  }

  push(x) {
      this.q2.push(x); // Push new element onto q2

      // Move all elements from q1 to q2
      while (!this.q1.empty()) {
          this.q2.push(this.q1.pop());
      }

      // Swap q1 and q2
      let temp = this.q1;
      this.q1 = this.q2;
      this.q2 = temp;
  }

  pop() {
      return this.q1.pop(); // Pop from q1 (which now contains stack elements)
  }

  top() {
      return this.q1.top(); // Return the top element of the stack (from q1)
  }

  empty() {
      return this.q1.empty(); // Check if q1 is empty (stack is empty)
  }
}

class MyQueue{

constructor(){
 this.items = [];
}

push(x){
 this.items.push(x);
 
}
pop(){
  if(this.items.length==0) return -1;
  return this.items.shift();
}
top(){
  if (this.items.length === 0) return -1;
  return this.items[0];
}
empty(){
 return this.items.length == 0
}

size(){
  return this.items.length;
}

}



// using single Queue

// MyStack class using one queue solution
// NOte:The single queue approach for implementing a stack is interesting but comes with a performance cost in terms of the push operation, which is 𝑂(𝑛) due to the rotation of elements. This might be acceptable depending on the use case and requirements but should be considered when designing applications that require efficient stack operations.


class MyStackSingleQueue {
  constructor() {
      this.q1 = new MyQueue(); // Initialize a single queue
  }

  push(x) {
      this.q1.push(x); // Push new element onto the queue

      // Rotate elements so that the recently pushed element is at the front
      let size = this.q1.size();
       while(size-- > 0){
        let front = this.q1.pop(); // Remove front element
            this.q1.push(front); // Add it back to the end
       }
  }

  pop() {
      return this.q1.pop(); // Pop from the front of the queue (top of the stack)
  }

  top() {
      return this.q1.top(); // Return the front element of the queue (top of the stack)
  }

  empty() {
      return this.q1.empty(); // Check if the queue is empty (stack is empty)
  }
}

