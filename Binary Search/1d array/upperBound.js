// What is Upper Bound?
// The upper bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than the given key i.e. x.
// The upper bound is the smallest index, ind, where arr[ind] > x.


//link => https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/


// the problem say swe can serach for arr[mid]>target;



const upperBound = (arr, target) => {
  let upper = -1;
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    let mid = lo + (hi - lo) / 2 | 0;
    // maybe an answer
    if (arr[mid] > target) {
      upper = mid;
      //look for smaller index on the left
      hi= mid - 1;
  }else {
      lo = mid + 1;
    }

  }
  return upper;
}
const arr = [1, 2, 2, 3, 3, 5, 6];
const target = 4;

// this code above solves the statemetn
//but wait what if that number is not present in the array the lower will get updated by the last elment that is just
//greater than it, seethe output;

// but instead we want -1 if not Present;
// so will update only when arr[mid] == target;

const upperBoundperfect = (arr, target) => {
  let upper = -1
  let lo = 0;
  let hi = arr.length - 1;
    while (lo <= hi) {
        let mid = lo + (hi - lo) / 2 | 0;
        if (arr[mid] == target) {
            upper = mid;
            lo = mid+1
        } else if(arr[mid]>target) {
            hi = mid - 1;
        }else{
            lo = mid+1;
        }

    }
    return upper;
}

console.log(upperBound(arr, target))
console.log(upperBoundperfect(arr, target))