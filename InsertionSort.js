function insertionSort(arr) {
 let temp;
 for (let i = 1; i < arr.length; i++) {
  temp = arr[i];
  for (var j = i - 1; arr[j] > temp && j >= 0; j--)
   arr[j + 1] = arr[j];
  arr[j + 1] = temp;
 }
 return arr;
}

console.log(insertionSort([3, 6, 8, 1, 9, 0]));