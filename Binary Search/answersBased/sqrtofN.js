// link=>

//sqrt can't be grater than number itself;
//brute force 1
const sqrtBrute1 = (n)=>{
 let ans =1 ;
  for(let i=1;i<=n;i++)
  {
     if(i*i<=n){
      ans = i;
     }
     if(i*i>n) break;
  }
return ans;

}


// /brute 2
// sqrt of a number is always less than half of its number
// take any example 36=> 6 lesstahan 36/2,  25=> 5 less tahn 25/2, 12~3.45 lesstahn 12/2;

const sqrtBrute2 = (n)=>{
  let ans =1 ;
  let len =  Math.floor(n/2)
   for(let i=1;i<=len;i++)
   {
      if(i*i<=n){
       ans = i;
      }
      if(i*i>n) break;
   }
 return ans;
 
 }

//  optimal 1 usin ginbuilt sqrt method O(logn);


// optimnal 2 binary search


const sqrtBinary = (n)=>{
  let lo = 1;
  let hi = n;

  while(lo<=hi){
    let mid = Math.floor((lo+hi)/2);

    if(mid*mid<=n){
      //probalbe answer you got but can be exact
      //if you look above low = mid+1;
  
      lo = mid+1;
    }else{
      //if it is greater then look below number so decrease the high
      hi  = mid-1;
    }
  }
  
  // return hi because at the end of all calulations it is standing on the probable answer
  // when crosses each other so, retrun lo-1/hi
  return hi;

}

let n = 36;
console.log(sqrtBrute1(n))
console.log(sqrtBrute2(n))
console.log(sqrtBinary(n))


