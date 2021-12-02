function getEvenNumbers(numbersArray=[1,2,3,6,8,10]) {
  return numbersArray.filter(
    number=>number%2==0
  )
}
// [duplicateCount] using filter function