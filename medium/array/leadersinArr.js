// Brute force approach

const leadersBrute = (arr)=>{
 let n = arr.length;
 let ans = [];
  for(let i=0;i<n;i++){
    let leader = true;
     for(let j=i+1;j<n;j++){
      if(arr[j]>arr[i]){
          leader = false;
          break;
      }
     }
     if(leader) ans.push(arr[i]);
  }
  return ans;
}



//2. method (n)
const leadersBetter = (arr)=>{
  let n = arr.length;
  let ans = [arr[n-1]];
  let max = arr[n-1]
   for(let i=n;i>=0;i--){
   
    if(max<arr[i]){
      ans.push(arr[i]);
      max =arr[i];
    }
 
 }

 //this fails
//  let max = arr[0];
//    for(let i=1;i<n;i++){
   
//     if(max<arr[i]){
//       ans.push(arr[i]);
//       max =arr[i];
//     }
 
//  }


 return ans;
}

const arr = [10,22,12,3,0,6];
console.log(leadersBrute(arr))
console.log(leadersBetter(arr))
