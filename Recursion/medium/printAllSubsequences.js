//  A subseuene is a part of  an array not neccesarily contiguous.
// where as subarray is contiguous 


// so subseuence of arr = [3,1,2] are [],[1],[2],[3],[1,2],[3,1],[3,2],[3,1,2]
// so a array of lengt has 2^n subseuqnce;

//iterative approcah would to do a power set/

// let say for n = 3 , we have 3 spots
// _ _ _ 
// 0,1,2, we can fill each two ways either take the number or not take it;

// for first spot choosing 3 or not choosing it
// lly, for second spot 1, and for third 2; and we end up at all sequence
//but why powerset and bit;

// you can see if write binary set for 3 spots how will it look

 //0  is not set ,1 is set

//  0 = 0,0,0   => _ _ _  =>  []
//  1 = 0,0,1   => _ _ 2  =>  [2]
//  2 = 0,1,0   => _ 1 _  =>  [2]
//  3 = 0,1,1   => _ 1 2  =>  [1,2]
//  4 = 1,0,0   => 3 _ _  =>  [3]
//  5 = 1,0,1   => 3 _ 2  =>  [3,2]
//  6 = 1,1,0   => 3 1 _  =>  [3,1]
//  7 = 1,1,1   => 3 1 2  =>  [3,1,2]


// so whoervers index bit is set we take that into consideration;


function printSubsequencesIterative(arr) {
  let n = arr.length;
  let total = Math.pow(2, n); // There are 2^n possible subsequences

  for (let i = 0; i < total; i++) {
      let subsequence = [];
      for (let j = 0; j < n; j++) {
          // Check if j-th bit in i is set. If set, include arr[j] in the subsequence
          if (i & (1 << j)) {
              subsequence.push(arr[j]);
          }
      }
      console.log(subsequence);
  }
}

// Example usage:
let arr = [1, 2, 3];
printSubsequencesIterative(arr);


//Recursive 
// we go with same approach saying we take it and we don't take it;

function printSubsequencesRecursive(arr) {
  function helper(index, current) {
      // Base case: If we have reached the end of the array, print the current subsequence
      if (index === arr.length) {
         // or a for loop to print the subseuqnce array;
         //if we are not using the empty string

          console.log(current);
          return;
      }

      // Include the current element in the subsequence
      helper(index + 1, current + arr[index]);
      
      //here we need to rember this that while returnnig if
      //we areusing array then we need to remove last element of array
      //arr.pop(); so  we can perform furhter with not take operation; 

      // Exclude the current element from the subsequence
      helper(index + 1, current);
  }

  helper(0, '');
}

// Example usage:
 arr = [1, 2, 3];
printSubsequencesRecursive(arr);

