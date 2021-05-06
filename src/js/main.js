const nBonacciRatio = (n = 1) => {
  if (n == 0) {
    return 0
  } else if (n == 1) {
    return 1
  } else
    return parseInt(n * (n - nBonacciRatio(n - 1)) + (n - nBonacciRatio(n - 2))).toFixed(8)
}
console.log(nBonacciRatio());