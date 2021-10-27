function getEvenNumbers(numbersArray=[1,2,3]) {
  const filtered = []
  for (let i = 0; i < numbersArray.length; i++) {
    const number = numbersArray[i];
    if(number % 2) continue
    else filtered.push(number)
  }
  return filtered
}
console.log(getEvenNumbers());
// [getEvenNumbers] using for iteration, Array push function
