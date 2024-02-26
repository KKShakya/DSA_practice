function longestSubstringWithKDistinctChars(str, k) {
    // Initialize a new Map to store characters and their counts
    let map = new Map();

    // Get the length of the input string
    let n = str.length;

    // Initialize two pointers for the sliding window technique
    let i = 0, j = 0;

    // Initialize a variable to track the maximum length of the substring
    let max = -1;

    // Loop through the characters of the string
    while (j < n) {
        // Check if the character at index 'j' is already in the map
        if (map.has(str[j])) {
            // If yes, increment its count in the map
            map.set(str[j], map.get(str[j]) + 1);
        } else {
            // If not, add it to the map with count 1
            map.set(str[j], 1);
        }
        
        // Get the number of unique characters in the current window
        let count = map.size;
        
        // If the count of unique characters is less than 'k',
        // expand the window by moving the right pointer 'j'
        if (count < k) {
            j++;
        }
        // If the count equals 'k',
        // update the maximum length if needed and move 'j' pointer
        else if (count == k) {
            max = Math.max(max, j - i + 1);
            j++;
        }
        // If the count exceeds 'k',
        // shrink the window from the left side by moving 'i' pointer
        else if (count > k) {
            while (map.size > k) {
                // Decrease the count of the character at index 'i'
                map.set(str[i], map.get(str[i]) - 1);
                
                // If the count becomes 0, delete the character from the map
                if (map.get(str[i]) == 0) {
                    map.delete(str[i]);
                }
                
                // Move the left pointer 'i' to shrink the window
                i++;
            }
            // Move the right pointer 'j' after the window is shrunk
            j++;
        }
    }

    // Return the maximum length of the substring with exactly 'k' distinct characters
    console.log(max);
}



let str = 'aabacbebebe';
let k = 3;


longestSubstringWithKDistinctChars(str,k)