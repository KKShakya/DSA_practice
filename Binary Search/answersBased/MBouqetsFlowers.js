// Problem Statement: You are given ‘N’ roses and you are also given an array ‘arr’  where ‘arr[i]’  denotes that the ‘ith’ rose will bloom on the ‘arr[i]th’ day.

// You can only pick already bloomed roses that are adjacent to make a bouquet. You are also told that you require exactly ‘k’ adjacent bloomed roses to make a single bouquet.

// Find the minimum number of days required to make at least ‘m’ bouquets each containing ‘k’ roses. Return -1 if it is not possible.

// N = 8, arr[] = {7, 7, 7, 7, 13, 11, 12, 7}, m = 2, k = 3

// on the 7th day 1st four and last one is bloomed
// on t13 day all bloomed, on 11, 1st four ,11 and 7 bloomed

//so if we say the minimum days to make k adjacent to m Bouqets,is 12, because on that day 1st four can mke one pair
// and last three can make 1, remember adhjacent bloomed/

//so what wiull be the ransge of search obvioulsly min arr, max arr;we astart looking at 7 and go till 13;

// how to count adjacent can make bouqet,simple keep a cnt increase by 1 whenever you get bloomed,
// and when it is unbloomed flower store the cnt/k in some variable and make cnt = 0(restart);

// link=>

function findMin(arr) {

  let mini = Infinity;

  for (let i = 0; i < arr.length; i++) {
    mini = Math.min(mini, arr[i]);
  }

  return mini;

}


function findMax(arr) {

  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }

  return max;

}


function possibleBouqets(arr, m, k, days) {

  let n = arr.length;
  let no_of_bouqets = 0;
  let cntAdj = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] <= days) cntAdj++;
    else {
      //store
      no_of_bouqets += Math.floor(cntAdj / k);
      //restart
      cntAdj = 0;
    }
  }
  //remmeber to get last cnt also,as we might miss it at last when it does not fall in else case
  no_of_bouqets += Math.floor(cntAdj / k);
  return no_of_bouqets >= m;
}


function MBouqets(arr, m, k) {

  let min = findMin(arr)
  let max = findMax(arr)

  for (let i = min; i <= max; i++) {


    if (possibleBouqets(arr, m, k, i)) {
      return i;
    }


  }
  return -1;

}

const arr = [7, 7, 7, 7, 13, 11, 12, 7], m = 2, k = 3;

console.log(MBouqets(arr, m, k), "days");


//OPtimal 
//can we apply binary search, yes, see the serach range again lookin from one point to another in sorted fashion;
// so can we decreae the size of arra by half , definitely, 
// ex = hi = 13,lo=7, mid = 10, not  possible answer, lesset than that;,
// day = 12, hi is at max = 13,lo = 11, possible answer look for new one dicarding upper part;






function MBouqetsOptimal(arr, m, k) {

  let min = findMin(arr)
  let max = findMax(arr)

 let ans = -1;
  while(min<=max){

    let mid = Math.floor((min+max)/2);

    if(possibleBouqets(arr, m, k, mid)){
      ans = mid;
      //deacrease right part
      max  = mid -1;
    }else{
      min =mid+1
    }

  }

  
  return ans; //or low

}

console.log(MBouqetsOptimal(arr,m,k),"optimal days")