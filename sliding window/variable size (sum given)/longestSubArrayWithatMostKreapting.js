
 function longestSubstringWithKRepeating(s, k) {
  if (s.length === 0 || k <= 0) {
    return 0;
  }

  let maxLength = 0;
  const map = new Map(); 
  let i = 0; 

  while(j<s.length) { 

    
    map.set(s[j], (map.get(s[j]) || 0) + 1);

    // Check the most frequent character in the current window
    let maxFreq = Math.max(...map.values());

    // If the most frequent character's count is greater than k, shrink the window
    while (maxFreq > k) {
      map.set(s[i], map.get(s[i]) - 1);

      if (map.get(s[i]) === 0) {
        map.delete(s[i]);
      }

      i += 1;

      // Recalculate the maximum frequency in the current window
      maxFreq = Math.max(...map.values());
    }

    maxLength = Math.max(maxLength, j - i + 1);
    j++;
  }

  return maxLength;
}

// Example usage:
const s = "aaabbcccc";
const k = 2;
console.log(`The length of the longest substring with at most ${k} repeating characters is: ${longestSubstringWithKRepeating(s, k)}`);
