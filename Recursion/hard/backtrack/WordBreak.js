// link=>https://leetcode.com/problems/word-break/


//brute force partition the strign into prefix and suffix and then try
// searching prefix is present in wordDict or not
// so we have two choices every time, this make s as go for worst cast TC (2^n);

//that is huge


//optimized way tstore the already solved subPRoblem and if you find it 
// return asnwer from there;

function wordBreak(s, wordDict) {
  // Create a Map to store results of subproblems to avoid redundant calculations
  const memo = new Map();

  function canBreak(s) {
      // If the result for the current string is already computed, return it
      if (memo.has(s)) {
          return memo.get(s);
      }

      //as we go further we will keep dividing s into predix and suffix
      // If the string is empty, it means we have successfully segmented it
      if (s === "") {
          return true;
      }

      // Try splitting the string at every possible position
      for (let i = 1; i <= s.length; i++) {
          // Get the prefix (first i characters) and the suffix (remaining characters)
          const prefix = s.slice(0, i);
          const suffix = s.slice(i);

          //we are checking and also making a call for subProblem
          // Check if the prefix is in the dictionary and if the suffix can be segmented
          if (wordDict.includes(prefix) && canBreak(suffix)) {
              // If both conditions are true, store the result and return true
              memo.set(s, true);
              return true;
          }
      }

      // If no valid segmentation is found, store the result and return false
      memo.set(s, false);
      return false;
  }

  // Start the recursion with the full string
  return canBreak(s);
}


const s = "leetcode";
const wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict));  
