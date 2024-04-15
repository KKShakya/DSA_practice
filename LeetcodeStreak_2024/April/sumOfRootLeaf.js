// link=>

// intution:
// * Perform a depth-first search (DFS) traversal of the binary tree.
// * At each step, keep track of the current number formed from the root to the current node.
// * Base Case: If the current node is null, return 0.
// * Update the current number by multiplying it by 10 and adding the value of the current node.
// * Leaf Node Check: If the current node is a leaf node (i.e., it has no left or right child), return the current number as it represents a root-to-leaf number.
// * Recursive Call: Recursively calculate the sum for the left and right subtrees, passing the updated current number as well.
// * Starting Point: Start the depth-first search traversal from the root with an initial current number of 0.
// * Total Sum: Return the total sum of all root-to-leaf numbers obtained during the traversal.


const sumNumbers = function(root) {
  // Helper function for depth-first search traversal
  const dfs = (node, currentSum) => {
      // If the current node is null, return 0
      if (!node) return 0;
      
      // Update the currentSum by multiplying it by 10 and adding the value of the current node
      currentSum = currentSum * 10 + node.val;
      
      // If the current node is a leaf node (no left or right child), return the currentSum
      if (!node.left && !node.right) {
          return currentSum; // can also do return currentSum*10+node.val;
      }
      
      // Recursively calculate the sum for the left and right subtrees
      return dfs(node.left, currentSum) + dfs(node.right, currentSum);
  };

  // Start the depth-first search traversal from the root with an initial currentSum of 0
  return dfs(root, 0);
};