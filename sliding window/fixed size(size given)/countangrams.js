// method 1 
// create all anagrams of pattern
// for => for,fro,rof,rfo,orf,ofr  O(n!);
// / and then when your window size hits check if your window == any of the nagarams

//  very high time complexity


// method 2 
// store in map the pattern letters count and then if you get hat letter
// ehile traversing window decrease it s frequencty from map and then a variable
// decrease which is size of your map at window hit if(count==0) ans++;
// also while maintaing window size j-i+1 == k,increase letters frequency and count


// Define a function countAnagrams that takes two parameters: str (a string) and pat (a pattern to search for anagrams).
const countAnagrams = (str, pat) => {

  // Initialize pointers i and j for the sliding window approach.
  let i = 0;
  let j = 0;

  // Initialize a Map to store character frequencies of the pattern.
  let map = new Map();
  // Initialize a variable to store the count of anagrams found.
  let ans = 0;
  // Store the length of the pattern for easier reference.
  let k = pat.length;
  
  // Populate the Map with character frequencies of the pattern.
  for (let i = 0; i < k; i++) {
    if (map.has(pat[i])) {
      map.set(pat[i], map.get(pat[i]) + 1);
    } else {
      map.set(pat[i], 1);
    }
  }
  
  // Log the frequency Map for reference.
  console.log(map);
  
  // Initialize a count variable to keep track of unique characters in the current window.
  let count = map.size;


  // Start the sliding window approach.
  while (j < str.length) {
    
    // Decrement the frequency count of the character at index j in the string.
    if (map.has(str[j])) {
      map.set(str[j], map.get(str[j]) - 1);
      // If the frequency becomes zero, decrement the overall count of unique characters.
      if (map.get(str[j]) == 0) {
        count--;
      }
    }

    // Move the right pointer j if the window size is less than the pattern length.
    if (j - i + 1 < k) { j++ }
    // If the window size matches the pattern length:
    else if (j - i + 1 == k) {
      // If all characters in the window are part of the anagram, increment the ans count.
      if (count == 0) {
        ans++;
      }
      
      // Move the left pointer i, and adjust the count and frequency Map accordingly.
      if (map.has(str[i])) {
        // Incrementing the frequency of the character being removed from the window.
        map.set(str[i], map.get(str[i]) + 1);
        // Increment the overall count of unique characters.
        if(map.get(str[i])!==0) count++;
      }
      // Move both pointers to slide the window.
      i++;
      j++;
    }
  }

  // Log the total count of anagrams found.
  console.log(ans, "  anagrams found");
}

str1 = 'forxxorfxofr'
pat1 = "for"

str2 = 'aababaababa'
pat2 = 'aaba'

countAnagrams(str1, pat1)


//mthod 3 for long inputs

  /**
   * Searches for occurrences of a pattern in a text.
   * @param {string} pat - The pattern to search for.
   * @param {string} str - The text in which to search for the pattern.
   * @return {number} - The number of occurrences of the pattern in the text.
   */
   const countAnagramsBest = (str, pat)=> {
      // Initialize arrays to store the frequency of characters in the pattern and text.
      let textFreq = new Array(26).fill(0);  
      let patFreq = new Array(26).fill(0);
      
      // Initialize a variable to store the count of occurrences.
      let res = 0;
      let k = pat.length; // Length of the pattern
      
      // Count the frequency of characters in the pattern.
      for(let i = 0; i < k; i++) {
          patFreq[pat[i].charCodeAt(0) - 97]++;
      }
      
      // Initialize pointers for the sliding window approach.
      let i = 0, j = 0;
      
      // Slide the window through the text.
      while(j < str.length) {
          // Increment the frequency of the character at index j in the text.
          textFreq[str[j].charCodeAt(0) - 97]++;
          
          // If the window size is less than the pattern length, move the right pointer.
          if(j - i + 1 < k) {
              j++;
          } 
          // If the window size equals the pattern length, check for an occurrence.
          else if(j - i + 1 == k) {
              // If the frequency arrays match, increment the result count.
              if(patFreq.join('') === textFreq.join('')) {
                  res++;
              }
              
              // Slide the window by decrementing the frequency of the character at index i.
              textFreq[str[i].charCodeAt(0) - 97]--;
              i++;
              j++;
          }
      }
      
      // Return the total count of occurrences found.
     console.log(res,"from best");
  }

  countAnagramsBest(str1,pat1)
