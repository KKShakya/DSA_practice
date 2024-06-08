// link=>https://leetcode.com/problems/delete-node-in-a-linked-list/


var deleteNode = function(node) {
    if(node == null) return;
    else{
        //store the next coach(train) val;
        let tmp = node.next;
        // copy it to prev coach
        node.val = tmp.val;
        // connect node coach to one step forward coach
        node.next = node.next.next;
    }
};