/**
 * Function to find the length of the longest substring without repeating characters.
 * @param {string} s - The input string.
 * @returns {number} - The length of the longest substring without repeating characters.
 */
function lengthOfLongestSubstring(s) {
    // Initialize variables
    let max = 1; // Maximum length of substring without repeating characters
    let i = 0; // Start index of current substring
    let j = 0; // End index of current substring
    let map = new Map(); // Map to track characters and their indices in the current substring

    // Iterate through the string
    while (j < s.length) {
        // If the current character already exists in the substring
        if (map.has(s[j])) {
            map.delete(s[i]); // Remove characters from the start of the substring until the duplicate character
            i++; // Move the start index to the right
        } else {
            map.set(s[j], 1); // Add the current character to the map
            max = Math.max(max, map.size); // Update the maximum length if needed
        }
        j++; // Move the end index to the right for the next character
    }

    return max; // Return the maximum length of substring without repeating characters
}
