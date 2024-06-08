// link=>https://leetcode.com/problems/linked-list-cycle-ii/


// 1. whenver a cycle is detected we found that cycle exists.
// 2. move slow to start  = head;
// 3. Now the second thing is moving fast and slow pointer one step until they meet




const detectCycle = (head)=>{
// Check if the linked list is null or has only one node
if (head == null || head.next == null) return null;

// Initialize two pointers, slow and fast, to the head of the linked list
let slow = head, fast = head;

// Floyd's Tortoise and Hare Algorithm to detect cycle
while (fast && fast.next) {
    // Move fast pointer two steps ahead
    fast = fast.next.next;
    // Move slow pointer one step ahead
    slow = slow.next;
    // If fast and slow pointers meet, there is a cycle
    if (fast == slow) {
      slow = head;
        // Reset head to the beginning of the list and keep slow at the meeting point
        while (slow != fast) {
            // Move both pointers one step at a time until they meet at the starting point of the cycle
            slow = slow.next;
            fast = fast.next;
        }
        // Return the starting point of the cycle
        return slow;
    }
}

// If no cycle is detected, return null
return null;

}



