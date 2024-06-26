// you can use iterative ways whichever you prefer 
// top elements should be the largest

// bubble sort

const iterative =  (arr,n)=>{

  for(let i=0;i<n;i++)
  {
    for(let j=0;j<n-i+1;j++)
    {
      if(arr[j]>arr[j+1]){
        //swap
        let tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1]=  tmp;
      }
    }
  }
   console.log(arr);
}





//recursive
// we say until we sort all elements we will loop through the arr;
// so what will be the last leemnt to sort i.e n == 1, we don't need to sort just one element
// outer for loop travels for each elements and place it at last as largest;
// the inner loop copanmres all elemetns , that cna we done through a call


const recursive = (arr,n)=>{
  //base vase;
  if(n==1) return;

   for(let j=0;j<n-1;j++)
   {
    if(arr[j]>arr[j+1]){
      //swap
      let tmp = arr[j];
      arr[j] = arr[j+1];
      arr[j+1]=  tmp;
    }
  }

  recursive(arr,n-1);//last element already sorted

}


// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
recursive(arr,arr.length);
console.log("Sorted array is:", arr);
