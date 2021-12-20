function isSquare(arr = [9, 3, 9, 16]) {
  return !arr.filter(x=>Math.sqrt(x).toString().includes(".")).length
}
console.log(isSquare());
// [isSquare] using filter sqrt toString includes