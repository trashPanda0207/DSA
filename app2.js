let numbers = [2, 9, 16, 23, 72, 87, 94];

function binarySearch(arr, num) {
  min = 0;
  max = arr.length - 1;
  while (arr[max] >= num) {
    middle = (max + min) / 2;
    if (num > arr[middle]) {
      min = middle + 1;
    } else if (num < arr[middle]) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(binarySearch(numbers, 72));
