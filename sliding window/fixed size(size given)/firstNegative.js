function printFirstNegativeInteger(K, A) {
  // code here
 let i = 0, j = 0;
let Arr = [];
let neg = [];
let N = A.length;
while (j < N) {
  if (A[j] < 0) {
      neg.push(A[j]);
  }

  if (j - i + 1 < K) {
      j++;
  } else if (j - i + 1 === K) {
      if (neg.length > 0) {
          Arr.push(neg[0]);
          if (A[i] === neg[0]) {
              neg.shift();
          }
      } else {
          Arr.push(0);
      }
      i++;
      j++;
  }
}
console.log(Arr)
}

printFirstNegativeInteger(2,[-8,2,-3,6,10])