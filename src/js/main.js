function binToDec(bin=10) {
   bin = bin.toString()
  const convertedNumbers = []
  for (let i = bin.length; i > 0; i--) {
    const currentNumber = bin[i-1]
    const convertedNumber = currentNumber * Math.pow(2,bin.length - i)
   convertedNumbers.push(convertedNumber)
  }
  return convertedNumbers.reduce(
    (sum,currentVal)=>sum+currentVal
  )
}
console.log(binToDec());
// [binToDec] for iteration
