function frequency(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let i in str1) {
    if (!counter1[str1[i]]) {
      counter1[str1[i]] = 1;
    } else {
      counter1[str1[i]]++;
    }
  }

  for (let j in str2) {
    if (!counter2[str2[j]]) {
      counter2[str2[j]] = 1;
    } else {
      counter2[str2[j]]++;
    }
  }

  for (let property in counter1) {
    if (!counter2[property]) {
      return false;
    }
    if (counter2[property] !== counter1[property]) {
      return false;
    }
  }
  return true;
}

console.log(frequency("acbb", "abbc"));
