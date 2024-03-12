// link => 

//O(n) time complexity worst case;
var findPeakElement = function(arr) {
  let n = arr.length;
  for(let i=0;i<n-1;i++)
  {
      if(i==0 && arr[i]>arr[i+1]){
          return i;
      }
      else if(arr[i]>arr[i+1] && arr[i]>arr[i-1]){
          return i;
      }
   
  }
  return n-1;
};


const arr = [1,2,1,3,5,6,4] //two peak elemets 2 and 6 return any one

console.log(findPeakElement(arr));


// binary search

// mid = (low+high) // 2 
// Check if arr[mid] is the peak element:
// If arr[mid] > arr[mid-1] and arr[mid] > arr[mid+1]: If this condition is true for arr[mid], we can conclude arr[mid] is the peak element. We will return the index ‘mid’.

// If arr[mid] > arr[mid-1]: This means we are in the left half and we should eliminate it as our peak element appears on the right. So, we will do this:
// low = mid+1.

// Otherwise, we are in the right half and we should eliminate it as our peak element appears on the left. So, we will do this: high = mid-1. This case also handles the case for the index ‘mid’ being a common point of a decreasing and increasing sequence. It will consider the left peak and eliminate the right peak.

const peakElement = (arr)=>{

  let n  = arr.length;
  let lo = 0;
  let hi = arr.length-2;

 // Edge cases:
 if (n === 1) return 0;
 if (arr[0] > arr[1]) return 0;
 if (arr[n - 1] > arr[n - 2]) return n - 1;


  while(lo<=hi){
    let mid = Math.floor((lo + hi) / 2);

    // If arr[mid] is the peak:
    if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1])
        return mid;

    // If we are in the left:
    if (arr[mid] > arr[mid - 1]) lo = mid + 1;

    // If we are in the right:
    // Or, arr[mid] is a common point:
    else hi = mid - 1;
  }

return -1;
}

console.log(peakElement(arr));