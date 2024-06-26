const LongestSubArrawithKUniqueCharacters = (str, k) => {
// Initialize pointers i and j for the sliding window approach.
let i = 0;
let j = 0;

// Initialize a Map to store character frequencies of the string.
let map = new Map();

// Initialize a variable to store the maximum length of the subarray satisfying the condition.
let ans = -1;

// Start the sliding window approach.
while (j < str.length) {
  // Decrement the frequency count of the character at index j in the string.
  if (map.has(str[j])) {
    map.set(str[j], map.get(str[j]) + 1);
  } else {
    map.set(str[j], 1);
  }

  // Move the right pointer j if the window size is less than the specified condition.
  if (map.size < k) {
    j++;
  }
  // If the window size matches the specified condition:
  else if (map.size === k) {
    // Update the ans with the maximum length of the subarray satisfying the condition.
    ans = Math.max(ans, j - i + 1);
    // Move the left pointer i and adjust the count and frequency Map accordingly.
    j++;
  }
  // If the window size exceeds the specified condition:
  else if (map.size > k) {
    // Move the left pointer i until the window size becomes valid again.
    while (map.size > k) {
      if (map.has(str[i])) {
        map.set(str[i], map.get(str[i]) - 1);
        if (map.get(str[i]) === 0) {
          map.delete(str[i]);
        }
      }
      i++;
    }
    j++;
  }
}

// Log the maximum length of the subarray satisfying the condition.
console.log(ans, "maximum length of the subarray");

}

str1 = 'forxxorfxofr'
pat1 = 3

str2 = 'aabacbebebe'
pat2 = 3

LongestSubArrawithKUniqueCharacters(str2, pat2);

// if not found return -1



//stansdard tempalte would be
function maxSubarrayWithAtMostKDistinctChars(arr, k) {
  let i = 0, j = 0;
  let maxLen = 0;
  let map = new Map();

  while (j < arr.length) {
      // Add the current character to the map
      map.set(arr[j], (map.get(arr[j]) || 0) + 1);

      // If the map size exceeds k, shrink the window from the left
      while (map.size > k) {
          map.set(arr[i], map.get(arr[i]) - 1);
          if (map.get(arr[i]) === 0) {
              map.delete(arr[i]);
          }
          i++;
      }

      // Update the maximum length of the window
      maxLen = Math.max(maxLen, j - i + 1);
      j++;
  }

  return maxLen;
}

// Example usage:
let arr = ['a', 'b', 'c', 'a', 'c'];
let k = 2;
console.log(maxSubarrayWithAtMostKDistinctChars(arr, k)); // Output: 3