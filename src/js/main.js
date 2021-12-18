function isSquare(arr = [2, 4, 9, 16]) {
  return arr.every(x => Math.sqrt(x) + "".match(/./ig))
}
console.log(isSquare());
// [isSquare] using every sqrt match