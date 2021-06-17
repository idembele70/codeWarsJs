function sum(numbers=[1, 5.2, 4, 0, -1]) {
  let some = 0
  for (const number of numbers) {
    some+=number;
  }
  return some
}
console.log(sum([]));