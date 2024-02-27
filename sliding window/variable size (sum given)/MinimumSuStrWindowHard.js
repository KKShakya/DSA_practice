/**
 * Finds the minimum window substring of a given string 'str' containing all characters from another string 't'.
 * @param {string} str The input string to search within.
 * @param {string} t The target string to find all characters from.
 * @return {string} The minimum window substring containing all characters from 't', or an empty string if no such substring exists.
 */
 var minWindow = function(str, t) {
  // If the length of 'str' is less than the length of 't' or 'str' is empty, return an empty string
  if (str.length < t.length || str.length == 0) {
      return "";
  }

  let i = 0, j = 0, min = Infinity; // Initialize pointers 'i' and 'j' and minimum length 'min'
  let map = new Map(); // Initialize a map to store character counts
  let start = 0, end = 0; // Initialize start and end indices of the minimum window substring

  // Populate the map with characters from 't'
  for (let i = 0; i < t.length; i++) {
      if (map.has(t[i])) {
          map.set(t[i], map.get(t[i]) + 1);
      } else {
          map.set(t[i], 1);
      }
  }

  let count = map.size; // Initialize 'count' to the number of unique characters in 't'
  
  // Loop through the string 'str'
  while (j < str.length) {
      // Update the map and 'count' for each character encountered in 'str'
      if (map.has(str[j])) {
          map.set(str[j], map.get(str[j]) - 1);
          if (map.get(str[j]) == 0) {
              count--;
          }
      }
    
      // Slide the window until all characters from 't' are found
      while (count == 0) {
          // Update the minimum length and window indices
          if (min > j - i + 1) {
              min = j - i + 1;
              start = i;
              end = j + 1;
          }
          // Slide the window by incrementing 'i' and updating the map and 'count'
          if (map.has(str[i])) {
              map.set(str[i], map.get(str[i]) + 1);
              if (map.get(str[i]) > 0) {
                  count++;
              }
          }
          i++;
      }
      j++;
  }
  
  // Return the minimum window substring or an empty string if no such substring exists
  return min == Infinity ? "" : str.substring(start, end);
};

// Test
const str = "ADOBECODEBANC";
const t = "ABC";
console.log(minWindow(str, t));
