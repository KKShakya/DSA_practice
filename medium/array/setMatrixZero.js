// link=>https://leetcode.com/problems/set-matrix-zeroes/description/

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.


//Brute force
// method 1;
// what i will do is first mark all rows and columns that have zero in them
// maintian two arrays for oen for row and one for column;

//then iterate again on matrix and make all the rows zero and all columns zero, corresponsidng to outr two arrays

var setZeroes = function(matrix) {
    
  let ArrI = new Set();
  let ArrJ = new Set();
  let m = matrix.length;
  let n = matrix[0].length;
  for(let i=0;i<m;i++)
  {
      for(let j=0;j<n;j++)
      {
           if(matrix[i][j] == 0){
              ArrI.add(i)
              ArrJ.add(j);
           }
      }
    }
   ArrI = Array.from(ArrI);
   ArrJ = Array.from(ArrJ);

  for(let i=0;i<ArrI.length;i++)
  {
      for(let j =0;j<n;j++)
      {
        //all rows zero
          matrix[ArrI[i]][j] = 0;
      }
  }

  for(let j=0;j<ArrJ.length;j++)
  {
      for(let i =0;i<m;i++)
      {
        //all columns zero
          matrix[i][ArrJ[j]] = 0;
      }
  }

};


matrix =[[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// method 2:


var setZeroesM2 = function(matrix) {
    
  let m = matrix.length;
  let n = matrix[0].length;

  let ArrI = new Array(m).fill(0);
  let ArrJ = new Array(n).fill(0);
  for(let i=0;i<m;i++)
  {
      for(let j=0;j<n;j++)
      {
           if(matrix[i][j] == 0){
              ArrI[i] = 1;
              ArrJ[j] = 1;
           }
      }
    }
  

  for(let i=0;i<m;i++)
  {

    for(let j=0;j<n;j++)
    {
      //that rows or columns has a mark then make that cell  = 0;
      if(ArrI[i] == 1 || ArrJ[j] == 1){
         matrix[i][j] = 0;
      }
    }
      
  }

 

};
// TC => O(2*m*n), SC => O(n+m)

//optimal

// what if we do not take the space, make first row as our marking for rows
// and first column as our marking for columns
// but wait whhat about the common point (0,0),

// The reason why we are not marking matrix[0][0] as 0 initially in the second step is to avoid potential inconsistency in modifying the matrix. If we mark matrix[0][0] as 0 at the beginning of the second step, it could lead to incorrect modifications in subsequent steps.

// Here's a concise summary of why matrix[0][0] is not marked as 0 first:

// Dependency of Modifications: Modifying the rest of the matrix (from (1,1) to (n-1, m-1)) is dependent on the values in the first row and first column. If matrix[0][0] is marked as 0 initially, subsequent modifications may become inconsistent.

// Potential Overwrite: By marking matrix[0][0] as 0 initially, subsequent modifications may unintentionally change its value again. For example, when modifying the first row or first column, if matrix[0][0] is 0, it might be modified again, leading to incorrect results.

// Order of Changes: The order of modifications matters. If we first modify the first row and then the first column based on matrix[0][0] and col0, respectively, we ensure that modifications are made correctly without interfering with each other.

// Therefore, to maintain the integrity of the modifications and ensure consistency, it's crucial to avoid marking matrix[0][0] as 0 initially in the second step of the algorithm.



function zeroMatrix(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  let col0 = 1;
  // Step 1: Traverse the matrix and mark 1st row & col accordingly:
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (matrix[i][j] === 0) {
              // Mark i-th row:
              matrix[i][0] = 0;

              // Mark j-th column:
              if (j !== 0) {
                  matrix[0][j] = 0;
              } else {
                  col0 = 0;
              }
          }
      }
  }

  // Step 2: Mark with 0 from (1,1) to (n-1, m-1):
  for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
          if (matrix[i][j] !== 0) {
              // Check for col & row:
              if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                  matrix[i][j] = 0;
              }
          }
      }
  }

  // Step 3: Finally mark the 1st col & then 1st row:
  if (matrix[0][0] === 0) {
      for (let j = 0; j < m; j++) {
          matrix[0][j] = 0;
      }
  }
  if (col0 === 0) {
      for (let i = 0; i < n; i++) {
          matrix[i][0] = 0;
      }
  }

  return matrix;
}


console.log(setZeroes(matrix))
console.log(setZeroesM2(matrix))
console.log(zeroMatrix(matrix))