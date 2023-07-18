

const sumOfDivisors = (N)=>
{
    // Write Your Code here
    let sum = 0;

           for(let i=1;i<=N;i++){
              sum += i*(N/i | 0);
              // console.log("div =>",i,N/i)
           }
           return sum;
    
}


const printAllDivisors = (n)=>{
  let divisors = '';
  // for(let i=1;i<=n;i++){
  //   if(n%i == 0){
  //     divisors += i+" ";
  //   }
  // }

  for(let i=1;i*i<=n;i++){
    if(n%i == 0){
      divisors += i+" ";
      if(i !== n/i | 0){
        divisors += n/i + " ";
      }
    }
  }

  return divisors;
}

console.log(sumOfDivisors(4))
console.log(printAllDivisors(4))