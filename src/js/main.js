function incrementer(nums=[4, 6, 7, 1, 3]) {
  let incrementeIndex = 1;
  return nums.map(
    toIncremente=>+(toIncremente + incrementeIndex++).toString().split('').slice(-1).join``
  )
}
console.log(incrementer());
// [incrementer] using map + to parse toString split slice and join function
