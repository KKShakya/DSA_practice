// link=>https://www.codingninjas.com/studio/problems/rotation_7449070?utm_source=striver&utm_medium=website&utm_campaign=codestudio_a_zcourse&leftPanelTabValue=SUBMISSION

//what we can say is howm many times a array is rotated is if we found a pivot point of rotation and
//say that count of  elements which are appearing before it is the roation number;

// ex= 1,2,3,4,5
//rotation 1=> 5,1,2,3,4,5 => elemnts before pivot are 1
//rotation 2=> 4,5,1,2,3 => elemnts before pivot are 2
//rotation 3=> 3,4,5,1,2 => elemnts before pivot are 3

//hence rotaions are what we discused above;
// if I could find the minimum element index in the array that will be the answer;


const rotationCount = (arr)=>{
  let min = arr[0];
        let ans = 0;
        let index = 0;
         if(arr[0]<arr[arr.length-1]) return 0;
         for(let i=0;i<arr.length;i++){
             
             if(min>arr[i]){
                min = arr[i];
                index = i;
                
             }
            

         }
         return index;
}

//we can find the minimum and then return it s index
const rotationCountBinary = (arr)=>{
  let low = 0, high = arr.length - 1;
  let ans = Infinity;
  let index = 0;
  if (arr[low] < arr[high]) return low;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);


    if (arr[low] <= arr[mid]) {
      //left half sorted
      if(ans>arr[low]){
        ans = arr[low];
        index = low;
      }
      //move to right half
      low = mid + 1;
    } else {
      //right half may or may not be sorted
      if(ans>arr[mid]){
        ans = arr[mid];
        index = mid;
      }
      //but we eleimniate this half,as we got min of this half as arrr[mid]
      high = mid - 1;
    }
  }
  return index;
}


const arr = [4, 5, 6, 7, 0, 1, 2];
const arr1 = [4, 5, 1, 2, 3];

console.log(rotationCount(arr))
console.log(rotationCountBinary(arr1))
