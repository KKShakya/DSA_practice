
//remeber you need to have some type of map to 
//store prevously target check;
//basically memeoizations
const countAllSub = (n,target,arr)=>{

   return helper(0,n,target,0,arr);
}


const helper = (idx,n,target,sum,arr)=>{
    
  if(idx==n){
    if(sum==target){
      return 1;
    }
    return 0;
  }
 
  let count = 0;

  //take 
  count +=helper(idx+1,n,target,sum+arr[idx],arr);
  //not take
  count +=helper(idx+1,n,target,sum,arr);
   
return count;
}

let arr = [1, 2, 3, 4, 5];
let target = 9;
let result = countAllSub(arr.length, target, arr);
console.log(result);  // Output: true

//if  you want you can  store it in the strign as ans;

