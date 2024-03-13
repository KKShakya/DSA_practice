
// binary search says that if array is sorted  I can help you in getting the target in log n time
// dividing the array in two sorted halves

// so 1,2,3,4,5,6   arr[mid] = 3
//left sorted gaurantees arr[low/0]<= arr[mid]
//right sorted gaurantees arr[mid]<= arr[hi/n-1];

// do if sorted and rotated that mena s at some pivot point left is sorted and right is sorted
// ex - 7 ,8,9,1,2,3,4,5,6  around 1 left is ortd and right is sorted;
// now if i need to find target  = 1, arr[mid] = 2, arr[low] = 7 <= arr[mid]=2, => NO
// that means right portion sis sorted, but do i go to right half and get the target = > a BIG NO;
// so we need to check if our target lies in the range of lo to mid or mid to high;


//how can we BE sure that chekc gaurantees the target lies in given range, the first point array is orted and rotated,
//so if target lies in arr[low]<=target && target<= arr[mid] we go on left hi = mid-1;
// else we go to right and this we perform for left sorted part and right sorted part both;
 

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