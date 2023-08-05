function binarySearch(arr, num) {
  min = 0;
  max = arr.length - 1;
  step = 0;

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    if (num > arr[mid]) {
      min = mid + 1;
      console.log("Now min's index: " + min + ", value: " + arr[min]);
    } else if (num < arr[mid]) {
      max = mid - 1;
    } else if (num === arr[mid]) {
      return mid;
    }
  }
  return -1;
}
