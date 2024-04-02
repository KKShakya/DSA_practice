// link=>https://leetcode.com/problems/isomorphic-strings/description/

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true

// e => a;
// g => t;
// g => t;    //every cahracters is mapping to something

// note 1: so we can say frequency of s[i] should be equal to t[i];

// example 2:


let s ="bbbaaaba", t = "aaabbbba"

// b => a,  b=>a, b=>a,a=>b, a=>b, a=>b, b=>b,a=>a;
// let see our statement note 1: hold true or not;
// 4*b == 4*a, both strings have it but the naswer is they are not isomorphic;
// The main condition here is 's' can be raplcaed to get "t". So 's' can oonly map to 't',not to any other + itself also;
// ABOVE CASE 1: b=>b, a=>a, which should not be;

//so once a character in S matches another in T, there frequncy should remain euqal coressponding to eaach other










var isIsomorphic = function(s, t) {
  if(s.length!==t.length) return false;
   
   let m1 = {};
   let m2 ={};
   for(let i=0;i<s.length;i++)
   {
    //frequency does not matches then
      if(m1[s[i]]!=m2[t[i]]){
          return false;
      }else{
        // keep updating the frequency,
        // at last
        // m1 = {e:1,g:3}, m2={a:1,b:3}
          m1[s[i]] = i+1;
          m2[t[i]] = i+1;
      }
      console.log(m1,m2);
   }
return true;
};


console.log(isIsomorphic(s,t))