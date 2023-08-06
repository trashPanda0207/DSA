function int(arr1, arr2) {
  let result = [];
  arr1.forEach((i) => {
    arr2.forEach((j) => {
      if (i === j) {
        result.push(i);
      }
    });
  });
  return result;
}
arr1 = [1, 2, 3];
arr2 = [5, 16, 1, 3];
console.log(int(arr1, arr2));
