// link=>https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/
// similar problems to smallest divisor and kokoeatign and all
// one cattch determine the range of seeach


// Problem Statement: You are the owner of a Shipment company. You use conveyor belts to ship packages from one port to another. The packages must be shipped within ‘d’ days.

// The weights of the packages are given in an array ‘of weights’. The packages are loaded on the conveyor belts every day in the same order as they appear in the array. The loaded weights must not exceed the maximum weight capacity of the ship.

// Find out the least-weight capacity so that you can ship all the packages within ‘d’ days.

// read these two eaxmples
// Example 1:
// Input Format: N = 5, weights[] = {5,4,5,2,3,4,5,6}, d = 5
// Result: 9
// Explanation: If the ship capacity is 9, the shipment will be done in the following manner:
// Day         Weights            Total
// 1        -       5, 4          -        9
// 2        -       5, 2          -        7
// 3        -       3, 4          -        7
// 4        -       5              -        5
// 5        -       6              -        6
// So, the least capacity should be 9.

// Example 2:

// Input Format: N = 10, weights[] = {1,2,3,4,5,6,7,8,9,10}, d = 1
// Result: 55
// Explanation: We have to ship all the goods in a single day. So, the weight capacity should be the summation of all the weights i.e. 55.

//you cam see the minimum weight can be shipped in one day is the maximum of all the weights[i], 
//example i can send 10 in example 2, and 6 in example -1 in one day which is max or can say minimum for one day;

// thenmax weight we can send is if ship can acquire all the weights i.e => sum of all array elemets;
//example 2 : 55

// so the range becomes max to  sum of all

// now the calulation , what we ned to determine is howmany weights possible in given days;
// so we have intila load = 0; and then initial days = 1, 
// on any day load + weight[i]> capacity of ship, we say will ship at next day so day += 1;
//  else we say we can ship it allow more weight on it => laod += weight[i];


// Function to calculate the number of days needed to ship the packages with a given capacity
function findDays(weights, cap) {
  let days = 1; // Initialize the days needed to 1 (first day)
  let load = 0; // Initialize the load on the ship to 0
  let n = weights.length; // Get the number of packages

  // Loop through each package
  for (let i = 0; i < n; i++) {
    // Check if adding the weight of the current package exceeds the capacity
    if (load + weights[i] > cap) {
      days += 1; // Move to the next day
      load = weights[i]; // Load the current package on the next day
    } else {
      load += weights[i]; // Load the current package on the same day
    }
  }
  return days; // Return the total number of days needed to ship all packages
}

// Function to find the least weight capacity required to ship all packages within 'd' days
function leastWeightCapacity(weights, d) {
  // Find the maximum weight among the packages
  let maxi = Math.max(...weights);
  // Calculate the sum of weights of all packages
  let sum = weights.reduce((acc, weight) => acc + weight, 0);

  // Iterate through possible capacities from maximum to sum of all weights
  for (let i = maxi; i <= sum; i++) {
    // Check if current capacity allows shipping all packages within 'd' days
    if (findDays(weights, i) <= d) {
      return i; // Return the minimum capacity found
    }
  }
  return -1; // Return -1 if no feasible capacity is found
}

// Function to find the least weight capacity using binary search (Optimized approach)
function leastWeightCapacityOptimal(weights, days) {
  let max = Math.max(...weights); // Maximum weight among the packages
  let sum = weights.reduce((curr, acc) => acc + curr, 0); // Sum of weights of all packages
  let ans = -1; // Initialize the answer

  // Binary search between maximum and sum of weights
  while (max <= sum) {
    let mid = Math.floor((max + sum) / 2); // Calculate the mid capacity

    // Check if mid capacity allows shipping all packages within given days
    if (findDays(weights, mid) <= days) {
      ans = mid; // Update answer with mid capacity
      sum = mid - 1; // Adjust search space to the left side
    } else {
      max = mid + 1; // Adjust search space to the right side
    }
  }
  return ans; // Return the least weight capacity found
}

// Test case
let weights = [5, 4, 5, 2, 3, 4, 5, 6];
let d = 5;

// Output the results
console.log("The minimum capacity should be: " + leastWeightCapacity(weights, d));
console.log("The minimum capacity should be optimal : " + leastWeightCapacityOptimal(weights, d));
