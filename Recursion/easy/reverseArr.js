//

// reverse iterative;

function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
      // Swap 
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;

      left++;
      right--;
  }
}

// Example usage:
let array = [1, 2, 3, 4, 5];
console.log("Original array:", array);

reverseArrayInPlace(array);
console.log("Reversed array:", array);


//recursive 
// base case is when while loop fails that is left>=right return;
// till tehn sawp 
// call is when swap is finished and we move to next pointers,


function reverseArrayInPlaceRecursive(arr, left, right) {
  // Base case: if left pointer is greater than or equal to right pointer, return
  if (left >= right) {
      return;
  }

  // Swap elements 
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;

  // Recursively call with  pointers
  reverseArrayInPlaceRecursive(arr, left + 1, right - 1);
}

// Helper function to simplify function call for users
function reverseArrayInPlace(arr) {
  reverseArrayInPlaceRecursive(arr, 0, arr.length - 1);
}

// Example usage:
array = [1, 2, 3, 4, 5];
console.log("Original array:", array);

reverseArrayInPlace(array);
console.log("Reversed array:", array);
