function isSquare(arr = [9, 4, 9, 16]) {
  for (const number of arr) {
    const { sqrt } = Math
    if (/[.]/.test(sqrt(number))) return false
  }
  return true
}
console.log(isSquare());
// [isSquare] using every sqrt match