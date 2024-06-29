// link=>https://leetcode.com/problems/generate-parentheses/description/
 //O = open , C = close,
//  for n =3, whnever we have open we deacrese on eform there
//  asn for close one from there

//                 operaion , input
//                 ""       O-3, C-3

//                     "(",O-2,C-3

// "((",O-1,C-3                            "()", O-2,C-2

// "(((",0,3             "(()",1,2                       "()(",1,2

// "((()",0,2      "(()(",0,2    "(())",1,1        "()((",0,2      "()()",1,1

// "((())",0,1     "(()()",0,1   "(())(",0,1       "()(()",0,1     "()()(",0,1

// "((()))",0,0   "(()())",0,0   "(())()",0,0      "()(())",0,0    "()()()", 0,0


// observations from recusiorn tree;
// Whenever we have count of open brackets equal to the count of close brackets, we have only one choice - that is to use '('. Because, all the brackets till now have been balanced. And we can not start a new sequence with ')'.
// Whenever, count of close bracket is 0, we can only use '('.
// Whenever, count of open bracket is 0, we can only use ')'.
// And for all the remaining cases, we have both the choices.
// We get an answer, when count of open == 0 and count of close == 0.


//let me explain, when you draw recusion tree you will understand but the intution is to genrate a valid parenthesis;
// let suppose , you have added a open bracket '(' to make it valid you need closing bracket, so you are need of one closign bracket so increase its close+1;
// so whenver we add opening bracket we are in search of closing bracket and one opportunity is deducted to opening bracket to so open-1
//if (open > 0) helper(arr, ans + '(', open - 1, close + 1);

// 2. if you were toadd closing bracket, that means you made one step closer to make it valid, that means one step closer so close-1;
 // but we don't need opening bracket toa dd more of it as we are already trying to balanace the current opening brackets

 //when you will draw its recursion tree it will not always have two calls per sub problem;


var generateParenthesis = function(n) {

  function helper(arr, ans, open, close) {

      // Base case: If both open and close parentheses are used up
      if (open == 0 && close == 0) {
          arr.push(ans); 
          return;
      }
      
      // Recursively add a closing parenthesis if there are more to add
      if (close > 0) helper(arr, ans + ')', open, close - 1);
      
      // Recursively add an opening parenthesis if there are more to add
      if (open > 0) helper(arr, ans + '(', open - 1, close + 1);
      // close we did +1 because for every open, we need to add a close to amke valid
      //the controller here is open = n, which is decreasing or same not increasing;
  }

  let arr = []; // Initialize an empty array to store results
  helper(arr, "", n, 0); // Start the recursion with an empty initial string, n opening brackets, and 0 closing brackets
  return arr; // Return the array of valid combinations
};
