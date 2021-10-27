function getEvenNumbers(numbersArray=[1,2,3]) {
  const filtered = []
   numbersArray.forEach(
    number=>number % 2 ===0 && filtered.push(number)
  )
  return filtered
}
console.log(getEvenNumbers());
// [getEvenNumbers] using forEach iteration
