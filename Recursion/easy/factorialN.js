// linear

const linear =  (n)=>{
  let fact = 1;
 for(let i=1;i<=n;i++)
 {
  fact = fact*i;
 }
 return fact;
}

// what we ar doing above is making a loop 
// passing it a increased values of i from 1 to n;
// and multiplying i with previous fact;


// recursive;
// build a for loop , make recursive calls(i)
// determine fact, multiply with i that is recursive calls (fact*i);
// at alst return this answer;
// base case fact = 1;, so n==0 return 1;

const recurs = (n)=>{
   if(n==0) return 1;

   let fact =1;
   let ans = fact*recurs(n-1);
   return ans;

   // return n*fact(n-1); //same
}