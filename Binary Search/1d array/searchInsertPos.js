// link =>

//it is similar to pos bound it is just that if you observe
//if found that is the anser but not found that means it should be at the last
//as we are finding arr[mid]>=target so greater than also gives the probable answer

var searchInsert = function(arr, target) {
  let lo = 0;
  let hi = arr.length - 1;
    let pos = hi+1;
  while (lo <= hi) {
    let mid = lo + (hi - lo) / 2 | 0;
    if (arr[mid] >= target) {
      pos = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }

  }
  return pos;
};

const arr = [1, 2, 2, 3, 3, 5, 6];
const target = 7;
console.log(searchInsert(arr,target));