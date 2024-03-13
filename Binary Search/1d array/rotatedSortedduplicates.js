// link=> https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/

// you cans see since it is sorted and rotated same scenarios of pick sorted and check if 
//target lies in range if not update the range(left half/right half);

// but what if we miss something
// [3,1,2,3,3,3,3]  target  = 1, 
// arr[mid]= 3, arr[low]<=arr[mid], correct also arr[low]<=1<=arr[mid]=>false
// so move to right half i.e. lo mid +1, but target = 1 lies in left half and you eleimeniated it;

// so here is the catch if arr[low]==arr[mid]==arr[hi], then decrease your search space
//since if middle is target we could hav egot it, but there isa chance of missing target inthis case
// and eliminating two equal boundaries can say pur target lies int that so low++, hi--;






var search = function(arr, k) {
  let low = 0, high = arr.length-1;
while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // if mid points to the target
    if (arr[mid] === k) return true;
// the only difference from the first one, trickly case, just updat left and right
          if( (arr[low] == arr[mid]) && (arr[high] == arr[mid]) ) {++low; --high;}

    // if left part is sorted
   else if (arr[low] <= arr[mid]) {
        if (arr[low] <= k && k <= arr[mid]) {
            // element exists
            high = mid - 1;
        } else {
            // element does not exist
            low = mid + 1;
        }
    } else { // if right part is sorted
        if (arr[mid] <= k && k <= arr[high]) {
            // element exists
            low = mid + 1;
        } else {
            // element does not exist
            high = mid - 1;
        }
    }
}
return false;
}



let arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
let edge = [3,1,2,3,3,3,3];

let n = 9, k = 1;
let ans = search(arr, n, k);
let edgeAns = search(edge, n, k);
console.log(ans);
console.log(edgeAns);