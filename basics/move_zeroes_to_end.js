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
      console.log(arr,"two loops");
} 

moveZerosTwoLoops(arr);


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