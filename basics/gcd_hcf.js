
function gcd(a,b){
while(a>0 && b>0){
  let rem = a%b;
  a =b;
  b= rem;
  if(b==0){
    return a;
  }
}
return 1;

}


// divisor becomes dividend and remiander becomes divisor

function rec_gcd(a,b){
  if(b==0) return a;

  return rec_gcd(b,a%b);
}


