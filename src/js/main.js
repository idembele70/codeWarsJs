function getEvenNumbers(numbersArray=[ 0,28,15,83,85,27,81,74,50]) {
  for (const index in numbersArray) {
    if(numbersArray[index] % 2)
    numbersArray.splice(index,1,undefined)
  }
  return numbersArray.filter(x=>x !== undefined)
}
console.log(getEvenNumbers())
// [getDivisorsCnt] using filter and forin iteration