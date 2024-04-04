// link=>https://leetcode.com/problems/largest-odd-number-in-string/description/https://leetcode.com/problems/largest-odd-number-in-string/description/


// Example 1:

// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.
// Example 2:

// Input: num = "4206"
// Output: ""
// Explanation: There are no odd numbers in "4206".
// Example 3:

// Input: num = "35427"
// Output: "35427"
// Explanation: "35427" is already an odd number.
 

// if last digit is odd return the string 
// else remove the last elemnet

/**
 * @param {string} num
 * @return {string}
 */
 var largestOddNumber = function(str) {
  //looking for lasrgest gives,remove one 
  // letter from last and see last digit is odd or not;
 
 for(let i=str.length-1;i>=0;i--)
 {
  if(Number(str[i])%2==1){
      return str.substring(0,i+1);
  }else{
      str.slice(0,-1);
  }
 }
  
return ""

};