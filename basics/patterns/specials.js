const spiral = (n=4)=>{
 

  for(let i=0; i<2*n-1; i++) {
    let print ='';

    for(let j=0; j<2*n-1; j++) {
     let top = i;
     let bottom = j;
     let left = (2*n -2)-i;
     let right = (2*n -2)-j;
     print  += n-Math.min(Math.min(top,bottom),Math.min(left,right))+" "
    }
    console.log(print)
    // m=k--;
  }
}
spiral(5)

// Do a dry run of it 



// The outer loop begins with i equal to 0.

// Inner loop:

// When j is 0:

// top is 0 (distance from the top edge).
// bottom is 0 (distance from the bottom edge).
// left is 8 (distance from the left edge).
// right is 8 (distance from the right edge).
// Minimum of these distances is 0.
// print becomes "5 ".
// When j is 1:

// top is 0.
// bottom is 1.
// left is 8.
// right is 7.
// Minimum of these distances is 0.
// print becomes "5 5 ".
// ... (This continues for all values of j in the first row)

// After the inner loop completes the first row, it prints "5 5 5 5 5 5 5 5 5 " to the console.

// The outer loop increments i to 1.

// Inner loop (for the second row):

// When j is 0:

// top is 1.
// bottom is 0.
// left is 7.
// right is 8.
// Minimum of these distances is 0.
// print becomes "5 5 5 5 5 5 5 5 5 \n5 " (newline indicates the start of a new row).
// When j is 1:

// top is 1.
// bottom is 1.
// left is 7.
// right is 7.
// Minimum of these distances is 1.
// print becomes "5 5 5 5 5 5 5 5 5 \n5 4 ".
// ... (This continues for all values of j in the second row)

// After the inner loop completes the second row, it prints "5 5 5 5 5 5 5 5 5 \n5 4 4 4 4 4 4 4 5 " to the console.

// This process repeats for all rows and columns until the entire spiral is printed to the console. Each number in the pattern is determined by the distances from the four edges as described in the code.



const stSpSt = (n=4)=>{

  console.log("\npattern increase decrese")
let st = 1;
let sp = 2*n-1;

for (let i=1; i<=n; i++){
  let tri = ''
  for (let j=1; j<=i;j++){
    tri += j
  }
  for (let j=1; j<=sp;j++){
  tri+=" "
  }
  for (let j=i; j>=1;j--){
     tri += j
  }
  sp-=2;
    console.log(tri)
  }

}

stSpSt(4)




