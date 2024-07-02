// link=>https://leetcode.com/problems/permutations/description/


//brute force says, genrate all permutaions and then return k-1 th;

var getPermutation = function(n, k) {
  let ans = [];
  let freq = [];
  helper(n,k,ans,[],freq);
  return ans[k-1].join('');
};

const helper = (n,k,ans,ds,freq)=>{
 
 if(n==ds.length){
  ans.push([...ds])
  return;
 }

  for(let i=1;i<=n;i++)
  {
        
      if(!freq[i]){
        freq[i] = true;
        ds.push(i);
        helper(n,k,ans,ds,freq);
        ds.pop();
        freq[i] = false
        }
  }



}
 
// TC O(n!) * O(n) for each elemnrt
// SC  O(n!);

// optimize 

//let say we need n =4 ,k=17 th permute
//total will be 24 permtutations , i need to pck up only th 17th one , 16th one if 0 based indexing

// let explore;                   n! = 3! = 6
  //  permutations from n=1, 1 + (2,3,4) => 6 permute (0-5) 
  //  permutations from n=2, 2 + (1,3,4) => 6 permute (6-11)  
  //  permutations from n=3, 3 + (1,2,4) => 6 permute (12-17)  => we will pick up 16th permute from here  
  //  permutations from n=4, 4 + (1,2,3) => 6 permute (18-23) 
  
  // so i will start with n=3, 
  // in n = 3 left
  //  permutations from n=1, 1 + (2,4) => 2 permute (0-1) 12th starts from here 
  //  permutations from n=2, 2 + (1,4) => 2 permute (2-3) 
  //  permutations from n=4, 4 + (1,2) => 2 permute (4-5) 16th is here
  
  //so I will start with n=4,
  // in n = 2 left
  //  permutations from n=1, 1 + (2) => 1 permute (0-1) 16th starts from here 

  // so lat we choose as 1 and 2, this makes our permute as '3412';at k = 17th || 16th(0 based indexing);
 // but how to pick indexes, for n=4, we needed to find 16th so 16/6 = 2 so 2 nd index which is n = 3 left = 16%4 =4
 // lly, n=3, we needed 4th so 4/2 = 2, so agin 2nd index which is n=4, left 4%2 = 0 
 // lly, n=2, we needed 0th so 0/2 = 0, so 0th index which is n=(1,2) nothting left;

 function getKthPermutation(n, k) {
  // Step 1: Calculate the factorial values up to n
  let factorial = [1];
  for (let i = 1; i <= n; i++) {
      factorial[i] = factorial[i - 1] * i;
  }

  // Step 2: Initialize the list of numbers from 1 to n
  let numbers = [];
  for (let i = 1; i <= n; i++) {
      numbers.push(i);
  }

  // Step 3: Convert k to 0-based index (subtract 1)
  k--;

  // Initialize the result array to store the k-th permutation
  let result = [];

  // Step 4: Build the k-th permutation
  for (let i = n; i > 0; i--) {
      // Calculate the index of the next number to be added to the permutation 16/6,then 4/2
      let index = Math.floor(k / factorial[i - 1]);
      
      // Add the number at the calculated index to the result array
      result.push(numbers[index]); 3,4,1,2
      
      // Remove the used number from the numbers array
      // since we use n = 3, in first go we will exclude it and next make prmutes with (1,2,4);
      numbers.splice(index, 1);
      
      // Update k to the remainder of the division, last how many more we needed opr which position
      k %= factorial[i - 1];
  }

  // Join the result array into a string and return it
  return result.join('');
}

// Example usage
let n = 4; // The set of numbers {1, 2, 3,4}
let k = 17; // We want the 4th permutation in lexicographic order
let kthPermutation = getKthPermutation(n, k);
console.log(kthPermutation); // Output: 3412



