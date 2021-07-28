function divisibleBy(numbers=[1,2,3,4,5,6],divisor=2) {
  return numbers.filter(number=>!(number%divisor))
}

console.log(divisibleBy())