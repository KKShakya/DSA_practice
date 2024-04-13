// link=>https://leetcode.com/problems/maximal-rectangle/description/



//brute force
function maximalRectangleBrute(matrix) {
  // Check if the matrix is empty, if so, return 0
  if (!matrix.length) return 0;
  
  // Initialize variables
  let ans = 0; // Variable to store the maximal rectangle area
  const m = matrix.length; // Number of rows in the matrix
  const n = matrix[0].length; // Number of columns in the matrix

  // Loop through each cell in the matrix
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          // Start checking all possible rectangles with (i, j) as the top-left corner
          for (let row = i, colLen = n, col; row < m && matrix[row][j] === '1'; row++) {
              // Iterate over rows starting from 'i' and increment 'row' as long as the cell at (row, j) is '1'
              
              // For each row, iterate over columns starting from 'j' and increment 'col' as long as the cell at (row, col) is '1'
              for (col = j; col < n && matrix[row][col] === '1'; col++);
              
              // Calculate the width of the current rectangle
              colLen = Math.min(colLen, col - j);
              
              // Calculate the area of the current rectangle and update 'ans' if it's greater than the current maximum
              ans = Math.max(ans, (row - i + 1) * colLen);
          }
      }
  }

  // Return the maximal rectangle area
  return ans;
}



//solving with dp approach but with precompute

function maximalRectangleOptimal(M) {
  // If M is empty, return 0
  if (!M.length) return 0;
  
  // Initialize variables
  let ans = 0; // Variable to store the maximal rectangle area
  const m = M.length; // Number of rows in the matrix
  const n = M[0].length; // Number of columns in the matrix
  
  // Create a 2D array dp to store the length of consecutive 1s to the right of each cell
  let dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));
  
  // Fill dp array
  for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
          // If current cell is '1', set dp[i][j] to the length of consecutive '1's to the right, otherwise set it to 0
          dp[i][j] = M[i][j] === '1' ? dp[i][j + 1] + 1 : 0;
      }
  }
  
  // Iterate through the matrix to calculate the maximal rectangle
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          let colLen = n; // Initialize colLen to number of columns
          
          // Check each consecutive row with '1' at the same column
          for (let row = i; row < m && M[row][j] === '1'; row++) {
              // Update colLen to the minimum value between current colLen and the length of consecutive 1s
              colLen = Math.min(colLen, dp[row][j] * 1);
              // Update the maximal rectangle area
              ans = Math.max(ans, (row - i + 1) * colLen);
          }
      }
  }
  
  return ans; // Return the maximal rectangle area
}

// Example usage:
const matrix = [
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0']
];
console.log("Maximal Rectangle Area:", maximalRectangleBrute(matrix));
console.log("Maximal Rectangle Area:", maximalRectangleOptimal(matrix));
