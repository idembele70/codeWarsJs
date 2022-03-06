function getEvenNumbers(numbersArray=[ 0,28,15,83,85,27,81,74,50]) {
  for (const index in numbersArray) {
    if(numbersArray[index] % 2)
    numbersArray.splice(index,1,null)
  }
  return numbersArray.filter(x=>Number.isInteger(x))
}
console.log(getEvenNumbers())
// [getDivisorsCnt] using filter and forin iteration Number isInteger