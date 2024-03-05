//There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.There’s an array ‘A’ of size ‘N’ with an equal number of positive and negative elements. Without altering the relative order of positive and negative elements, you must return an array of alternately positive and negative values.


//type-1 when there are equal number of positives and negatives;

//brute

function RearrangebySign(arr, n) {

  // Define 2 arrays, one for storing positive 
  // and other for negative elements of the array.
  let pos = [];
  let neg = [];

  // Segregate the array into positives and negatives.
  for (let i = 0; i < n; i++) {

    if (arr[i] > 0) {
      pos.push(arr[i]);
    } else {
      neg.push(arr[i]);
    }
  }

  // Positives on even indices, negatives on odd.
  for (let i = 0; i < n / 2; i++) {
    arr[2 * i] = pos[i];
    arr[2 * i + 1] = neg[i];
  }

  return arr;
}

//optimal 
function RearrangebySignOptimal(arr) {

  let n = arr.length;

  // Define an array for storing the answer separately.
  let ans = new Array(n).fill(0);

  // Positive elements start from 0 and negative from 1.
  let posIndex = 0, negIndex = 1;
  for (let i = 0; i < n; i++) {

    // Fill negative elements in odd indices and increment by 2.
    if (arr[i] < 0) {
      ans[negIndex] = arr[i];
      negIndex += 2;
    }

    // Fill positive elements in even indices and increment by 2.
    else {
      ans[posIndex] = arr[i];
      posIndex += 2;
    }
  }

  return ans;
}


//type 2
//uneuqal negatives and positives;
var RearrangebySignUnequal = function (arr) {
  //code here
  let ans = [];
  let neg = [];
  let pos = [];

  for(let i=0;i<arr.length;i++)
  {
      if(arr[i]<0){
          neg.push(arr[i]);
      }else{
          pos.push(arr[i]);
      }
  }

    let k=0;let j=0;
  for(let i=0;i<arr.length;i++)
  {
      if(pos.length<=0 || neg.length<=0){
          break;
      }
      
      if(i%2==0){
          ans.push(pos.shift())
      }else{
          ans.push(neg.shift())
      }
  }
  while(k<neg.length){
      ans.push(neg[k++])
  }
  while(j<pos.length){
      ans.push(pos[j++])
  }
  return ans;
}