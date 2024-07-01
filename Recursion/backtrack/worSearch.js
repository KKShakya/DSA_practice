// link=>https://leetcode.com/problems/word-search/description/


// what exactly we need tot do is, for every cell,try to find an answer 
//discovering all possible outcomes further from this cell;

// two for loops for each cell visit,then we search our answer thorugh each cell'

// so search help doews following thing
// if word.lngth==serachinf index, that means found the word;
// if on search we out of the board, i<0 || i==m || j<0 ||j==n || visited we return;
// if next cell does not match the word[i] we have that means we are at wrong track, so return;

// so while going fuurhter and marking visited each cell for each path
// we search top,left,bottom,right, all four directions;
// and wherever we find answer we kkepe it

var exist = function (board, word) {

  let n = board[0].length;
  let m = board.length;

  let idx = 0;
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

  // kkep backtrack
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