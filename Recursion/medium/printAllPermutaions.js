// link=>https://leetcode.com/problems/permutations/


//we say that Permutations of an array refer to all possible arrangements of its elements. 
//For example, given an array [1, 2, 3], the permutations would include [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], and [3, 2, 1].

// sowe say we fill our storage until it has acquired all elemnets and also once taken cannot be taken;
// so we will make a  call only for taking the elements not for not taking;
// so to keep its track we kind of have map that says the elemnt has been taken or not;


var permute = function(nums) {
  let ans = [];
  let freq = []
  helper(nums,ans,[],freq);
  return ans;
};

const helper = (arr,ans,ds,freq)=>{
  
  if(ds.length==arr.length){
      ans.push([...ds]);
      return;
  }

 for(let i=0;i<arr.length;i++){
    //if not already taken//visited
    if(!freq[i]){
      //mark as taken
      freq[i] = true
      //then take it
      ds.push(arr[i]);
      helper(arr,ans,ds,freq);
      //backtrack
      ds.pop();
      freq[i] = false;
    }
 }

}
// SC = O(n!)
// TC  = O(n*n!)


// to deacrease the SC we can do the inplace swaps