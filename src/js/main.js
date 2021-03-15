function sumArray(array=[6, 2, 1, 8, 10]) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  return array.reduce((acc,cur)=>acc+=cur)-max-Math.min(...array)
}

console.log(sumArray());