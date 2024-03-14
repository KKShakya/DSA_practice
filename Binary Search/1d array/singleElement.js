//a suingle elemnt is one which has no duplicates
// i.e  arr[i-1]!==arr[i]!=arr[i+1];

// we can use linear search
// hanlding edge cases also

// i==0, arr[i]!==arr[i+1]
// i==n, arr[i-1]!==arr[i];
// n==1, arr[0];

// linear search




function singleNonDuplicate(arr) {
  let n = arr.length; // Size of the array

  // Edge cases:
  if (n === 1) return arr[0];
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

  let low = 1, high = n - 2;
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      // If arr[mid] is the single element:
      if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
          return arr[mid];
      }

      // We are in the left:
      if ((mid % 2 === 1 && arr[mid] === arr[mid - 1])
              || (mid % 2 === 0 && arr[mid] === arr[mid + 1])) {
          // Eliminate the left half:
          low = mid + 1;
      }
      // We are in the right:
      else {
          // Eliminate the right half:
          high = mid - 1;
      }
  }

  // Dummy return statement:
  return -1;
}


//xor method  a^a = 0, a^0 = a,
function singleNonDuplicateXor(arr) {
  let n = arr.length; // Size of the array
  let ans = 0;
  // XOR all the elements
  for (let i = 0; i < n; i++) {
      ans = ans ^ arr[i];
  }
  return ans;
}

// https://takeuforward.org/wp-content/uploads/2023/06/Screenshot-2023-06-28-013418.png

//binary says that duplicate elements have pairs in indexews as (even,odd);
// 1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6 => e,o,e,o,e,o,e,o,e,o,e  only the single elements does not ahve the pair 
// that is arr[i-1]==odd,arr[i+1]==odd,arr[i] = even


// The index sequence of the duplicate numbers in the left half is always (even, odd). That means one of the following conditions will be satisfied if we are in the left half:

// 1. If the current index is even, the element at the next odd index will be the same as the current element.
// 2. Similarly, If the current index is odd, the element at the preceding even index will be the same as the current element.

// The index sequence of the duplicate numbers in the right half is always (odd, even). That means one of the following conditions will be satisfied if we are in the right half:

// 1. If the current index is even, the element at the preceding odd index will be the same as the current element.
// 2. Similarly, If the current index is odd, the element at the next even index will be the same as the current element.

//opytimal one with BInary
function singleNonDuplicateBinary(arr) {
  let n = arr.length; // Size of the array

  // Edge cases:
  if (n === 1) return arr[0];
  if (arr[0] !== arr[1]) return arr[0];
  if (arr[n - 1] !== arr[n - 2]) return arr[n - 1];

  let low = 1, high = n - 2;
  while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      // If arr[mid] is the single element:
      if (arr[mid] !== arr[mid + 1] && arr[mid] !== arr[mid - 1]) {
          return arr[mid];
      }

      // We are in the left:
      if ((mid % 2 === 1 && arr[mid] === arr[mid - 1])
              || (mid % 2 === 0 && arr[mid] === arr[mid + 1])) {
          // Eliminate the left half:
          low = mid + 1;
      }
      // We are in the right:
      else {
          // Eliminate the right half:
          high = mid - 1;
      }
  }

  // Dummy return statement:
  return -1;
}

let arr = [1, 1, 2, 2, 3, 3, 4, 5, 5, 6, 6];
console.log("The single element is:", singleNonDuplicate(arr));
console.log("The single element is Xor:", singleNonDuplicateXor(arr));
console.log("The single element is Binary:", singleNonDuplicateBinary(arr));
