// link=> https://leetcode.com/problems/longest-consecutive-sequence/description/

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.



// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9


// Brute

// the first thing if you have XMLDocument, look for x+1,x+2,x+3 ... so eventually we will get sequnce

// So for every element search x+1;

function linearSearch(arr, tar, n) {

  //simple linear search
  for (let i = 0; i < n; i++) {
    if (arr[i] == tar) {
      return true;
    }
  }

  return false;
}

function sequencBrute(arr) {
  let n = arr.length;
  let max = 1;
  for (let i = 0; i < n; i++) {

    let x = arr[i];
    let cnt = 1;
    while (linearSearch(arr, x + 1, n) == true) {
      cnt+=1;
      x = x + 1;
    }
    max = Math.max(max, cnt);

  }
  return max;

}
// Tc => O(n)*O(n);

let arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(sequencBrute(arr));


// beeter , what if i sort it and then do
//something;
//  we can say if a current element has to be aprt of the sequwnce then the previos or tht lastSmlaler element 
// should have diifrence of 1 i.e arr[i] -1 == lastSmaller because = arr[i]-lastSmaller  = 1 we want;
// let keep a currSeqCnt =0 ;, whenver we have above sittuaiton we will oncrease it;
// sot that we can find next element in sequwnce and copamre it with lastSaller;
// the last when conditions are not met, currSeqCnt = 1; 

//we will update lastSmaller = arr[i] in every case because either we are getting a new element,in both conditions

function sequenBetter(arr) {
  arr.sort((a, b) => a - b)
  let lastSmaller = -Infinity;
  let currSeqCnt = 0;
  let maxi = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - 1 == lastSmaller) {
      currSeqCnt++;
    } else if (arr[i] != lastSmaller) {
      //out of Sequewnce elemt found
      currSeqCnt = 1;
    }
    lastSmaller = arr[i];
    maxi = Math.max(maxi, currSeqCnt);

  }

  return maxi;

}
// TC => O(nlogn)+O(n)
console.log(sequenBetter(arr));



// put everything insisde the set so Unique
// seondly look dor x+1, in the set and if exists increase the cnt
// extension of Brute via set;
// so if [100,101,102,200,1,1,2,3,3,1 4];
// set = [100,101,102,200,1,2,3,4];

// i will look for 103, 104, is it good to that;
// so what if I find the starting element of the sequence and start the count from that;
// if (!st.has(it - 1)){
// ?I will  say it is the starting point of the cnt, or the first elemnt of the sequencec, example reached 100;
// }

//once found the startign point run a loop to find the sequenc e for it;

// while (st.has(x + 1)) {
//   x = x + 1;
//   cnt = cnt + 1;
// }


function longestSuccessiveOptimal(a) {
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
  return longest;
}

// TC=> O(n) + O(2N), the while loop is running for only sequewnce searching, so cnt of sequwnce is the key here
 
console.log(longestSuccessiveOptimal(arr))