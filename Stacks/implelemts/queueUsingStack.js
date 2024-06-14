// link=>https://leetcode.com/problems/implement-queue-using-stacks/description/

//two stack solution

//using two queues:

// rules:
// s1 will be the main reference for the Stack, s2 is a helper
// PUSH:
// 1 . move s1 to s2 element by element;
// 2 . push something to s1;
// 3 . put everything from s2 to s1 ele by ele;


// POP:
// 1 . pop element from s1;

// NOte:
// This implementation of a queue using two stacks (s1 and s2) ensures that both push and pop operations have 𝑂(1)
// O(1) time complexity for each operation, except for push, which has an O(n) time complexity due to the movement of elements between s1 and s2. This approach is space-efficient and useful in scenarios where both enqueue and dequeue operations need to be optimize.

class MyQueue {
  constructor() {
      this.s1 = new MyStack(); // Main stack for queue operations
      this.s2 = new MyStack(); // Auxiliary stack for temporary storage
  }

  push(x) {
      // Move all elements from s1 to s2
      while (!this.s1.empty()) {
          let p = this.s1.pop();
          this.s2.push(p);
      }

      // Push new element x to s1
      this.s1.push(x);

      // Move all elements back from s2 to s1
      while (!this.s2.empty()) {
          let p = this.s2.pop();
          this.s1.push(p);
      }
  }

  pop() {
      return this.s1.pop(); // Pop from s1 (which simulates dequeuing)
  }

  peek() {
      return this.s1.top(); // Return the front element of the queue (top of s1)
  }

  empty() {
      return this.s1.empty(); // Check if s1 is empty (queue is empty)
  }
}


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
top(){
  if (this.items.length === 0) return -1;
  return this.items[this.items.length-1];
}
empty(){
 return this.items.length == 0
}

size(){
      return this.items.length;
  }
}