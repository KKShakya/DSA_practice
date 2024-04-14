// link=>



// Intuition:

// We initialize the sum to 0 to accumulate the sum of left leaves as we traverse the tree.
// We perform a depth-first search (DFS) traversal of the binary tree.
// At each node, we check if it is a leaf node and if it is a left child. If both conditions are met, we add its value to the sum.
// We recursively traverse the left and right subtrees, passing the appropriate boolean value indicating whether the current node is a left child.
// Finally, we return the sum of left leaves after traversing the entire tree.



 const sumOfLeftLeaves = function(root) {
  // If the root is null, return 0 (no leaves)
  if (root == null) return 0;

  let sum = 0;

  // Depth-first search (DFS) function to traverse the tree
  function dfs(node, isLeft) {
      // Base case: if the node is null, return
      if (!node) {
          return;
      }

      // If the node is a leaf and a left child, add its value to sum
      if (!node.left && !node.right && isLeft) {
          sum += node.val;
      }
      
      // Recursively traverse the left and right subtrees
      dfs(node.left, true);   // For left child, set isLeft to true
      dfs(node.right, false); // For right child, set isLeft to false
  }
  
  // Start DFS traversal from the root with isLeft = false
  dfs(root, false);
  
  // Return the sum of left leaves
  return sum;
};
