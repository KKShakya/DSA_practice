// linear

const iterative = (x,n)=>{

  let ans = 1;
 for(let i=0;i<n;i++)
 {
    ans = ans*x;
 }

 return ans;

}


const linearRecursive = (x,n)=>{
 //base case;
 if(n==0) return 1;
 // x^0 is alsways 1;
 
//  if(n<0) return 1/linearRecursive(x,-n) // this cas is when we are considering negative powers also;
// as x^-n = 1/x^n;

 let xnm1 = linearRecursive(x,n-1);
 let xn = x*xnm1;
 return xn;

 // return x*linearrecursive(x,n-1);

}

// suppose 2^4 = 2*2*2*2   or  2^2 * 2^2;
// lly, 2^5  = 2*2*2*2*    or  2* 2^2 * 2^2;


// so calulate pow(x,n/2) and at last return n%2==0? pow(x,n/2):x*pow(x,n/2);



const logarithmic = (x,n)=>{
   // base case
   if(n==0) return 1;
   
   let xn2 = logarithmic(x,n/2);

    let xn;
   if(n%2==1) xn =  xn*x;
 return xn;
//  return n%2==0? logarithmic(x,n/2):logarithmic(x,n/2)*x;
}

//binary exponentaial 
// To efficiently calculate the power of a number, especially when dealing with large exponents, we can use Binary Exponentiation. We reduce the number of multiplication operations needed to compute the power by breaking down the exponent to its half, smaller operations.

// At each step of the loop, we check whether the current exponent is even or odd.

// If the exponent is even, we square the base as xn = (x^2)n/2.
// If the exponent is odd, the algorithm multiples the result by the base as x^n = x(x^n-1).
// Algorithm

// Step 1: Initialise a variable ans to store the result, starting with 1. Store the original exponent value as well.

// Step 2: Check if the base x is 0 or 1. If so, return the base itself.

// If the exponent is negative, convert the base to its reciprocal and adjust the exponent.
// Step 3: Using a while loop, repeatedly divide the exponent by 2 until it becomes 0. Inside the loop, at each iteration:

// If the current exponent is odd, multiply the result ans by the base x.
// If the current exponent is even, square the base x.
// Step 4: Return the final result.

// 2^10  = (2^2)^5;

// so = (2*2)^5;
// 4^5 = 4*4^4;

// 4^4 = (4*4)^2 =  16^2;
// 16^2 = (16*16)^1






// for negative cases;
const negaLog = (n)=>{

  if (n===0) return 1;
      
  let pow = Math.abs(n);
  
  let result = pow%2===0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2) * x;
  
  return n < 0 ? 1/result : result;
}

// let result = pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;
// If pow (absolute value of n) is even (pow % 2 === 0), recursively call myPow(x * x, pow / 2). This squares x and halves pow, effectively reducing the problem size.
// If pow is odd, recursively call myPow(x * x, (pow - 1) / 2) * x. This squares x and then multiplies by x, reducing pow by 1 and then halving it.
// Handling Negative Exponents:

// return n < 0 ? 1 / result : result;
// If n was originally negative, return the reciprocal of result (1 / result) because 𝑥^−𝑛=1/𝑥^𝑛


