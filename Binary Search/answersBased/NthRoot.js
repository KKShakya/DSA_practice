// link=>

// what does nth root say find me 
// n = 3, m = 27 3rd root of 27 = 3;

// what will be the brute force

// two loops calulate i multiplication n times then
//see if ans <= m, probable ans; else break;

const NthroortBrute  = (n,m)=>{


  for(let i=1;i<=m;i++){
    
    let ans=  1;
    for(let j=1;j<=n;j++){

      ans = i*i*i;
    }
    if(ans<=m) ans = i;
    else break;
  }

}



const NthrootBinary = (n,m)=>{

//  we follow same deal of sqrt finding

 let lo =1;
 let hi = m;

 while(lo<=hi){
  let mid = Math.floor((lo+hi)/2);

  // then a for loop till n to multiply mid n time
  // but what if number is 10^9, n = 10, it will become 10^90;
  //is it feasible to accomodate such big number;
  // The answer iS BIG NO;
  // so we say whenever the multiplication of mid crosses the m we stop there the inner for loop/

 }


}

const multi  = (mid,n,m)=>{
  let ans = 1;
  for(let i=0;i<n;i++)
  {
    ans = ans*mid;
    if(ans>m) return 2;
  }
  
 if(ans==m)  return 1;
  return 0;
}


const NthrootBinaryOptimal = (n,m)=>{

  //  we follow same deal of sqrt finding
  
   let lo =1;
   let hi = m;
  
   while(lo<=hi){
    let mid = Math.floor((lo+hi)/2);
      
    if(multi(mid,n,m)==1){
      return mid;
    }else if(multi(mid,n,m)<0){
      lo = mid+1;
    }else{
      hi = mid -1;
    }
  
   }
  return hi;
  
  }

console.log(NthrootBinaryOptimal(3,27))