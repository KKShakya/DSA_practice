// statement

// A monkey is given ‘n’ piles of bananas, whereas the ‘ith’ pile has ‘a[i]’ bananas. An integer ‘h’ is also given,
//  which denotes the time (in hours) for all the bananas to be eaten.
// Each hour, the monkey chooses a non-empty pile of bananas and eats ‘k’ bananas.
//  If the pile contains less than ‘k’ bananas, then the monkey consumes all the bananas and won’t eat any more bananas in that hour.
// Find the minimum number of bananas ‘k’ to eat per hour so that the monkey can eat all the bananas within ‘h’ hours.


// since we need a minimum  time we can look or start from 1 bannan/hr,
// if(totalHours<= given time) that is the answer or else increase banana  eating /hr;
// so we need to fucntions one to calulate total hours of completer piles and one for demanding the answer

//brute

const reqTime = (arr, no_of_bananas) => {

  let n = arr.length;
  let totalHours = 0;
  //traverse the array linearly
  for (let i = 0; i < n; i++) {
    //we need ceil because in a pile even if you have one banana left after eating an hour 
    // you still nedd one hour to finish tthat banan
    //ex- 7 bananas in a pile and hourly rate is 6 bananas, you will finish 6 in hr but for 1 also you need an hr
    totalHours += Math.ceil(arr[i] / no_of_bananas);
  }

  return totalHours;

}


function findMax(arr) {
  let maxi = -Infinity;
  let n = arr.length;
  // Find the maximum
  for (let i = 0; i < n; i++) {
    maxi = Math.max(maxi, arr[i]);
  }
  return maxi;
}


//main 
const kokoEating = (arr, hours) => {

  let n = arr.length;
  let maxEle = findMax(arr);

  //we can go till the max of the array, or we can say 
  //what is the max hourly time Koko will take to eat bananas
  //that would be the max;


  for (let i = 1; i < maxEle; i++) {

    let time = reqTime(arr, i);
    if (time <= hours) {
      return i;
    }
  }

  return -1;

}

//time Complexity O(n)*O(maxEle);

const arr = [7, 15, 6, 3], hours = 8;

console.log(kokoEating(arr, hours))

//optimal 
//can we implement BInary search, yes because we are searchin from 1 to max element , that to like a a sorted array

//ex- in above array we are going from 1,2,3,...15;
// so if we could eliminate the array elements not needed, sincce we are going to finr min TIme;
//i.e good;

///reqTime fucntion  will be same;
//will reduce the serach in KOKOeating


const kokoEatingOptimal = (arr, hours) => {

  let n = arr.length;
  let maxEle = findMax(arr);

  //we can go till the max of the array, or we can say 
  //what is the max hourly time Koko will take to eat bananas
  //that would be the max;


  let lo = 1, hi = maxEle;
  let ans = -1;
  while (lo <= hi) {

    let mid = Math.floor((lo + hi) / 2);

    let time = reqTime(arr, mid);
    //we will get the probaable answer, may get less than that if searched on  left part
    //so you can store it in asnwer or at last the low and mid will be pointing to the same
    // as we want the minimum so obviously we get it at low side;
    if (time <= hours) {
      ans = mid;
      //eleiminate all that to right as we habve to look for min
      // ex 1,2,3,4,5,6,7,8,  4 is the probale anser eleiminate 7,8;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }


  }

  return ans; //or low;

}

console.log(kokoEatingOptimal(arr, hours))