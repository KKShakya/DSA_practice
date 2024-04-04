// link=>


// spiral says go go right from sarting row to end col and never visit this row again
// go from satrting row +1 to last row and then never cicsit this column agaian
// go from last col to starting col and never visit this row agaia
// go from Last row to starting row and never visit this colums again

// keep note of that starting/last row, start/last col keeps updaying themselccves




const spiralOrder = function(mat) {
  let n = mat.length;
  let m =mat[0].length

let cnt = 0;
//total number of elements n*m
// so we can't ahve more than that
let rowBegin = 0,colBegin=0;
let rowEnd = n-1, colEnd = m-1;
let str = [];
while(cnt<n*m){

//right
for(let j=colBegin;j<=colEnd&& cnt < n * m;j++)
{

  str.push(mat[rowBegin][j])
  cnt++;
}
//can't go on the same row again;
rowBegin++;




//down
for(let i=rowBegin;i<=rowEnd&& cnt < n * m;i++)
{

  str.push(mat[i][colEnd])
  cnt++;
}
//can't go on the same col again;
colEnd--;

//left
for(let j=colEnd;j>=colBegin&& cnt < n *m;j--)
{
  
  str.push(mat[rowEnd][j])
  cnt++;
}
//can't go on the same row again;
rowEnd--;

//up
for(let i=rowEnd;i>=rowBegin && cnt<n*m;i--)
{

  str.push(mat[i][colBegin])
  cnt++;
}
//can't go on the same col again
colBegin++;

}
return str;
}


let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

console.log(spiralOrder(matrix));