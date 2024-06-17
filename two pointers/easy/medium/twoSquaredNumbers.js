// link=>https://leetcode.com/problems/sum-of-square-numbers/description/


// intution 
// we know that in equation a^2+b^2 = c;
// a or b cannot be greater than sqrt(c);
// if thats the case equatioon will never hold;
// This is because if either 
// a orb were greater than , their square alone would exceed c, making it impossible for the sum of squares to be equal to c.

//brute force
// for(a 0 to sqrt(c)){
//   for(b to sqrt(c)){
//     if(qutation holds) return true;
//   }
// }


//optimal two pointer, we know the range 0 to sqrt(c);
// it is sorted like fashion,then why not pull down the calulations

var judgeSquareSum = function(c) {
  let a = 0,b = Math.floor(Math.sqrt(c));
  while(a<=b){
    let curr = a*a + b*b;
    if(curr == c){
      return true;
      // if current product is less than c, means we need more
      // so increase
      }else if(curr<c){
          a++;
          //else decrease
      }else{
          b--;
      }
  }
  return false;
};