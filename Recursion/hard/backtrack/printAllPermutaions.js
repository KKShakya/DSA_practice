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
// what we did is we swapped for each itht position;

// let ssay

//                f(1,2,3)
//              /        \            \    //swapper for poition 1 or index =0;
//       f(1,3,2)     f(2,1,3)         f(3,1,2)
//    /      \         /      \         /       \     //swap for position 2 or index =1 ;
// f(1,2,3) f(1,3,2) f(2,3,1) f(2,1,3) f(3,2,1)  f(3,1,2)
//last swap will be by itself because no element to the right or index has reched arr.length;

// so this way we got all our permutatoiosn;

var permute2 = function(nums) {
  let ans = [];
  helper(nums,ans,0);
  return ans;
};

const helper2 = (arr,ans,idx)=>{
  
  if(idx==arr.length){
      ans.push([...arr]);
      return;
  }

 for(let i=idx;i<arr.length;i++){
    //swap for ith poisiton;
     [arr[i],arr[idx]] = [arr[idx],arr[i]];
     helper2(arr,ans,idx+1);
     //backtrack
       [arr[i],arr[idx]] = [arr[idx],arr[i]];
 }

}