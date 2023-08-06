function int(arr1, arr2) {
  let result = [];
  let numbers = new Map();
  arr1.forEach((element) => {
    numbers.set(element, 1);
  });

  arr2.forEach((element) => {
    if (numbers.has(element)) {
      numbers.set(element, 2);
    }
  });

  numbers.forEach((value, key) => {
    if (value === 2) {
      result.push(key);
    }
  });
  return result;
}
