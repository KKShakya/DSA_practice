const arr = [3, 6, 1, 7, 2, 0, 4, 9, -1]

const sort = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i++) {

    for (let j = 0; j < n - i; j++) {
      // find minimunm by comapring two adjacents
      if (arr[j] > arr[j+1]) {
        //swap
        let tmp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = tmp;
      }
      //the last element get sorted so that is why n-i iterations
    }

  }
  console.log(arr)
}

sort(arr);




const recursive_sort = (arr, n)=>{
  if (n == 1) return;
  
  for (let j = 0; j <= n - 2; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
          arr[j] = temp;
        }
      }
      
  //Range reduced after recursion:
  recursive_sort(arr, n - 1);
}
const arr1 = [2,0,4,9,8,-1]
recursive_sort(arr1,arr1.length)
console.log(arr1)