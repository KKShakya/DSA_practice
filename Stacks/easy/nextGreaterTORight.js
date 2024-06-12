// Given an array of N integers and Q queries of indices, print the number of next greater elements(NGEs) to the right of the given index element. 
// Example:

// Input:  arr     = [3, 4, 2, 7, 5, 8, 10, 6]
//         queries = 2
//         indices = [0, 5]
// Output:  6, 1
// Explanation:  
// The next greater elements to the right of 3(index 0)
// are 4,7,5,8,10,6.  
// The next greater elements to the right of 8(index 5)
// is only 10.



const nextGreater = ()=>{
  let res = [];
        
  for (let i = 0; i < queries; i++) {
      let idx = indices[i];
      let num = arr[idx];
      let cnt = 0;
      
      for (let j = idx + 1; j < N; j++) {
          if (arr[j] > num) {
              cnt++;
          }
      }
      
      res.push(cnt);
  }
  
  return res;
}
