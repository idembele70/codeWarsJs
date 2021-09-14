function oddCount(n=15023) {
  return n % 2 ? Math.floor(n / 2) : n / 2
}
console.log(oddCount());
// [oddCount] using return function