class Array {
  static arrayPlusArray(arr = [1, 2, 3], arr2 = [4, 5, 6]) {
    return arr.reduce((acc, v) => acc += v) + arr2.reduce((acc, v) => acc += v);
  }
}

console.log(Array.arrayPlusArray());