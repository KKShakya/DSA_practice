// link=>

//pseudo code
function isPalindrome(head){
    // if head is null or head.next is null:
        return true
    
    // Find the middle node using slow and fast pointers
    middle = findMiddle(head)
    
    // Reverse the second half of the linked list
    secondHalf = reverse(middle.next)
    
    // Compare the first half with the reversed second half
    isPalindrome = compareLists(head, secondHalf)
     
    return isPalindrome
}
var isPalindrome = function(head) {
  if (!head) return false;

  let slow = head,
    fast = head;

  // Finding middle
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reversing the second half from middle point
 secondHalf = reverseList(slow.next);

  // Moving slow one point ahead to compare

  while (secondHalf !== null) {
    if (head.val !== secondHalf.val) {
      return false;
    }
    head = head.next;
    secondHalf = secondHalf.next;
  }

  return true;
}

function reverseList(head) {
  let prev = null;
  let next = null;
  let curr = head;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = head;
  }

  return prev;
}
