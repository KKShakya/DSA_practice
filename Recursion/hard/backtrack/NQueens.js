// link=>


var solveNQueens = function(n) {
  let board = Array.from({ length: n }, () => Array(n).fill('.'));
  let result = [];
     placeQueen(board,0,result)
     return result;
 };
 
 const placeQueen = (board,row,ans)=>{
 //we reach end of the borad all rows explored
    if(board.length==row){
     ans.push(board.map(row => row.join('')));
     return;
    }
 
     //visit each column moving in rows
     for(let col=0;col<board.length;col++)
     {
         if(isSafe(board,row,col)){
             board[row][col] = 'Q';
             placeQueen(board,row+1,ans);
             board[row][col] = '.';
         }
     }
 
 }
 
 const isSafe  = (board,row,col)=>{
  
  // is any queen palced above in column;
    for(let i=0;i<row;i++)
    {
     if(board[i][col]=='Q') return false;
    }
 
    //is any queen placed at upper left diagonal
     for(let i=row,j=col;i>=0&&j>=0;i--,j--){
         if(board[i][j]=='Q') return false;
     }
 
     //is any queen placed at upper right diagonal
     for(let i=row,j=col;i>=0&&j<board.length;i--,j++){
         if(board[i][j]=='Q') return false;
     }
 
     return true;
 
 }

 //can be optimized if keep track of each cell was alredy marked or not
 // with hassh map