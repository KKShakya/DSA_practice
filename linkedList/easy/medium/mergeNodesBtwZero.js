// link=>https://leetcode.com/problems/merge-nodes-in-between-zeros/description/


var mergeNodes = function(head) {
    
  if(head == null) return null;
     let  prev = new ListNode();
     //since every LList starts with 0
     //which is to be not included so we start with
     // if(head.val == 0)
     head = head.next;
     prev.next = head;
     //curr to traverse and check
     let  curr = head;
     let sum = 0;
     while(curr != null)
         
     {
         if(curr.val == 0)
         {
             //we need only the numbers in our new LL
             // so prev keeps the track of these number pointers
             prev.next.val = sum;
             sum = 0;
             prev = prev.next;
             
         }else{
             //acccumulate the sum
             sum+=curr.val;
             
         }
         curr = curr.next;
     }
     //after coming out of the loop we don't need extra 
     //node attached so point last node to null,ie. prev.next = null;
     prev.next = null;
     
     return head;
     
 
};