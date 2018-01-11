function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
 let splitArr = split(arr);
 splitArr[0] = mergeSort(splitArr[0]);
 splitArr[1] = mergeSort(splitArr[1]);
 return merge(splitArr[0], splitArr[1]);
}

function split(arr) {
  let splitIndex = Math.ceil(arr.length/2);

  return [arr.slice(0, splitIndex), arr.slice(splitIndex, arr.length)];
}

function merge(arr1, arr2) {
  let bigArr = [];
  let arr1Index = 0;
  let arr2Index = 0;

  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (compare(arr1[arr1Index], arr2[arr2Index])) {
      bigArr.push(arr2[arr2Index]);
      arr2Index++;
    } else {
      bigArr.push(arr1[arr1Index]);
      arr1Index++;
    }
  }
  if (arr1Index > arr2Index){
    bigArr = bigArr.concat(arr2.slice(arr2Index));
  } else {
    bigArr = bigArr.concat(arr1.slice(arr1Index));

  }
  return bigArr;
}


  function compare(num1, num2) {
  return num1 > num2;
}
