// link=>https://leetcode.com/problems/word-search/

// It is a simp[le backtrack question that says travel all the cells fo 2d ssary and try to find 
// out the word in it;


// the helper function checks thesse theings while marking the cell as  = 1, so that 
// while searching / backtracking we do not vivist hte same cell again

// row = i, col = j;

// 1. if word found i.e our index == word.length  return true
// 2. if we exceed the boundaries row<0 || col<0 || row==m, col==n; return false;
// 3. if already vivsited cell present board[row][col] == 1 return false;
// 4. if we do not found the next letter of word in visiting cell i.e word[idx]!==board[row][col] return false;

// and then whichever of the above says true continue the search else return 
// and check from new cell


const exist = function (board, word) {

  let n = board[0].length;
  let m = board.length;

  let idx = 0;
  //visit every cell
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (word[idx] == board[i][j]) {
        if (searchHelp(board, i, j, m, n, word, idx)) {
          return true;
        }
      }
    }
  }
  return false;
};


function searchHelp(board, i, j, m, n, word, idx) {
  // if index reaches at the end that means we have found the word
  //found the word;
  if (word.length == idx) return true;
  //borad[i][j]=1 denotes we have visited it
  if (i < 0 || j < 0 || i == m || j == n || board[i][j] == 1) return false;
  //the next search letter does not match the cell value
  if (board[i][j] !== word[idx]) return false;

  // keep backtrack
  let c = board[i][j];
  board[i][j] = 1;

  //top
  const top = searchHelp(board, i - 1, j, m, n, word, idx + 1);
  //left
  const left = searchHelp(board, i, j - 1, m, n, word, idx + 1);
  //down
  const down = searchHelp(board, i + 1, j, m, n, word, idx + 1);
  //rigth
  const right = searchHelp(board, i, j + 1, m, n, word, idx + 1);

  //release your mark
  // board[i][j] = 0;
  //you can't make it zero as we leeters in it
  board[i][j] = c;

  return top || left || down || right;
}

let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
let word = "ABCCED"
console.log(exist(board, word))