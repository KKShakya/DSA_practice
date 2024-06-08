// link=>https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/


// move n steps forward in ll and then move slow and fast together one step
// this ensures the distanvce of n betwenen fast and slow. 
// so from back we are at nthe node.

var removeNthFromEnd = function(head, n) {
  // Handle cases where the list is empty or has only one node
  if (head == null || head.next == null) return null;

  // Initialize slow and fast pointers at the head
  let slow = head, fast = head;

  // Move the fast pointer n steps ahead
  while (n > 0) {
      fast = fast.next;
      n--;
  }

  // Move both pointers until fast reaches the end
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next;
  }

  // we are doing this because there can be a case the nth node from end
  // is head node itesef so remove it returning head.next


  // If fast is null after moving n steps, remove the head node
  if (!fast) return head.next;

  // Remove the nth node from the end by skipping it
  slow.next = slow.next.next;

  // Return the modified list
  return head;
};