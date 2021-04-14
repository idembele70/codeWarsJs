class Array {
  static arrayPlusArray(arr1 = [1, 2, 3], arr2 = [4, 5, 6]) {
    let sum1 = 0, sum2 = 0;
    arr1.forEach(el => sum1 += el);
    for (const item of arr2) {
      sum2 += item;
    }
    return sum1 + sum2
  }
}

console.log(Array.arrayPlusArray());