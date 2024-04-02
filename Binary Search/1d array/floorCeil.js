

//floor = the floor of x is the largest element in the array which is smaller than or equal to x( i.e. largest element in the array <= x);
//ceil = The ceiling of x is the smallest element in the array greater than or equal to x( i.e. smallest element in the array >= x);

const floor = (arr,x,n)=>{
  let low = 0, high = n - 1;
  let ans = -1;

  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      // maybe an answer
      if (arr[mid] <= x) {
          ans = arr[mid];
          //look for smaller index on the right
          low = mid + 1;
      }
      else {
          high = mid - 1; // look on the left
      }
  }
  return ans;

}



const ceil = (arr,x,n)=>{
  let low = 0, high = n - 1;
  let ans = -1;

  while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      // maybe an answer
      if (arr[mid] >= x) {
          ans = arr[mid];
          //look for smaller index on the left
          high = mid - 1;
      }
      else {
          low = mid + 1; // look on the right
      }
  }
  return ans;

}


const arr = [3, 4, 4, 7, 8, 10];
const x = 5;
const n = arr.length;

console.log("floor of" ,x ," = ",floor(arr,x,n));
console.log("ceil of" ,x," = " ,ceil(arr,x,n));