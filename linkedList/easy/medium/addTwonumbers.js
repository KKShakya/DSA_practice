//lnk=> https://leetcode.com/problems/add-two-numbers/description/

//

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(-1);
    let curr = dummy;
    let carry =  0;
    while(l1 || l2){
        let sum = carry;
        if(l1){
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2){
            sum += l2.val;
            l2=l2.next;
        }
        carry = Math.floor(sum/10);
        //crating a new node for storing 
        curr.next = new ListNode(sum%10)
        //move current a step forward to store new value
        curr = curr.next;

    }

    if(carry>0){
      curr.next = new ListNode(carry)
    }
    //the head starts from heere
    return dummy.next;
};