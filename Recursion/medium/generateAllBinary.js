

const recursive = (n)=>{
  
  function helper(n,ans){
    if(n==0){
      console.log(ans);
      return;
    }
    
    helper(n-1,ans+'0'); //not take
    helper(n-1,ans+'1'); // take
    
  }
  
  helper(n,'')

}

let n = 3;
recursive(3);