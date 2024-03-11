

function search(arr, n, k) {
  let low = 0, high = n - 1;
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      // if mid points to the target
      if (arr[mid] === k) return mid;

      // if left part is sorted
      if (arr[low] <= arr[mid]) {
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
  return -1;
}

let arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
let n = 9, k = 1;
let ans = search(arr, n, k);
console.log(ans);