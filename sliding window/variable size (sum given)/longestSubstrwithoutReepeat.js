

// brute
 // for(let i=0;i<n;i++)
//  {
//      sub = sub+s[i];
//     for(let j=i;j<n;j++){
//         if(map.has(s[j])) break;
//         maxLen = max(maxLen,j-i+1);
//     }
//  }




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
            console.log(map, max)
        }
        j++; // Move the end index to the right for the next character
    }

    console.log(max); // Return the maximum length of substring without repeating characters
}

const str = 'abcdbeedebe'
lengthOfLongestSubstring(str)


//with blueprint
function lengthOfLongestSubstringBluePrint(s) {
    let map = new Array(128).fill(0);
    let max = 0, i = 0, j = 0;

    while (j < s.length) {
        const char = s[j].charCodeAt(0);
        map[char]++;

        while (map[char] > 1) {
            const startChar = s[i].charCodeAt(0);
            map[startChar]--;
            i++;
        }

        max = Math.max(max, j - i + 1);
        j++;
    }

    console.log(max);
}

const lengthOfLongestSubstringBest = (s) => {
    //the above code fails for some cases ex-'aab'

    // use this PerformanceTiming
    // Check if the string is empty, return 0 if true
    if (s.length == 0) return 0;

    // Initialize a map to track characters and their indices in the current substring
    let map = new Map();

    // Initialize maxLength to store the maximum length of the substring without repeating characters
    let maxLength = 0;

    // Initialize two pointers i and j for the sliding window approach
    let i = 0; // Start index of the current substring
    let j = 0; // End index of the current substring

    // Iterate through the string
    while (j < s.length) {
        // If the current character doesn't exist in the substring
        if (!map.has(s[j])) {
            // Add the current character to the map along with its index
            map.set(s[j], j);
            // Update maxLength if the current substring length is greater
            maxLength = Math.max(maxLength, j - i + 1);
        } else {
            // If the current character already exists in the substring
            // Slide the window to the right until the duplicate character is removed
            while (s[i] !== s[j]) {
                // Remove characters from the start of the substring until the duplicate character
                map.delete(s[i]);
                // Move the start index to the right
                i++;
            }
            // Remove the duplicate character itself  from the map
            map.delete(s[i]);
            // Move the start index to the right
            i++;
            // Add the current character to the map along with its index
            map.set(s[j], j);
        }
        // Move the end index to the right for the next character
        j++;
    }

    // Return the maximum length of the substring without repeating characters
    return maxLength;
}