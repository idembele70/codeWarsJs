function removeSmallest(numbers = [1, 2, 3, 4, 5, 1]) {
  const min = Math.min(...numbers)
  for (const number of numbers) {
    if(min === number){
      numbers.splice(numbers.indexOf(number),1)
      break;
    }
    
  }
  return numbers
}
console.log(removeSmallest());
// [removeSmallest] trying