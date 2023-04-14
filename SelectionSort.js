function selectionSort(arr) {
 let min;
 for (let i = 0; i < arr.length - 1; i++) {
  min = i;
  for (let j = i + 1; j < arr.length; j++)
   if (arr[j] < arr[min])
    min = j;
  [arr[i], arr[min]] = [arr[min], arr[i]];
 }
 return arr;
}

console.log(selectionSort([4, 2, 6, 5, 1, 3]));