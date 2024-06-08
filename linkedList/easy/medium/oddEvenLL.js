// link=>https://leetcode.com/problems/odd-even-linked-list/


// brute would be
// make a new ll, 
// a temp starts from 1 node jumping two steps and fill second LL
// again traverse from 2 node jumping two step forwards and fill second ll;
// return second LL


//optimized
// link changisg connecting odd with odds and even with evens


var oddEvenList = function(head) {
  if(head==null) return head;
  // idea is to connect even nodes with even head and odd nodes with odd head
  // odd itself is head, so make even head
  let even = head.next,odd=head;
  let evenHead = even;

// we ahve choosen even adn even.next because this is what it is
// remeber even pointer is always one point ahead of odd pointer even = head.next
// so we end loop when there is no next node

  while(even && even.next){
      //connect 
      odd.next = odd.next.next
      even.next = even.next.next;
      
      //move pointers
      odd = odd.next;
      even = even.next;
  }
  //join
  odd.next = evenHead;
  return head;
};

