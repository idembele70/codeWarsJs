function getEvenNumbers(numbersArray=[1,2,3,6,8,10]) {
  const evenArray = []
   numbersArray.forEach(element => {
    if(!(element % 2)) evenArray.push(element)
  })
  return evenArray
}
// [duplicateCount] using const variable foreach and array push function