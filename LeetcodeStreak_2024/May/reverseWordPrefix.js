//https: https://leetcode.com/problems/reverse-prefix-of-word/description/


//simple brute force 
// find chraters index 
// reverse that aprt of substring
// and second part of sibstring to it and return;

var reversePrefixBrute = function(word, ch) {
  function getCharIndex(word,ch){
     for(let i=0;i<word.length;i++)
     {
      if(word[i]==ch){
          return i;
      }
     }
     return -1;
  }

  let idx = getCharIndex(word,ch);
  if(idx==-1) return word;
 
  let first = word.substring(0,idx+1);
  let second =word.substring(idx+1)
  let rev  = first.split('').reverse().join('');

  return rev+second;

}

//optimal one is find the the first ocuurence and there itself rever the word
// and return the new found word without any further search

var reversePrefix = function(word, ch) {
  //the most optyimal one find ch and reverse their itlsef
  // Convert the word string into an array of characters
  let wordArr = word.split('');
  
  // Initialize variables
  let start = 0;

  // Iterate through the characters of the word
  for (let i = 0; i < word.length; i++) {
      // Check if the current character is the target character 'ch'
      if (word[i] === ch) {
          // If 'ch' is found, enter a nested loop to reverse the segment
          while (start < i) {
              // Swap characters between 'start' index and 'i' index
              let tmp = wordArr[start];
              wordArr[start] = wordArr[i];
              wordArr[i] = tmp;
              
              // Move the 'start' index forward and 'i' index backward
              start++;
              i--;
          }
          
          // Return the joined array as a string after reversing the segment
          return wordArr.join("");
      }
  }
  
  // If 'ch' is not found, return the original word
  return word;
};