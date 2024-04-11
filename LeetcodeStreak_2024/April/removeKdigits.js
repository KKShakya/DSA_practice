// link=>https://leetcode.com/problems/remove-k-digits/description/




// Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

 

// Example 1:

// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.



// The intuition behind the algorithm is to simulate the process of removing digits from the given number num to form the smallest possible number, considering the constraint of removing exactly k digits. Here's a breakdown of the intuition:

// Initialize: Begin by initializing an empty string res to store the result and an empty array stack to simulate a stack data structure.

// Push First Digit: Push the first digit of num onto the stack.

// Iterate Through Digits: Iterate through each digit of num starting from the second digit.

// Greedy Removal: While there are still operations to perform (k > 0), and the stack is not empty, and the current digit is less than the top of the stack, pop elements from the stack. This is a greedy approach to ensure that the resulting number is minimized.

// Push Current Digit: Push the current digit onto the stack.

// Remove Preceding Zeroes: If the stack contains only one element and the current digit is '0', pop it from the stack to ensure that the resulting number doesn't have leading zeroes.

// Process Remaining Operations: After iterating through all digits, there might still be remaining operations (k > 0). In this case, pop elements from the stack until the number of remaining operations is exhausted.

// Construct Result: Convert the elements in the stack to a string and reverse it to obtain the result in the correct order.

// Handle Edge Case: If the resulting string is empty, return "0" to handle cases where all digits are removed.

// Return Result: Otherwise, return the resulting string as the minimized number.

// The intuition revolves around selecting digits greedily while considering the constraint of removing exactly k digits to minimize the resulting number. This approach ensures that the resulting number is as small as possible.


function removeKDigits(num, k) {
  // If number of operations greater than or equal to the length of num, return "0"
  if (num.length <= k)
      return "0";
  
  // If k is 0, no need of removing or performing any operation, return the number itself
  if (k === 0)
      return num;
  
  // Initialize an empty string to store the result
  let res = "";
  // Initialize an empty array to simulate a stack
  const stack = [];
  
  // Push the first character of num into the stack
  stack.push(num[0]);
  
  // Loop through each character of num starting from the second character
  for (let i = 1; i < num.length; ++i) {
      // While there are still operations to perform, and the stack is not empty, and the current character is less than the top of the stack
      while (k > 0 && stack.length > 0 && num[i] < stack[stack.length - 1]) {
          // Decrement the number of remaining operations
          --k;
          // Pop the top of the stack
          stack.pop();
      }
      
      // Push the current character onto the stack
      stack.push(num[i]);
      
      // If the stack contains only one element and the current character is '0', pop it from the stack
      if (stack.length === 1 && num[i] === '0')
          stack.pop();
  }
  
  // While there are remaining operations and the stack is not empty, pop elements from the stack
  while (k > 0 && stack.length > 0) {
      --k;
      stack.pop();
  }
  
  // Convert the elements in the stack to a string and reverse it
  while (stack.length > 0) {
      res += stack.pop();
  }
  res = res.split("").reverse().join("");
  
  // If the result is empty, return "0"
  if (res.length === 0)
      return "0";
  
  // Otherwise, return the result
  return res;
}
