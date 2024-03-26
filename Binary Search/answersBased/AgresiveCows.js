//Example 1:
// Input Format: N = 6, k = 4, arr[] = {0,3,4,7,10,9}
// Result: 3
// Explanation: The maximum possible minimum distance between any two cows will be 3 when 4 cows are placed at positions {0, 3, 7, 10}. Here the distances between cows are 3, 4, and 3 respectively. We cannot make the minimum distance greater than 3 in any ways.

// Example 2:
// Input Format: N = 5, k = 2, arr[] = {4,2,1,3,6}
// Result: 5
// Explanation: The maximum possible minimum distance between any two cows will be 5 when 2 cows are placed at positions {1, 6}. 



// so what is the minimum distance we can have between two cows, if cows are consecutive then export, 3,4 in first exapmle and 1,2 nin second exapmle
//distance come sout to be 1,
// the max you can go for, two extremes, max-min,=> (10-0), (6,1);
// so range becomes 1 to max-min that we will search for, and see all given cows can acoomdoate for maximum among minimum distance

// brute
        //  stalls = [0, 3, 4, 7, 10, 9] , k=4
// dist =1, c1=>0,c2=>3,c3=>4,c4=>7,,,, possible(3,1,3)
// dist =2, c1=>0,c2=>3,c3=>7,c4=>10,,,, possible(3,4,3)
// dist =3, c1=>0,c2=>3,c3=>7,c4=>10,,,, possible(3,4,3)
// dist =4, c1=>0,c2=>4,c3=>10,c4=>can't place,,,, not possible(4,6,NA)

// maximum among (1,2,3) is 3, and beyond 4 it is not possible



function canWePlace(stalls, dist, cows) {
  var n = stalls.length; // size of array
  var cntCows = 1; // no. of cows placed
  var last = stalls[0]; // position of last placed cow
  for (var i = 1; i < n; i++) {
      if (stalls[i] - last >= dist) {
          cntCows++; // place next cow
          last = stalls[i]; // update the last location
      }
      if (cntCows >= cows) return true;
  }
  return false;
}

function aggressiveCows(stalls, k) {
  var n = stalls.length; // size of array
  // sort the stalls[]
  stalls.sort((a, b) => a - b);

  var limit = stalls[n - 1] - stalls[0];//max-min
  for (var i = 1; i <= limit; i++) {
      if (canWePlace(stalls, i, k) === true) {
          continue;
      }else{
        return i-1;
      }
  }
  return limit;
}



//optimal

function aggressiveCowsOptimal(stalls, k) {
  const n = stalls.length; // size of array
  stalls.sort((a, b) => a - b); // sort the stalls array

  let low = 1, high = stalls[n - 1] - stalls[0];//max-min
  // apply binary search
  while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (canWePlace(stalls, mid, k)) {
        //you can either store the answer/

        //or you know that when lo crosses high, the impossible beomes possible and posiible beomes impossible
        //i.e here high was impossible so it beomes possible
        //return high
          low = mid + 1;
      } else {
          high = mid - 1;
      }
  }
  return high;
}




var stalls = [0, 3, 4, 7, 10, 9];
var k = 4;
var ans = aggressiveCowsOptimal(stalls, k);
console.log("The maximum possible minimum distance is:", ans);


