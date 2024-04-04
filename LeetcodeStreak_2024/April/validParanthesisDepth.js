// link=>https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/

// We can similarly define the nesting depth depth(S) of any VPS S as follows:

// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.


// the problem clearly says that it will be a 100% valiad parantheseis string
// so open == closed parantheseis, So why not calculate max of any one;


var maxDepth = function(s) {
  if(s=="" || s.length==1) return 0;

  let open = 0;
 let depth = 0;
 for(let i=0;i<s.length;i++)
 {
  if(s[i]=='('){
      open +=1;
  }else if(s[i]==')'){
      depth = Math.max(depth,open);
    open -= 1;
  }
 }
return depth;
};

let str = "(1+(2*3)+((8)/4))+1";
let str2 = "3*2-6+4"
console.log(maxDepth(str)); //3
console.log(maxDepth(str2)); //0