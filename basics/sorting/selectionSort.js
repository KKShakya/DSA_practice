const arr = [3,6,1,7,2,0,4,9,-1]

const sort = (arr)=>{
  for(let i=0; i<arr.length; i++){

    let min = i;
    for(let j=i+1; j<arr.length; j++){
      // find minimunm
      if(arr[j]<arr[min]){
        min = j;
      }
    }
    //swap
    [arr[i],arr[min]] = [arr[min],arr[i]]
  }
  console.log(arr)
}

sort(arr);


newSOrt = (arr)=>{}