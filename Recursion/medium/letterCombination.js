// link=>https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

// we are given a string of of digits from 2 to 9 inclusive
// and a leeter pad of mobile phones, so 1, 0,#,* has no menaing
// we just need from 2 to 9, 
// so let codes = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];


//we say pick number from given digits 
// pick it scorrsponding codes from codes array;
// and add each codes character ex=> 'a' of 'abc' to your answer/result

var letterCombinations = function(digits) {
  if(digits.length==0) return [];
  let ans = [];
  helper(digits,0,'',ans);
  return ans;

};
let codes = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
const helper = (digits,idx,current,ans)=>{
 //base case
 if(idx==digits.length){
  //last push the ans to datastructure storage;
  ans.push(current)
  return
 }
 
 //pick digits number
 let singleDigit = digits[idx]; // 2-> then 3
 //get corresponding code
 let getCodes = codes[singleDigit]; //abc-> then def

  for (let i = 0; i < getCodes.length; i++) {
    //add each code to ans
      let ch = getCodes[i]; // 'a', 'b', 'c'
      helper(digits, idx + 1, current + ch, ans);
  }

 return ans;
}

let digits = '7272';

console.log(letterCombinations(digits)[0])
console.log(letterCombinations(digits))