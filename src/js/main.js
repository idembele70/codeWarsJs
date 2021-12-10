function getSum(a = -1, b = 2) {
  return Array.from({ length: a + b + 1 }, (v, i) => a + i)/*  .reduce(
    (acc, cur) => acc + cur, 0
  )*/
}
console.log(getSum());
// [getSum] trying