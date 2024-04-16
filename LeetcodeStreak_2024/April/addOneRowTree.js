// link=>https://leetcode.com/problems/add-one-row-to-tree/description/?envType=daily-question&envId=2024-04-16https://leetcode.com/problems/add-one-row-to-tree/description/?envType=daily-question&envId=2024-04-16


// intuition:
// *  first we chaeck the depth==1 or not , if yes make a node and attach root node to it's left since it is a binary tree
// * then traverse the tree,current Depth is depth-1, i'e we can attach new nodes,so attach to lef and right subtrre
// * at last if curretn depth != depth -1, trvaerse leftsubtree adn right subtree respectively, (Binary tree it is)
// * read binary tree properties if you do not know them


function addOneRow(root, val, depth) {
  // If depth is 1, crate new node and attach it to tree
  // and make the original tree the left subtree of the new root.
  if (depth === 1) {
      const newRoot = new TreeNode(val);
      newRoot.left = root;
      return newRoot;
  }

  // traverse the tree and add the new row.
  function traverse(node, currentDepth) {
      // If currentDepth = depth - 1, add new nodes at the level.
      if (currentDepth === depth - 1) {
          // Create new nodes with the given value and attach
          // to the left and right subtrees of the current node.
          const leftNode = new TreeNode(val);
          leftNode.left = node.left;
          node.left = leftNode;

          const rightNode = new TreeNode(val);
          rightNode.right = node.right;
          node.right = rightNode;
      } else {
          // If currentDepth!=depth - 1,
          // traverse the left and right subtrees.
          traverse(node.left, currentDepth + 1);
          traverse(node.right, currentDepth + 1);
      }
  }
}