// link=>https://leetcode.com/problems/length-of-last-word/?envType=daily-question&envId=2024-04-01

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.


// brute

var lengthOfLastWord = function(s) {
  console.log(s.trim().split(' ').pop());
  //separate them and pop out last one from array made from split
  return s.trim().split(' ').pop().length;
};

let string = "hello world";
lengthOfLastWord(string);


var lengthOfLastWordAlgo = function(s) {
  let length = 0;
  let i  = s.length-1;
  //can have white aspces at last appended so remove them
  // moving pointer fromm back till fround aletter
  while (i >= 0 && s[i] == ' ') i--;  
  // again then calulate word length till you find a blank space;
   while (i >= 0 && s[i] != ' ') {      
       length++;
       i--;
   }
   return length;
};




