// link = https://leetcode.com/problems/palindrome-number/

// const isPalindrome = function(x) {
//   if(x<0) return false;

//   let tmp = x;
//   let rev=0;
//   while(tmp>0)
//   {
//       rev = rev*10 + (tmp%10);
//        tmp = Math.floor(tmp/10);
//   }
//   console.log(rev,x)
//   return x===rev;
// };



// if overflow

const isPalindrome2 = (x)=>{
  //single digit or negative number
if (x<0 || (x!=0 && x%10==0)) return false;
let rev = 0;
while (x>rev){
  // console.log(x,rev)
  rev = rev*10 + x%10;
  x = x/10;
}
return (x==rev || x==rev/10)
}


console.log(isPalindrome2(-121));