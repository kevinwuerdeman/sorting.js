function bubbleSort(arr) {
  let swapMode = true;
  while(swapMode) {
    swapMode = false;
    for(let i = 0; i < arr.length - 1; i++) {
       if (compare(arr[i], arr[i + 1])){
        swap(arr, i);
        swapMode = true;
      }
    }
  }
  return arr;
}

function swap(arr, i) {
  let temp = arr[i];
  arr[i] = arr[i + 1];
  arr[i + 1] = temp;
}

function compare(num1, num2) {
  return num1 > num2;
}
