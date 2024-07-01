var permuteUnique = function (nums) {
  let ans = [];
  let freq = []
  nums.sort((a, b) => a - b)
  helper(nums, ans, [], freq);
  return ans;
};

//freq[i] = true //already visited
// i>0 not picking the first time [1,1,2], at o index we picked 1, but at index 1 we do not want to pick it
// arr[i]===arr[i-1] //is a aduplicate at nex t index
// frq[i-1]  =false, previous is not already taken

const helper = (arr, ans, ds, freq) => {

  if (ds.length == arr.length) {
    ans.push([...ds]);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    //if not already taken//visited
    // ensures that we skip elements that have already been included in the current permutation or if it is a duplicate and the previous duplicate was not included.
    if (freq[i] || (i > 0 && arr[i] === arr[i - 1] && !freq[i - 1])) continue;
    //mark as taken
    freq[i] = true
    //then take it
    ds.push(arr[i]);
    helper(arr, ans, ds, freq);
    //backtrack
    ds.pop();
    freq[i] = false;

  }

}