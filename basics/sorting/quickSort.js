let count = 0;
function partition(arr, low, high) {
  let pivot = arr[low];
  console.log( "arr to be sorted =>", arr.slice(low, high + 1)+"\n");
  let i = low;
  let j = high;
  count++;
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }
    if (i < j) {
      console.log("i => ",i, arr[i], "swap", "j => ",j, arr[j]+"\n");
      //swap bigger and samller
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    };
  }
  //swap low(pivot) and j
  console.log("low => ",low, arr[low], "swap pivot", "j => ",j, arr[j]+"\n");
  let temp = arr[j];
  arr[j] = arr[low];
  arr[low] = temp;

  console.log("partition => ", count, "arr after sorted =>", arr.slice(low, high + 1)+"\n");
  return j;
}

function qs(arr, low, high) {
  if (low < high) {
    let pIndex = partition(arr, low, high);
    qs(arr, low, pIndex - 1);
    qs(arr, pIndex + 1, high);
  }
}


function quickSort(arr) {
  qs(arr, 0, arr.length - 1);
  return arr;
}


function main() {
  let arr = [4, 6, 2, 5, 7, 9, 1, 3];

  arr = quickSort(arr);
  console.log(arr);
  return 0;
}

main();