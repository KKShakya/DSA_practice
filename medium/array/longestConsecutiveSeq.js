//brute
//for each element x find x+1, and till you get it increase the cnt;
//at last update the longest;

const linearSearch = (arr,num)=>{

  for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
      return true;
    }
  }
  return false;
}



const longestConsecutiveBrute = (arr)=>{

  let cnt = 0;
  let longest = 1;
  for(let i=0;i<arr.length;i++){
    cnt =1;
    let x = arr[i];
    while(linearSearch(arr,x+1)==true){
      cnt++;
      //this happends later point before that search finishes;
      x++;     
    }
    longest = Math.max(longest,cnt);
  }
 
console.log(longest,"brute")
}

const longestConsecutiveBetter = (arr)=>{

  let n = arr.length;
  if (n === 0) return 0;

  // sort the array:
  arr.sort((a, b) => a - b);
  let lastSmaller = -Infinity;
  let cnt = 0;
  let longest = 1;

  // find longest sequence:
  for (let i = 0; i < n; i++) {
      if (arr[i] - 1 === lastSmaller) {
          // arr[i] is the next element of the
          // current sequence.
          cnt += 1;
          lastSmaller = arr[i];
      } else if (arr[i] !== lastSmaller) {
          cnt = 1;
          lastSmaller = arr[i];
      }
      longest = Math.max(longest, cnt);
  }
  console.log(longest,"better sort");

}


const longestConsecutiveOptimal = (a)=>{
  let n = a.length;
  if (n === 0)
      return 0;

  let longest = 1;
  let st = new Set();
  
  // put all the array elements into set
  for (let i = 0; i < n; i++) {
      st.add(a[i]);
  }

  // Find the longest sequence
  for (let it of st) {
      // if 'it' is a starting number
      if (!st.has(it - 1)) {
          // find consecutive numbers
          let cnt = 1;
          let x = it;
          while (st.has(x + 1)) {
              x = x + 1;
              cnt = cnt + 1;
          }
          longest = Math.max(longest, cnt);
      }
  }
  console.log(longest,"optimal sort");
}


const  a = [100, 200, 1, 2, 3, 4,2,2,3,1,2,1];
longestConsecutiveBrute(a);
longestConsecutiveBetter(a);
longestConsecutiveOptimal(a);