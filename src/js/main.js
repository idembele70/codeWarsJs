function stray(numbers=[1,1,2]) {
  for (const number of numbers) {
    if(numbers.lastIndexOf(number) === numbers.indexOf(number)) return number
  }
}
console.log(stray());
// [stray] using forof iteration lastIndexOf and indexOf iterration 
