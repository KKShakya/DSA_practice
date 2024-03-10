// What is Lower Bound?
// The lower bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x.
// The lower bound is the smallest index, ind, where arr[ind] >= x. But if any such index is not found, the lower bound algorithm returns n i.e. size of the given array.

//link => https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/


// the problem say swe can serach for arr[mid]>=target;



const lowerBound = (arr, target) => {
  let lower = -1;
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    let mid = lo + (hi - lo) / 2 | 0;
    if (arr[mid] >= target) {
      lower = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }

  }
  return lower;
}
const arr = [1, 2, 2, 3, 3, 5, 6];
const target = 4;

// this code above solves the statemetn
//but wait what if that number is not present in the array the lower will get updated by the last elment that is just
//greater than it, seethe output;

// but instead we want -1 if not Present;
// so will update only when arr[mid] == target;

const lowerBoundperfect = (arr, target) => {
  let lower = -1;
  let lo = 0;
  let hi = arr.length - 1;
  while (lo <= hi) {
    let mid = lo + (hi - lo) / 2 | 0;
    if (arr[mid] == target) {
      //probale answer
      lower = mid;
      //move to left part as we are searching for lower bound
      hi = mid - 1;
    } else if (arr[mid] > target) {
      //obvious move to left 
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }

  }
  return lower;
}

console.log(lowerBound(arr, target))
console.log(lowerBoundperfect(arr, target))