
function printFirstNegativeInteger(K, A) {
    let i = 0, j = 0;
    let Arr = []; // Initialize an array to store the first negative integers.
    let neg = []; // Initialize an array to store negative integers in the current window.
    let N = A.length; // Length of the input array.

    // Sliding window approach.
    while (j < N) {
        // If the element at index j is negative, add it to the 'neg' array.
        if (A[j] < 0) {
            neg.push(A[j]);
        }

        // Move the right pointer j if the window size is less than K.
        if (j - i + 1 < K) {
            j++;
        }
        // If the window size is equal to K:
        else if (j - i + 1 === K) {
            // If there are negative integers in the current window, add the first one to the 'Arr' array.
            if (neg.length > 0) {
                Arr.push(neg[0]);
                // If the element at index i is the same as the first negative integer, remove it from the 'neg' array.
                if (A[i] === neg[0]) {
                    neg.shift();
                }
            } else {
                // If no negative integer is found in the window, add 0 to the 'Arr' array.
                Arr.push(0);
            }
            // Move both pointers to slide the window.
            i++;
            j++;
        }
    }

    // Print the resulting array containing the first negative integers.
    console.log(Arr);
}


printFirstNegativeInteger(2, [-8, 2, -3, 6, 10])


//brute force
// when window size hit cehcking negative in window using for loop


/**
 * Function to print the first negative integer in each subarray of length K in an array.
 * @param {number} N - The length of the array A.
 * @param {number} K - The length of subarrays.
 * @param {number[]} A - The input array.
 * @returns {number[]} - An array containing the first negative integers in each subarray.
 */


 function printFirstNegativeInteger(N, K, A) {
    let i = 0, j = 0, sum = 0;
    let Arr = []; // Initialize an array to store the first negative integers.
    
    // Sliding window approach.
    while (j < N) {
      sum += A[j];
      
      // Move the right pointer j if the window size is less than K.
      if (j - i + 1 < K) {
        j++;
      } 
      // If the window size is equal to K:
      else if (j - i + 1 === K) {
        let negFound = false;
        // Iterate through the current window to find the first negative integer.
        for (let s = i; s <= j; s++) {
          if (A[s] < 0) {
            // If a negative integer is found, add it to the 'Arr' array and set 'negFound' to true.
            Arr.push(A[s]);
            negFound = true;
            break;
          }
        }
        // If no negative integer is found in the window, add 0 to the 'Arr' array.
        if (!negFound) {
          Arr.push(0);
        }
        // Adjust the sum and move both pointers to slide the window.
        sum -= A[i];
        i++;
        j++;
      }
    }
    // Return the resulting array containing the first negative integers.
    return Arr;
  }
  