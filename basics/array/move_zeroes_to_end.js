// link => https://leetcode.com/problems/move-zeroes/description/

// Brute force

//  1. method extra space

function moveZerosExtra(arr)
{
  let result  = [];
  let count_zero  = 0;

  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]==0)
    {
      count_zero++;

    }else{
      result.push(arr[i]);
    }
  }

  for(let i=0;i<count_zero;i++)
  {
    result.push(0)

  }
   console.log(result,"extra");
}

let arr = [0,1,0,3,12];

moveZerosExtra(arr);


//  2. method two for loops

function moveZerosTwoLoops(arr){

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 0) {

          for (let j = i + 1; j < arr.length; j++) {
                  if(arr[j]!=0){
                  let tmp = arr[i];
                  arr[i] = arr[j];
                  arr[j] = tmp;
                  break;
                  }
          }
        }
        
      }
      console.log(arr,"two loops nested");
} 

moveZerosTwoLoops(arr);

//method 3 using two for loops but independent
var moveZeroes = function (a) {
  let i = 0;
  let n  = a.length;
  for(let k=0;k<n;k++)
  {
      if(a[k]==0){
          i=k;
          break;
      }
  }
  for(let j=i+1;j<n;j++){
    
     if(a[i]==0 && a[i]!=a[j]){
         // console.log(a[i],a[j])
         let tmp = a[i];
         a[i] = a[j];
         a[j] = tmp;
     i++;
     };
  }
  console.log(a,"two loops independent")
 }
 moveZeroes(arr)

//optimal approach snowball effect down the hill
//more zeroes get wrapped up in snowball and we repalce a group
//with the most recent non-zero digit to the right


function moveZerosoptimal(arr) {
  let snowBallSize = 0; 
        for (let i=0;i<arr.length;i++){
	        if (arr[i]==0){
                snowBallSize++; 
            }
            else if (snowBallSize > 0) {
	        let tmp = arr[i];
	            arr[i]=0;
	            arr[i-snowBallSize]=tmp;
              //simle swap
              //[arr[i],arr[j]] = [arr[j],arr[i]]
            }
        }
        console.log(arr,"optimal");
}


moveZerosoptimal(arr);