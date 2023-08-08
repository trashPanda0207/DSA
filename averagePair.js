function ap(arr, n) {
  let sample = new Set();
  let result = new Set();
  let doubleN = n * 2;

  arr.forEach((i) => {
    sample.add(i);
  });

  sample.forEach((x) => {
    let y = doubleN - x;
    let sortedPair = [x, y].toString();
    let reversePair = [y, x].toString();
    if (sample.has(y) && !result.has(sortedPair) && !result.has(reversePair)) {
      result.add(sortedPair);
    }
  });

  result.forEach((element) => {
    console.log(element.split(",").map(Number));
  });
}

ap([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);
