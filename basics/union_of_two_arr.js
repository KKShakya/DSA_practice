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

