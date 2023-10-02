const arr = [3,6,1,7,2,0,4,9,-1]

const sort = (arr)=>{
  for(let i=0; i<arr.length; i++){

    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
        j--;
    }
  }
  console.log(arr)
}

sort(arr);

// we have two parts sorted and unsorted sub-aarays
// we make comparison between adjacent Element
// and if someone is hortes we move it to its right place
// in  the sorted array
// which goes from current element at poisiotn j to till j=0


const recursive_sort = (arr, i,n)=>{
  if (n == i) return;
  
  let j = i;
  while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
  }
      
  //Range reduced after recursion:
  recursive_sort(arr, i+1,n);
}
const arr1 = [2,0,4,9,8,-1]
recursive_sort(arr1,0,arr1.length)
console.log(arr1)