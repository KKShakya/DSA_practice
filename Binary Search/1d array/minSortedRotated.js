// link=>https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/


// Imagine an array 4,5,6,7,0,1,2,  what binary search tells us is to eliminate a half array to reduce search space 
// so taht we can easily find the answer
// if array is sorted 1,2,3,4,5,  you can say the minimum is the left most element arr[low]
//so what if we find the sorted half and say upadte the minimum with that half left most part
// similary if not sorted then it means the mid elements is the minimum,
// take more rotated exmpales 4,5,1,2,3 mid = 1, lo = 4, 4<=1 NO, so not sorted,but minimum is 1;
// so in that case upadte the  in with arr[mid];

//Now for elimination if we find minimum in any half discard that half
//because we have found the probalble minimum and we don't need that sorted part again for minmimum calacualtion;


var findMin = function (arr) {
  let low = 0, high = arr.length - 1;
  let ans = Infinity;
  if (arr[low] < arr[high]) return arr[low];
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);


    if (arr[low] <= arr[mid]) {
      //left half sorted
      ans = Math.min(ans, arr[low]);
      //move to right half
      low = mid + 1;
    } else {
      //right half may or may not be sorted
      ans = Math.min(ans, arr[mid]);
      //but we eleimniate this half,as we got min of this half as arrr[mid]
      high = mid - 1;
    }
  }
  return ans;
};

const arr = [4, 5, 6, 7, 0, 1, 2];
const arr1 = [4, 5, 1, 2, 3];

console.log(findMin(arr))
console.log(findMin(arr1))
