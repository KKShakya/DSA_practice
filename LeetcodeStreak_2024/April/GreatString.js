// link=>https://leetcode.com/problems/make-the-string-great/description/


// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:

// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.

// Input: s = "abBAcC"
// Output: ""
// Explanation: We have many possible scenarios, and all lead to the same answer. For example:
// "abBAcC" --> "aAcC" --> "cC" --> ""
// "abBAcC" --> "abBA" --> "aA" --> ""


// You can say It is like searching for balbanced paranthesis;
// you put opening bracket and then if you find closing bracket corresponding to it you pop
// otherwise insert;


// so if you get ASCII difference of array top and s[i] == 32, you pop otherwise insert

// ******************"A"- 'a' = 32; ***************************


const makeGood = function(s) {
    
  //ascci 
  // "A" -'a' = 32
  let n =s.length;
  let str=  [s[0]];
  //think it like satck validating paranthesiis
  for(let i=1;i<n;i++)
  {
     if(str.length>0 && Math.abs(str[str.length-1].charCodeAt(0)-s[i].charCodeAt(0))==32){
      str.pop();
     }else{
      str.push(s[i]);
     }
  }

  return str.join('');

};


console.log(makeGood("abBAcC"));