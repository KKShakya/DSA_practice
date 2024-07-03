// link=>


class Solution {
  findPath(board, n) {
      let ans = [];
      let vis = Array.from({ length: n }, () => Array(n).fill(0));
      
      if (board[0][0] == 1) {
          vis[0][0] = 1; // Mark starting position as visited
          this.helper(board, 0, 0, n, ans, '', vis);
      }
      
      return ans;
  }

  //sometimes to find the answer quicly and avoid more loops we 
  // prefer "DRUL"  direction preferene
  
  helper(board, row, col, n, ans, path, vis) {
      // Check if reached the bottom-right corner
      if (row == n - 1 && col == n - 1) {
          ans.push(path);
          return;
      }
      
      // Move down
      if (row + 1 < n && vis[row + 1][col] == 0 && board[row + 1][col] == 1) {
          vis[row + 1][col] = 1;
          this.helper(board, row + 1, col, n, ans, path + "D", vis);
          vis[row + 1][col] = 0;
      }
      
      // Move right
      if (col + 1 < n && vis[row][col + 1] == 0 && board[row][col + 1] == 1) {
          vis[row][col + 1] = 1;
          this.helper(board, row, col + 1, n, ans, path + "R", vis);
          vis[row][col + 1] = 0;
      }
      
      // Move up
      if (row - 1 >= 0 && vis[row - 1][col] == 0 && board[row - 1][col] == 1) {
          vis[row - 1][col] = 1;
          this.helper(board, row - 1, col, n, ans, path + "U", vis);
          vis[row - 1][col] = 0;
      }
      
      // Move left
      if (col - 1 >= 0 && vis[row][col - 1] == 0 && board[row][col - 1] == 1) {
          vis[row][col - 1] = 1;
          this.helper(board, row, col - 1, n, ans, path + "L", vis);
          vis[row][col - 1] = 0;
      }
  }
}


