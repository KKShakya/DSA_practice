// Basic Concepts
// Bits and Bytes:

// A bit is the smallest unit of data in computing, representing a 0 or 1.
// A byte is a group of 8 bits.

// Binary Numbers:Binary is the base-2 numeral system used in computing.
// Each binary digit represents a power of 2 (e.g., 1011 in binary is 1×2^3+0×2^2+1×2^1+1×2^0=11).

// Bitwise Operators:
// AND (&): Sets each bit to 1 if both bits are 1.
// OR (|): Sets each bit to 1 if one of two bits is 1.
// XOR (^): Sets each bit to 1 if only one of two bits is 1.
// NOT (~): Inverts all the bits.
// Left Shift (<<): Shifts bits to the left, adding zeros on the right.
// Right Shift (>>): Shifts bits to the right, discarding bits on the right.


// *****************************************************************************************************

// swap two numbers
// xor says even number of 1's = 0
// odd number of 1's = 1

// a^a = 0


let a = 6;
let b = 7;
console.log("a=> ", a, 'b=>', b)

a = a ^ b;
b = b ^ a; // b^(a^b) => a  b^b got cancelled
a = a ^ b; // a^(b^a) => b  a^a got cancelled

// a = a ^ b; // Step 1: a = 6 ^ 7 = 1
// b = b ^ a; // Step 2: b = 7 ^ 1 = 6 (original value of a)
// a = a ^ b; // Step 3: a = 1 ^ 6 = 7 (original value of b)


console.log("a=> ", a, 'b=>', b)

// *****************************************************************************************************

// Left Shift (<<): Shifts bits to the left, fills with zeros on the right. Equivalent to multiplying by 2^𝑛, where n is the number of positions shifted.
// Right Shift (>>): Shifts bits to the right, fills with the sign bit on the left. Preserves the sign of the original number. Equivalent to dividing by 2^n and rounding towards negative infinity.
// Zero-fill Right Shift (>>>): Shifts bits to the right, fills with zeros on the left. Treats the number as unsigned.

//left shift n = 5 by 1  => 101;
//  ans  = 1010 added one zero  = 10

//right shift n=  5 by 1;
// ans = 010 added one zero left = 2;

let n = 5;

console.log(n << 1, "left shift")
console.log(n >> 1, "right shift")

// *****************************************************************************************************

//1. check if ith bit is set or not

// we know that AND of 1's is 1 and else 0
// so we will check if ith bit is set or not by left shifting the 1 by i times
// and see if that bit gives as a number , because are settign bit for only that ith position

//ex  n =13, i=2;
// 13 =>    1101  left shift of (1<<i) => 100;

//            1101
//          & 0100    added extra zeros at left
//          ---------
//            0100    a non-zero so ith bit is set,

console.log((13 & (1 << 2)) !== 0, "left shift check"); //true

//lly with right shift just shift n to the right by i bits and do AND with 1;

console.log((13 >> 2 & 1) != 0, "right shift check") //true

// *****************************************************************************************************


// 2. settign tht ith bit;

// we know that OR of 0's is zero else it is 1; 1|1 = 1, 1|0 = 1, 0|0 = 0;

// so what if we left shift 1 by ith bit and then take or of it

//  9 = 1001;
//  i = 2;  1101 which is 13

console.log((9 | (1 << 2)), "Set bit");

// *****************************************************************************************************


//3. clear the ith bit

// if we do and operation with any bit we get 0; we can use this 
// but how to put zero over that bit; // aimple left shift 1. and then neagte it;

//  ex  negate 100 => 011, all 0's to 1 and vice-versa;

// 13  = 1101, settign second bit 0, 1001 = 9

console.log(13 & ~(1 << 2), " clear bit")

// *****************************************************************************************************


//4. toggle the bit
// we know that XOR of even 1's give 0, else 1;

// so if we take xor with left  shift 1 by ith we can get the answer;

// 13 = 1101, toggle 1st bit , 1111 = 15
console.log(13 ^ (1 << 1), "toogle bit")
// *****************************************************************************************************


// 4. remove the right most set bit;
// we know that AND with zero gives 0;easy 
// but how to move the o to right most set bit;

// n=16 = 2^4 = 10000;
// n=15 = 8+4+2+1 = 01111;


