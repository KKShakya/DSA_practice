//find the aelement in an array that appears majority of greater than n/2 times. (n==size of array)

// brute
//two for loops, oute rfor each element
// inner for getting the count of that elemnt
// and finally return the ans if count>n/2 return arr[i];

const majorityBrute  = (arr,n)=>{

   // If there's only one element in the array, it's the majority element by default
   if (n === 1) {
    return arr[0];
  }

  // Calculate the threshold for majority
  let majority = Math.floor(n / 2);

  // Iterate through the array
  for (let i = 0; i < n; i++) {
    let count = 1; // Initialize count for the current element

    // Count occurrences of the current element in the remaining array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }

    // If the count exceeds the majority threshold, return the current element as the majority element
    if (count > majority) {
      return arr[i];
    }
  }

  // If no majority element is found, return the first element of the array
  return arr[0];

}


//beeter is to use ahshmap

const majorityBetter = (nums,n)=>{
   // Create a map to store the count of each element
   let map = new Map();

   // Calculate the threshold for majority
   let majority = Math.floor(n / 2);
 
   // Iterate through the array
   for (let i = 0; i < n; i++) {
     // If the map already contains the current element, increment its count
     if (map.has(nums[i])) {
       map.set(nums[i], map.get(nums[i]) + 1);
 
       // If the count of the current element exceeds the majority threshold, return it as the majority element
       if (map.get(nums[i]) > majority) {
         return nums[i];
       }
     } else {
       // If the map doesn't contain the current element, initialize its count to 1
       map.set(nums[i], 1);
     }
   }
 
   // If no majority element is found, return the first element of the array
   return nums[0];
}



//optimal is without using storage space
const majorityOptimal = (arr,n)=>{
  let cnt = 0; // Initialize count
  let el; // Initialize element

  // Applying the Boyer-Moore Majority Vote algorithm
  for (let i = 0; i < n; i++) {
    if (cnt === 0) {
      cnt = 1;
      el = arr[i]; // Store the current element as the potential majority element
    } else if (el === arr[i]) {
      cnt++; // Increment count if the current element matches the potential majority element
    } else {
      cnt--; // Decrement count if the current element is different from the potential majority element
    }
  }

  // Count the occurrences of the potential majority element in the array
  let cnt1 = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === el) {
      cnt1++;
    }
  }

  // Check if the stored element is the majority element by verifying if it appears more than half of the array's length
  if (cnt1 > Math.floor(n / 2)) {
    return el; // Return the majority element
  }

  return -1; // Return -1 if no majority element is found
}

const arr = [4,4,2,4,3,4,4,3,2,4];
const n = arr.length;
console.log("majority brute : ",majorityBrute(arr,n))
console.log("majority better : ",majorityBetter(arr,n))
console.log("majority Optimal  : ",majorityOptimal(arr,n))