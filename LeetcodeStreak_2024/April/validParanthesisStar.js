// link=>https://leetcode.com/problems/valid-parenthesis-string/description/


// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 

// nor mally for valid paranthesisi we say
// forloop
// if s[i]=='(' open++;
// else open--;

// if(open <0) return false;


// but here star can alos become either screenLeft,right or empty string to validate the string

// so our open bracket range goes from [openMin, openMax]
//openMin is when you say you have parenthesis, but openMax also counts for '*' value


const checkValidString = function(s) {
  let openMin = 0, openMax = 0;
  let n = s.length;
  for(let i=0;i<n;i++){
      if(s[i]=='('){
          //simple both will increase
          openMin++;
          openMax++;
      }
      else if(s[i]==')'){
          //simle both will decrease
          openMin--;
          openMax--;
      }else{
          //* can become a left/right paranrthesi
          openMin--;//right parentheseis
          openMax++; //left paranthesis
      }

      //if ant any moment we got negative that means closing brackets are more
      if(openMax<0) return false;
      //can't afford negative openMin, so if negative also
      //update with 0;
      openMin = Math.max(openMin,0)
  }
  //balanced or not
return openMin==0;
};