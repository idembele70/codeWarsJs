function highAndLow(numbers="1 2 3 6") {
  numbers = numbers.split(' ').sort(
    (a,b)=>b-a
  )
  return numbers[0]+" "+ numbers.reverse()[0]
}
console.log(highAndLow());
// [highAndLow] using split sort and reverse function