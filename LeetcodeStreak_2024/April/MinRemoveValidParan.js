// link=>https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/





// we say we only push index of opening  brackets in our stack
// if we find that at any moment we have the empty stack  then 
// that means that closing bracket is invalid and we put empty string in place of it 
// in the original string


var minRemoveToMakeValid = function(s) {
  let n = s.length;
  let str = [];
  //made it an array
  let split_s = s.split('');

  for(let i=0;i<n;i++)
  {
    //only put index of opening bracket in str//stack
     if(s[i]=='('){
         str.push(i);
     }
     else if(s[i]==')'){
      //if empty stack  then invalid closing bracket
      if(str.length==0){
          split_s[i] = '';
      }else{
        //else we pop the opening bracket off the stack i.e index
          str.pop();
      }
     }
     
  }

  for(let i=0;i<n;i++)
  {
    //at last we fill the string with empty strign at indexes present in stack;
      split_s[str[i]]  ='';
  }

  //at last return the string;
  return split_s.join('');
};