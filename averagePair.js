function ap(arr, n) {
  let result = [];
  let doubleN = n * 2;

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(doubleN - arr[i])) {
      result.push([arr[i], doubleN - arr[i]]);
    }
  }

  console.log(result);
}

ap([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
