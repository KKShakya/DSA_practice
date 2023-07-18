// link = > https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/1053508/java-c-python-easy-and-concise/

// the case of a > b can happen at most once.

// Note that the first element and the last element are also connected.

// If all a <= b, A is already sorted.
// If all a <= b but only one a > b,
// we can rotate and make b the first element.
// Other case, return false.

// brute force
//comapring all elemnts with their future elements
//if even one is greater than the future element
// return false
// [2 with 1,3,4] fails here 1<2
// [1 with 3,4]
// [3 with 4]


function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i])
        return false;
    }
  }

  return true;
}


//best
 var check = function(nums) {

  let count = 0;
  let size = nums.length;

  for(let i=0;i<size;i++)
  {
      if(nums[i]>nums[(i+1)%size]){
          count++;
      }

      if(count==2){
          return false;
      }
  }

  

 return count<=1;
};

console.log(check([2,1,3,4]))