// n = 40 = 2^5 + 8 = 101000;
// n = 39 = 2^5 + 4+2+1 = 100111;

// NOtice one  thing that convertign n to n-1, the right most set bit is converted to zero;
// and that is because we are subracting 1 ehich makes other rightmost unset bit to set and
// rightmost set bit unset; do the calulations in 39, 4,2,1 bit are set because we need those for calualtions

// 16 = 1000 => 0000 = 0;
console.log((16 & (16 - 1)), "unset right most bit")

// *****************************************************************************************************

// 5. odd or even

// n = 13 = 1101 // last bit 1
// n = 7 = 0111; //last bit 1
// n = 6 = 0110;  //last bit 0
// NOTICE : The last bit of odd number is always 1, so if i take AND with just I will get 1

//     0111 
//   & 0001
//    ------
//     0001  = 1;

//  so  n&1 == 1 => odd 
//      n&1 == 0 => even

console.log(13 & 1, "13 is odd", 12 & 1, "12 is even")
// *****************************************************************************************************

// 6. POwer of two

// n = 4 = 100
// n = 8  = 1000;
//  n = 16 = 10000;
//  n = 32 = 100000;

// there is only one set bit in power of two,therefore we count number of set bits by divind two


const powerOftwo = (n) => {
  let cnt = 0;
  while (n > 1) {
    if (n % 2 == 1) cnt++; //odd check i.e 1
    n = Math.floor(n / 2);
  }
  if (n == 1) cnt++ //last remiander

  return cnt == 1; //only 1 set bit allowed;

}

const powerOftwoWithBIts = (n) => {
  let cnt = 0;
  while (n > 1) {
    cnt += n & 1 // gives 1 for odd 0 for even
    n = n >> 2;  //right shift dived by two nd left shift multiplies by two
  }
  if (n == 1) cnt++ //last remiander

  return cnt == 1; //only 1 set bit allowed;

}

console.log(powerOftwo(16), "16 divide")
console.log(powerOftwoWithBIts(16), "16 BIts")


// *****************************************************************************************************

// 7. Count set BIts;


const countSetBitsDivide = (n) => {
  let cnt = 0;
  while (n > 1) {
    if (n % 2 === 1) cnt++; // Check if the number is odd (LSB is 1)
    n = Math.floor(n / 2); // Divide by 2
  }
  if (n === 1) cnt++; // Check the last remainder
  return cnt;
};


console.log(countSetBitsDivide(13)); // Output: 3 (13 in binary is 1101)
console.log(countSetBitsDivide(16)); // Output: 1 (16 in binary is 10000)


const countSetBitsBitwise = (n) => {
  let cnt = 0;
  while (n > 1) {
    cnt += n & 1; // Check if the LSB is set
    n = n >> 1; // Right shift (divide by 2)
  }
  if (n === 1) cnt++; // Check the last bit
  return cnt;
};

console.log(countSetBitsBitwise(13)); // Output: 3 (13 in binary is 1101)
console.log(countSetBitsBitwise(16)); // Output: 1 (16 in binary is 10000)

// Method 3: Using Brian Kernighan's Algorithm

// Brian Kernighan's algorithm is an efficient way to count set bits. The trick is to repeatedly flip the least significant set bit to 0 and increment a counter until the number becomes 0. This method has a time complexity of O(k), where k is the number of set bits.

// n & n-1 usets the rightmost bit;

// first flip
//  1101   n = 13
//& 1100 n = 12
//  -----
//  1100   n = 11

//second flip 
//   1100    n = 11
// & 1011  n = 10
//   -----
//   1000    n = 8

// third flip

//   1000   n = 8
// & 0111 n = 7
//   -----
//   0000   n = 0;



const countSetBitsKernighan = (n) => {
  let cnt = 0;
  while (n > 0) {
    n = n & (n - 1); // Flip the least significant set bit
    cnt++;
  }
  return cnt;
};

console.log(countSetBitsKernighan(13)); // Output: 3 (13 in binary is 1101)
console.log(countSetBitsKernighan(16)); // Output: 1 (16 in binary is 10000)

// Initial:     1101  (13)
// 1st flip:    1100  (12)
// 2nd flip:    1000  (8)
// 3rd flip:    0000  (0)
