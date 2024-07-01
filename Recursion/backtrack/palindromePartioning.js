// link=>

// palindromes of aab=+ [a,a,b],[aa,b];


// do we partiotion only if the string isPalindrome
  
//                     aab
//              0/       1|       2\
//            a|ab      aa|b         aab //x not a plindrome so this call will not take place
//         1/     2\       \
//     a|a|b     a|ab|     aa|b|      //the second child of first call is not a palindrome partition for 'ab' so we stop
//      |                   ans
//    a|a|b|
//     ans
//
// so we gotor answers


var partition = function(s) {
  let ans = [];
  helper(s,ans,[],0)
  return ans;
};

const helper = (s,ans,ds,idx)=>{
  //base case
  if(idx==s.length){
      ans.push([...ds]);
      return;
  }

  for(let i=idx;i<s.length;i++)
  {
      if(isPalindrome(s,idx,i)){
          ds.push(s.substring(idx,i+1));
          helper(s,ans,ds,i+1);
          ds.pop()
      }
  }
}

const isPalindrome = (s,start,end)=>{
  while(start<=end){
      if(s[start]!=s[end]){
          return false;
      }
      start++;
      end--;
  }
  return true;
}



// Time Complexity: O( (2^n) *k*(n/2) )

// Reason: O(2^n) to generate every substring and O(n/2)  to check if the substring generated is a palindrome. O(k) is for inserting the palindromes in another data structure, where k  is the average length of the palindrome list.

// Space Complexity: O(k * x)

// Reason: The space complexity can vary depending upon the length of the answer. k is the average length of the list of palindromes and if we have x such list of palindromes in our final answer. The depth of the recursion tree is n, so the auxiliary space required is equal to the O(n).