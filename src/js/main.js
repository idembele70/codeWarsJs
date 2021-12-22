function isSquare(arr = []) {
  return arr.map(
    number=>Math.sqrt(number).toString().includes('.')
  ).includes(true)
}
console.log(isSquare());
// [isSquare] using trying