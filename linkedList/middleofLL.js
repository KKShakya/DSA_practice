// link=>

// brute force 
// 1. travel the ll once and get its length = n;
// 2. then calulate n/2 + 1 and say traverse LL again
// 3. stop the loop when exactly when you have reached n/2 +1 steps



//optimize one 
// hare toroise method slow and fast pointer.
// the reason is slow pointer reaches at middle node exactly when fast pointer reaches end or null(even nodes);

// BUt Why and how?



// Mathematical Understanding:

// Let's assume the list has n nodes.
// The fast pointer covers 2 nodes in each step, and the slow pointer covers 1 node in each step.
// When the fast pointer has traveled n nodes (or n−1 nodes if the list length is even), the slow pointer will have traveled n/2 nodes.

var middleNode = function(head) {
  let rabbit = head,tortoise = head;
  while(rabbit && rabbit.next)
  {
      tortoise = tortoise.next;
      //one extra jump
      rabbit = rabbit.next.next
  }
  return tortoise
};