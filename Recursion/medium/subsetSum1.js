// link=>https://www.geeksforgeeks.org/problems/subset-sums2234/1


//print all sums of the subsets;
//we calulate the sum, push it in ans array and then return ;
//you can sort it if you want it;

const SubsetSum  = (arr)=>{

  let ans = [];
  helper(0,arr,ans,0);
console.log(ans.sort((a,b)=>a-b));
}


const helper = (idx,arr,ans,sum)=>{
  //base case

  if(idx==arr.length){
      ans.push(sum);
      return;
  }

  //take
   helper(idx+1,arr,ans,sum+arr[idx]);
   //not take
   helper(idx+1,arr,ans,sum);
}




let arr =[5,4,1];
SubsetSum(arr);
