function int(arr1, arr2) {
  let result = [];
  let arr3 = arr1.concat(arr2);
  let counter = {};

  arr3.forEach((i) => {
    if (!counter[i]) {
      counter[i] = 1;
    } else {
      counter[i]++;
    }
  });

  for (let property in counter) {
    if (counter[property] >= 2) {
      result.push(property);
    }
  }
  console.log(result);
  return result;
}
