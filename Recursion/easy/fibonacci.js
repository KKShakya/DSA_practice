// linear


const linear = (n)=>{
  
  let a = 0;
  let b = 1;
 let c;
  for(let i=0;i<n;i++)
  {
        c = a+b;
        a  = b;
        b = c;
  }

  return c;

}

console.log(linear(5)); // 8 (0,1,1,2,3,5,8,13,21...)

//recursion
// for loop with call but here is the catch we have the addition
// of n and n-1; so two calls to maintian that
// second thisng base case , a = 0, n==0 return 0, b=1, n==1 return 1;


const recurs = (n)=>{
 
  if(n==0) return 0;
  if(n==1) return 1;

  let n1 = recurs(n-1);
  let n2 = recurs(n-2);

  return n1+n2; //addition c
  

}