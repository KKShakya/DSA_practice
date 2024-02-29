//brute force two loops run

const twoSumBrute = (arr,target)=>{

  let n = arr.length;
  for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
      let sum = arr[i]+arr[j];
      if(sum==target){
        return [i,j]
      }
  }
}
return [-1,-1]
}

//2. mEtjos using map this works well with sorted and unsorted arrays
const twoSumMap = (arr,target)=>{

 // Create a map to store numbers and their indices.
 const mpp = new Map();

 // Iterate through the array.
 for (let i = 0; i < arr.length; i++) {
     const num = arr[i];
     const need = target - num; // Calculate the number needed to reach the target.

     // If the map contains the needed number, return the indices of the current number and the needed number.
     if (mpp.has(need)) {
         return [mpp.get(need), i];
     }

     // Otherwise, store the current number and its index in the map.
     mpp.set(num, i);
 }

 // If no such pair is found, return [-1, -1] to indicate failure.
 return [-1, -1];
}

//3. method only for sorted arrays as we know greater can be found on right
// and smaller on the left

const twoSumSorted = (arr,target)=>{

  let i=0,j=arr.length-1;
 
  // Iterate through the array.
  while(i<j) {
      const num = arr[i];
      const sum  = arr[i]+arr[j] // Calculate the number needed to reach the target.
 
      // If the map contains the needed number, return the indices of the current number and the needed number.
      if (sum==target) {
          return [i,j];
      }else if(sum>target){
        j--;
      }else{
        i++;
      }

  }
 
  // If no such pair is found, return [-1, -1] to indicate failure.
  return [-1, -1];
 }
 
const arr=  [2,15,7,15];
const sorted = [2,7,11,15]
target = 9
 console.log(twoSumBrute(arr,target));
 console.log(twoSumMap(arr,target));
 console.log(twoSumSorted(sorted,target));