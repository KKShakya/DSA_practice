// link=>

// intuiyion:

// * It achieves this using depth-first search (DFS) to traverse the tree, constructing paths from each leaf node to the root.
// * The paths are reversed and joined to form strings, which are then stored in an array.
// * Finally, the array is sorted lexicographically, and the smallest string is returned.



const smallestStringFromLeaf = (root) => {

  // Define a depth-first search (DFS) function to traverse the tree.

  const dfs = (node, path, leafPaths) => {

    // Base case: If node is null, return
    if (!node) return;

    // Convert node value to character and push it to the path
    path.push(String.fromCharCode(node.val + 97));

    // If leaf node
    if (!node.left && !node.right) {

      leafPaths.push(path.slice().reverse().join('')); // Reverse path and join to get string from leaf to root
    }
    else {

      dfs(node.left, path, leafPaths); // traverse for left subtree
      dfs(node.right, path, leafPaths); // traverse for right subtree
    }
    path.pop(); // Backtrack: Remove the last element from the path
  };

  const leafPaths = []; //store data

  dfs(root, [], leafPaths); // Start DFS from the root node

  return leafPaths.sort()[0]; // Return lexicographically smallest string
}

