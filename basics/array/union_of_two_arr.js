// link => https://www.codingninjas.com/studio/problems/sorted-array_6613259?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

//brute force
function unionBrute(A,B)
{
  let setA = Array.from(new Set([...A]));
  let setB = Array.from(new Set([...B]));
  
  // console.log(setA,setB)
  let result = [...setA,...setB];
  result = Array.from(new Set([...result]));

  console.log(result.sort((a,b)=>a-b));

}

let A = [1,2,3,4,4,6];
let B = [2,3,5,6]
unionBrute(A,B)


// method 2 of brute force
// use map if map.has(A[i]) then not include it
//similarly for array B
//at last sorting remains then convert map to array and sort



//optimal approach
//Having A & B as sortedd array
//if sorted it will work like merge sort array merging
// but just check if last inserted element is != euqal to current insert

function findUnion(arr1, arr2) {
  let i = 0, j = 0; // Pointers
  let union = []; // Union array

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) { // Case 1 and 2
      if (union.length === 0 || union[union.length - 1] !== arr1[i])
        union.push(arr1[i]);
      i++;
    } else { // Case 3
      if (union.length === 0 || union[union.length - 1] !== arr2[j])
        union.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) { // If any elements left in arr1
    if (union[union.length - 1] !== arr1[i])
      union.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) { // If any elements left in arr2
    if (union[union.length - 1] !== arr2[j])
      union.push(arr2[j]);
    j++;
  }

  console.log(union)
}

findUnion(A,B)


