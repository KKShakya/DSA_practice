//link=>https://leetcode.com/problems/string-to-integer-atoi/description/

// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.
// 
// The algorithm for myAtoi(string s) is as follows:
// 
// Whitespace: Ignore any leading whitespace (" ").
// Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
// Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
// Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
// Return the integer as the final result.
// 
//  
// 
// Example 1:
// 
// Input: s = "42"
// 
// Output: 42
// 
// Explanation:
// 
// The underlined characters are what is read in and the caret is the current reader position.
// Step 1: "42" (no characters read because there is no leading whitespace)
        //  ^
// Step 2: "42" (no characters read because there is neither a '-' nor '+')
        //  ^
// Step 3: "42" ("42" is read in)
          //  ^
// Example 2:
// 
// Input: s = " -042"
// 
// Output: -42
// 
// Explanation:
// 
// Step 1: "   -042" (leading whitespace is read and ignored)
//             ^
// Step 2: "   -042" ('-' is read, so the result should be negative)
//              ^
// Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)




 // so what we can say is trim the string;
 // determine the sign, 
 // take into consideration only the digits 0 to 9;
 // convert string to digit;


 function myAtoi(s) {

  // Step 1: Ignore leading whitespace
  s = s.trim();

  // Step 2: determine optional sign
  let sign = 1;
  let index = 0;
  if (s[index] === '-') {
      sign = -1;
      index++;
  } else if (s[index] === '+') {
      index++;
  }

  // Step 3: Convert digits to integer, only digits
  let result = 0;
  while (index < s.length && isDigit(s[index])) {
      result = result * 10 + (s[index].charCodeAt(0) - '0'.charCodeAt(0));
      index++;
  }
  
  //multuple eith signed bit
  result *= sign;

  // Step 5: get the result within 32-bit signed integer range
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;
  if (result < INT_MIN) {
      return INT_MIN;
  }
  if (result > INT_MAX) {
      return INT_MAX;
  }

  return result;
}

function isDigit(char) {
  return char >= '0' && char <= '9';
}

// Example usage
console.log(myAtoi("42"));            // 42
console.log(myAtoi("   -42"));        // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987"));   // 0
console.log(myAtoi("-91283472332"));    // -2147483648 (clamped)


