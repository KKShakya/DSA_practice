A prefix sum map is a data structure that helps efficiently calculate cumulative sums up to each index in an array. This technique is particularly useful when you need to repeatedly calculate sums of subarrays or ranges in an array. Here’s how it works and when to use it:

Understanding Prefix Sum
Definition:

A prefix sum array or map stores cumulative sums up to each index i in the original array. Specifically, prefixSum[i] contains the sum of all elements from the start of the array up to index i.
Pattern it Describes:

The prefix sum pattern is particularly useful for problems involving sum queries over subarrays. It allows you to compute the sum of any subarray [l, r] efficiently using the formula:
sum
(
𝑙
,
𝑟
)
=
prefixSum
[
𝑟
]
−
prefixSum
[
𝑙
−
1
]
sum(l,r)=prefixSum[r]−prefixSum[l−1]
This formula gives you the sum of elements from index l to r in constant time 
𝑂
(
1
)
O(1).
Applying Prefix Sum

Use Case: Suppose you have an array where you frequently need to find the sum of elements between two indices. Instead of iterating through the subarray every time, you can preprocess the array to build a prefix sum array or map.

Preprocessing:

Initialize a prefixSum array or map where prefixSum[0] = arr[0].
Fill the prefixSum array such that prefixSum[i] = prefixSum[i-1] + arr[i] for each index i > 0.
Querying:

To find the sum of elements between indices l and r, use the formula prefixSum[r] - prefixSum[l-1].
This approach reduces the time complexity of sum queries from 
𝑂
(
𝑟
−
𝑙
+
1
)
O(r−l+1) to 
𝑂
(
1
)
O(1).
Example
Here’s an example of how you can implement and use a prefix sum map in JavaScript:

javascript
Copy code
function buildPrefixSum(arr) {
    let prefixSum = new Map();
    prefixSum.set(0, arr[0]);
    for (let i = 1; i < arr.length; i++) {
        prefixSum.set(i, prefixSum.get(i - 1) + arr[i]);
    }
    return prefixSum;
}

function getSubarraySum(prefixSum, l, r) {
    if (l === 0) {
        return prefixSum.get(r);
    } else {
        return prefixSum.get(r) - prefixSum.get(l - 1);
    }
}

// Example usage:
let arr = [1, 2, 3, 4, 5];
let prefixSum = buildPrefixSum(arr);

console.log(getSubarraySum(prefixSum, 1, 3)); // Output: 9 (sum of subarray [2, 3, 4])
console.log(getSubarraySum(prefixSum, 0, 2)); // Output: 6 (sum of subarray [1, 2, 3])
Explanation
buildPrefixSum: This function builds a prefix sum map (prefixSum) where each key-value pair corresponds to the index and its cumulative sum up to that index.
getSubarraySum: This function retrieves the sum of elements between indices l and r using the prefixSum map. It utilizes the prefix sum array to calculate the sum in constant time.
When to Use Prefix Sum
Use prefix sum when you need to efficiently compute sums of subarrays or ranges within an array.
It's especially beneficial for scenarios where there are multiple sum queries on the same array because it preprocesses the array in linear time and answers each query in constant time.
In summary, prefix sum is a powerful technique for optimizing cumulative sum queries in arrays, reducing time complexity from linear to constant for sum queries. It's widely applicable in competitive programming and algorithmic problems involving range queries.