// link=>https://leetcode.com/problems/linked-list-cycle/description/


// detecting a loop
// agian a hare tortoise method.

var hasCycle = function(head) {
  let slow = head, fast = head;
  while(fast && fast.next){
      fast = fast.next.next;
      slow = slow.next;
      if(fast==slow) return true;
  }
 
 
 return false
};


//why this works

// .If there is no cycle, the fast pointer will reach the end of the list (i.e., fast or fast->next will become nullptr), and the loop will terminate.

// . If there is a cycle, the fast pointer will eventually enter the cycle and start to "lap" the slow pointer. Since the fast pointer moves twice as fast, it will eventually meet the slow pointer within the cycle.

// Example:
// Consider a list with nodes A -> B -> C -> D -> E -> C (cycle starts at C).

// Initialization: Both slow and fast start at A.
// Iteration 1: slow moves to B, fast moves to C.
// Iteration 2: slow moves to C, fast moves to E.
// Iteration 3: slow moves to D, fast moves to D (entering the cycle).
// At this point, both slow and fast are within the cycle, and the next iteration will cause them to meet, indicating a cycle.


