function divisibleBy(numbers=[1,2,3,4,5,6],divisor=2) {
  const isDisivibleArray = []
  for (const number of numbers) {
    if(number%divisor === 0) isDisivibleArray.unshift(number)
  }
  return isDisivibleArray.reverse()
}

console.log(divisibleBy())

