const squareSum = ((numbers = [1, 2]) => {
  let sum = 0
  for (const number of numbers) {
    sum += number ** 2
  }
  return sum
})()
  ;
console.log(squareSum);


// [squareSum] using forof iteration