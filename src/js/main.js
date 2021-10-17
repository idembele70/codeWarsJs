function incrementer(nums=[4, 6, 7, 1, 3]) {
  const numsIncremented = []
  for (let index = 0; index < nums.length;) {
    const num = nums[index] + ++index
    numsIncremented.push(Number(...[...String(num)].slice(-1)))
  }
  return numsIncremented
}
console.log(incrementer());
// [incrementer] using for iteration push function Number and String classes slice function
