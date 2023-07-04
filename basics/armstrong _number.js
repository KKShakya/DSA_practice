// link = https://practice.geeksforgeeks.org/problems/armstrong-numbers2727/1



function armstrongNumber(n){
  //code here
  let num = n;
  let sum =0;
  while(num>0)
  {
      sum += (num%10)**3;
      num = Math.floor(num/10);
  }
  
  return sum == n?"Yes":"No";
}