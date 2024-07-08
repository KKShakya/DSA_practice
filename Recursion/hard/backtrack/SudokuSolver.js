// link=>

//sudoku solver

// we have three rules for solving the sudoku
// generally we have a 9*9 boards;

// 1. we should have no same character in a row
// 2. we should not have any same character in column
// 3. we should not have any same character in 3*3 box;


//  we will try to fill every empty ccecll starting from 1 to 9, the available numbers;
// and chekc if the box fills in with rules.

// visit every cell => if it is empty => try to fill => if borad is filled visit next small(3*3) box;



/**
 * Solves the Sudoku puzzle by modifying the board in-place.
 * @param {character[][]} board - The Sudoku board represented as a 2D array of characters.
 * @return {void} - Do not return anything, modify the board in-place instead.
 */
var solveSudoku = function (board) {
  solver(board);
};


const solver = (board) => {
  // Iterate over each cell in the board
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {

      // Check if the cell is empty 
      if (board[i][j] === '.') {
        //we will try to fill with every char (1 to 9)
        for (let c = 1; c <= 9; c++) {
          let char = c.toString(); 

          if (isValid(board, i, j, char)) {
            board[i][j] = char;
            // Recursively try to solve the rest of the board
            if (solver(board)) {
              return true; // Solution found
            } else {
              board[i][j] = '.'; // Backtrack and reset the cell
            }
          }
        }
        return false; // No valid digit found, trigger backtracking
      }
    }
  }
  //if all cells are filed that means our board is completed
  return true; // All cells are filled correctly
};


const isValid = (board, row, col, c) => {
  // Check the column for duplicates
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === c) return false;
  }
  // Check the row for duplicates
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === c) return false;
  }
  // Check the 3x3 sub-grid for duplicates
  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = 0; i < 9; i++) {
    if (board[startRow + Math.floor(i / 3)][startCol + i % 3] === c) return false;
  }

  return true;
};

