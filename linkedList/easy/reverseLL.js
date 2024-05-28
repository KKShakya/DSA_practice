// Link=> https://leetcode.com/problems/reverse-linked-list/description/


// brute force
// 1 . travel along the LL and store its values in array or stack;
// 2. traverse again ll and store new val to each node as stack.pop();


//optimal 1; 

// use prev , tmp, curr adn head;
// prev is something that will again and agian become head and move to last;
// tmp is something which retains the value of next upfront node
// curr is something which tells currently which node link has to be revers;
// and head mmoves along with curr;


var reverseList = function(head) {
  if(head == null) return head;
  let prev = null; // null piting to nothing
  let curr = head; // curr and head both stays together
  while(curr){
      let tmp  = curr.next; // to store next node
      head.next = prev; // head breaks ties with next node and point s to prev
      curr = tmp; // now curr work is over adn should go to next node
      prev = head; // prev becomes head so that head can jump forward
      head = curr; // head and curr stays together.
  }
  return prev;
};