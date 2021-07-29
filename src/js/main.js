function divisibleBy(numbers=[1,2,3,4,5,6],divisor=2) {
  return [...numbers.join('').replace(/./g,(v)=>v%divisor === 0 ? v : "")].map(Number)
}

console.log(divisibleBy())

