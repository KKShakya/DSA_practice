// link=>https://leetcode.com/problems/subsets-ii/

//same subsetSum but no duoplicates allowed;

// if no duplicates then we can say we go for every index

const SubsetSum  = (arr)=>{

  let ans = [];
  helper(0,arr,ans,0,[]);
console.log(ans);
}


const helper = (idx,arr,ans,sum,comb)=>{
  //base case not present, why becasue we are going for every index till arr.length;
  // so this says our recursion stops at arr.length;

  
  ans.push([...comb]);
     

  
  for (let i = idx; i < arr.length; i++) {
     
      if (i > idx && arr[i] === arr[i - 1]) {
          continue; //no duplaictes
      }

  
      comb.push(arr[i]);
      helper(i + 1, arr, ans, sum + arr[i],comb);
      comb.pop();  
  }
}




let arr =[5,4,1];
SubsetSum(arr);


