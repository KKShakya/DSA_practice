// Define the StackNode class first
class StackNode {
  constructor(a) {
      this.data = a; // Data stored in the node
      this.next = null; // Pointer to the next node
  }
}

// Define the MyStack class
class MyStack {
  constructor() {
      this.top = null; // Initialize top pointer to null (empty stack)
  }

  push(a) {
      let newNode = new StackNode(a); // Create a new node with data a
      newNode.next = this.top; // Point new node's next to current top
      this.top = newNode; // Update top to the new node
  }


  pop() {
      if (this.isEmpty()) {
          return -1; // Return -1 or handle error for empty stack
      }
      let popValue = this.top.data; // Get data of the top node
      this.top = this.top.next; // Move top to the next node
      return popValue; // Return the popped value
  }


  isEmpty() {
      return this.top === null; 
  }


  peek() {
      if (this.isEmpty()) {
          return -1; 
      }
      return this.top.data; 
  }
}

// Example usage:
let stack = new MyStack();

stack.push(1);
stack.push(2);
console.log(stack.peek());
console.log(stack.pop()); 
console.log(stack.isEmpty());
console.log(stack.pop()); 
console.log(stack.isEmpty()); 
console.log(stack.pop());
